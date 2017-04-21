// @flow
import { fromJS } from 'immutable';

import type {Action} from '../types';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_PENDING,
  LOGOUT_USER,

} from '../constants';

export type LoginState = {
    isLoggedIn: boolean;
}

const initialLoginState: LoginState = fromJS({
    isLoggedIn: false,
    isLoading: false,
});

function loginReducer (state: LoginState = initialLoginState, action: Action): LoginState {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return state.merge(fromJS({
        isLoggedIn: true,
        isLoading: false,
      }));

    case LOGIN_USER_PENDING:
      return state.merge(fromJS({
        isLoggedIn: false,
        isLoading: true,
      }));

    case LOGIN_USER_ERROR:
      return state.merge(fromJS({
        isLoggedIn: false,
        isLoading: false,
      }));

    case LOGOUT_USER:
      return state.merge(initialLoginState);

    default:
      return state;
    }
};

export default loginReducer;
