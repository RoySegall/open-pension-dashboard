import {useState} from 'react';
import './Login.scss';
import {Redirect} from "react-router-dom";
import {Input} from "../Form/Form";
import {isEmpty} from "lodash";
import {useSetRecoilState} from "recoil";
import {authState, DummyLoginResults} from "../../state/authState";

const login = ({username, password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (username === "admin" && password === "admin" ) {
        resolve(DummyLoginResults);
      } else {
        reject({'error': 'Wrong username or password'});
      }
    }, 3000);
  });
}

const validateForm = ({username, password, setErrors}) => {
  if (isEmpty(username) || isEmpty(password)) {
    const errors = {};

    if (isEmpty(username)) {
      errors['username'] = 'Username cannot be empty';
    }

    if (isEmpty(password)) {
      errors['password'] = 'Password cannot be empty';
    }

    setErrors(errors);
    return false;
  }

  return true;
}

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [error, setError] = useState('');
  const setAuthState = useSetRecoilState(authState);

  if (redirectToHome) {
    return <Redirect to={"/home"} />
  }

  const handleClick = async () => {
    // Reset the loading status.
    setIsLoading(false);
    setError('');
    setErrors({});

    const isFormValid = validateForm({username, password, setErrors});
    if (!isFormValid) {
      return;
    }

    setIsLoading(true);

    try {
      const {token, expires, user} = await login({username, password});

      setAuthState(oldAuth => {
        return {
          ...oldAuth,
          token,
          expires,
          user,
        };
      });
      setRedirectToHome(true);
    } catch (e) {
      setError(e.error);
    }

    setIsLoading(false);
  }

  const { username: usernameError, password: passwordError } = errors;
  return <div className="login-wrapper">
    <section className="umbre-background">
      <h1 className="h1">Welcome to Open Pension Dashboard</h1>
      <p className="p">
        This is the dashboard for managing Open Pension - If you don't have an account then get out!
      </p>
    </section>

    <section className="login">
      <small className="title">Login</small>

      {error && <div className="message error">{error}</div>}

      <div className="inputs">
        <Input title={"Email"} type="text" id="username" className="email" placeholder="Enter email" onChange={(e) => {setUsername(e.target.value)}} error={usernameError} />
        <Input title={"Password"} type="password" id="username" className="password"  placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}} error={passwordError} />
      </div>

      <button className={`button button-ok ${isLoading ? 'on-click':''}`} onClick={() => handleClick()}>Login</button>
    </section>
  </div>
};
