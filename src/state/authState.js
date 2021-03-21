import {atom, selector} from "recoil";
import {isEmpty} from 'lodash';

export const DummyLoginResults = {
  token: 'pizza',
  expires: new Date(),
  user: {id: 1, name: 'admin', email: 'admin@admin.com'}
};

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
  get: async ({get}) => {
    const {user} = get(authState);

    if (isEmpty(user)) {
      console.log('Get user from server');

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(DummyLoginResults.user);
        }, 3000);
      });
    }

    return user;
  },
});

export const logoutState = selector
