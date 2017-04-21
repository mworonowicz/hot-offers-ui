// @flow
import type {Action} from '../types';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from '../constants';


function login(user) {
  //import api call instead of this function
  console.log("tried to login " + user);

}

export function loginUser() {
  return (dispatch, getState) => {
    const user = {
      username: getState().login.username,
      password: getState().login.password,
    };

    return dispatch({
      types: [
        LOGIN_USER_PENDING,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_ERROR,
      ],
      payload: {
        promsise: login(user)
          .then((res) => {
            dispatch({
              type: 'LOGIN_ADDITIONAL_ACTION',
              smth: 'something',
            });
            return res;
          }),
        },
      });
    };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  }
}

export const loginSuccess = (): Action => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            isLoggedIn: true
        }
    }
};
