import { USER_ACTION_TYPES } from "./user.type";

import { createAction } from "../../components/utils/firebase/reducer.utils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURENT_USER, user);
};

/*
CHECK_USER_SESSION: 'CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START:'GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START:'EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS:'SIGN_IN_SUCCESS',
    SIGN_IN_FAILED: 'SIGN_IN_FAILURE',

*/

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = ( user, additionalDetailes ) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetailes });

export const signUpFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED);
