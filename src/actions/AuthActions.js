import { Actions } from 'react-native-router-flux';
import ax from './../config/axiosSetup';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    ax.post('login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload: error.response
      });
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
