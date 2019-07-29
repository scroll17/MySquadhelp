import ACTION from './actiontsTypes';

export const createUser = user => ({
  type: ACTION.CREATE_USER_ACTION,
  user
});

export const loginUser = user => ({
  type: ACTION.LOGIN_USER_ACTION,
  user
});

export const getUser = () => ({
  type: ACTION.GET_USER_ACTION
});

export const userLogout = (refreshToken) => ({
  type: ACTION.USER_LOGOUT,
  refreshToken
});

export const getAllUsers = () => ({
  type: ACTION.GET_ALL_USERS,
});
