import ACTION from './actiontsTypes';

export const nextContestForm = contest => ({
  type: ACTION.NEXT_STAGE_CONTEST,
  contest
});


export const createStoreResponse = error => ({
  type: ACTION.USERS_RESPONSE,
  error
});

export const createUser = user => ({
  type: ACTION.CREATE_USER_ACTION,
  user
});
export const loginUser = user => ({
  type: ACTION.LOGIN_USER_ACTION,
  user
});
export const userLogout = (refreshToken) => ({
  type: ACTION.USER_LOGOUT,
  refreshToken,
});

export const getUser = () => ({
  type: ACTION.GET_USER_ACTION
});

export const getAllUsers = () => ({
  type: ACTION.GET_ALL_USERS,
});
export const banUserById = (userId, isBanned) => ({
  type: ACTION.BAN_USER_BY_ID,
  userId,
  isBanned,
});
