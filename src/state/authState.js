import {atom, selector, useSetRecoilState} from "recoil";
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
  get: ({get}) => {
    const {user} = get(authState);

    if (isEmpty(user)) {
      console.log('Get user from server');
      return DummyLoginResults.user;
    }

    return user;
  },
});

export const logoutState = selector
