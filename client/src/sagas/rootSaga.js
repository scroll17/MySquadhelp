import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

import {
  loginUserSaga,
  getUserSaga,
  userLogoutSaga,
  getAllUserSaga,
  banUserByIdSaga,
} from './userSaga';

import { saveTokenSaga } from './tokenSaga'

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_USER_ACTION, loginUserSaga);
  yield takeLatest(ACTION.TOKENS_ACTION_WITH_LOCAL, saveTokenSaga);
  yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
  yield takeLatest(ACTION.USER_LOGOUT, userLogoutSaga);
  yield takeLatest(ACTION.GET_ALL_USERS, getAllUserSaga);
  yield takeLatest(ACTION.BAN_USER_BY_ID, banUserByIdSaga);

}

export default rootSaga;
