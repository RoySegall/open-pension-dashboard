import axios from 'axios';

export const API_URL = process.env.REACT_APP_API;
export const STORAGE_URL = process.env.REACT_APP_STORAGE_API;

let axiosInstance = null;

function getAxios() {
  if (axiosInstance) {
    return axiosInstance;
  }

  axiosInstance = axios.create({
    baseURL: API_URL,
  });

  axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = token;
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Maintain here access token and refresh token.
  return axiosInstance;
}

async function sendQuery(query) {
  const axios = getAxios();

  const {data: response} = await axios.post('', {
    query
  });

  const {data, errors} = response;

  let error;
  if (errors) {
    error = errors[0].message;
  }
  return {data, error};
}

export async function loginQuery({username, email, password}) {
  const results = await sendQuery(`
    mutation {
      tokenCreate(username: "${username}", email: "${email}", password: "${password}") {
        token 
        refreshToken
        expires
      }
    }
  `);
  const {data: {tokenCreate: data}, error} = results;
  return {data, error}
}

export async function me() {
  const results = await sendQuery(`
    query {
      me {
        username
      }
    }
  `);

  const {data: {me: data}, error} = results;
  return {data, error}
}

export async function getFiles() {
  const results = await sendQuery(`
    query {
      files {
        id
        filename
        status
        storageId
      }
    }
  `);
  const {data: {files: data}, error} = results;
  return {data, error}
}

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file',file);

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }

  const {data: {ID, filename}} = await axios.post(`${STORAGE_URL}/file`, formData, config);
  await sendQuery(`
    mutation {
      fileCreate(filename: "${filename}", storageId: ${ID}, status: "stored") {
        id
      }
    }
  `);
}
