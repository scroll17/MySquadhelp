import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';

import {
  loginUserSaga,
  getUserSaga,
  userLogoutSaga,
  getAllUserSaga,
} from './userSaga';

import { saveTokenSaga } from './tokenSaga'

function* rootSaga() {
  yield takeLatest(ACTION.LOGIN_USER_ACTION, loginUserSaga);
  yield takeLatest(ACTION.SAVE_TOKENS_TO_LOCAL, saveTokenSaga);
  yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
  yield takeLatest(ACTION.USER_LOGOUT, userLogoutSaga);
  yield takeLatest(ACTION.GET_ALL_USERS, getAllUserSaga);

}

export default rootSaga;
