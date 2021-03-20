import {atom, selector} from "recoil";

export const authState = atom({
  key: 'authState',
  default: {
    token: null,
    expires: null,
    user: {},
  },
});

export const loggedInUserState = selector({
  key: 'loggedInUserState',
  get: ({get}) => {
    const {user} = get(authState);
    return user;
  },
});
