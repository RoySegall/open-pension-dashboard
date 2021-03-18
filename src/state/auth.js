import {atom} from "recoil";

export const auth = atom({
  key: 'auth',
  default: {
    token: null,
    expires: null,
    user: {},
  },
});
