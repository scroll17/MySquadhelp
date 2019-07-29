import ACTION from "../actions/actiontsTypes";
import {put, call, select} from 'redux-saga/effects';

import history from "../boot/browserHistory";

import {
  loginUser,
    getUser,
  userLogout,
  getAllUser,
  banUserById,
} from '../api/rest/restContoller';

import { getAuthRequest } from '../api/axios/config';

export function* loginUserSaga({user}) {
  yield put({ type: ACTION.USERS_REQUEST });
  try {

    const { data } = yield loginUser(user);

    yield put({type: ACTION.USERS_RESPONSE, user: data.user});
    yield put({type: ACTION.TOKENS_ACTION_WITH_LOCAL, tokens: data.tokenPair});

    yield call(history.push, '/');

  } catch (e) {
    yield put({type: ACTION.USERS_ERROR, error: e})
  }
}

export function* getUserSaga() {
  yield put({type: ACTION.USERS_REQUEST});
  try {
    if(localStorage.getItem("accessToken")){
      yield call(getAuthRequest);
      const {data} = yield getUser();
      yield put({type: ACTION.USERS_RESPONSE, user: data});
    }else{
      yield put({type: ACTION.USERS_ERROR, error: "Token not found"})
    }
  } catch (e) {
    yield put({type: ACTION.USERS_ERROR, error: e})
  }
}

export function* userLogoutSaga({refreshToken}) {

  try {
    yield call(userLogout,refreshToken);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    yield put({type: ACTION.TOKENS_ACTION_WITH_LOCAL, tokens: {accessToken: "", refreshToken: ""}});
    yield put({type: ACTION.USERS_RESPONSE, user: null});
  } catch (e) {
    yield put({type: ACTION.USERS_ERROR, error: e})
  }
}


export function* getAllUserSaga() {
  try {
    const { data } = yield call(getAllUser);
    yield put({type: ACTION.USERS_RESPONSE, users: data});
  } catch (e) {
    yield put({type: ACTION.USERS_ERROR, error: e})
  }
}

export function* banUserByIdSaga({userId, isBanned}) {
  yield  put({ type: ACTION.USERS_REQUEST });
  try {
    const { data } = yield banUserById(userId, isBanned);

    let { userReducers: { users: prevUsers } } = yield select();               // connect to store
    const users = [...prevUsers];

    const userIndex = users.findIndex( user => data.id === user.id);
    if(userIndex >= 0) users[userIndex] = data;

    yield put({type: ACTION.USERS_RESPONSE, users: users});
  } catch (e) {
    yield put({ type: ACTION.USERS_ERROR, error: e });
  }
}
