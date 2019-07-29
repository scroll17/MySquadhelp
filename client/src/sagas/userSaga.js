import ACTION from "../actions/actiontsTypes";
import {put, call} from 'redux-saga/effects';

import history from "../boot/browserHistory";

import {
  loginUser,
    getUser,
  userLogout,
  getAllUser,
} from '../api/rest/restContoller';

import { getAuthRequest } from '../api/axios/config';

export function* loginUserSaga({user}) {
  yield put({ type: ACTION.USERS_REQUEST });
  try {

    const { data } = yield loginUser(user);

    yield put({type: ACTION.USERS_RESPONSE, user: data.user});
    yield put({type: ACTION.SAVE_TOKENS_TO_LOCAL, tokens: data.tokenPair});

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

    yield put({type: ACTION.USERS_RESPONSE});
  } catch (e) {
    yield put({type: ACTION.USERS_ERROR, error: e})
  }
}


export function* getAllUserSaga() {
  try {
    const { data } = yield call(getAllUser);
    console.log(data);

    yield put({type: ACTION.USERS_RESPONSE, users: data});
  } catch (e) {
    yield put({type: ACTION.USERS_ERROR, error: e})
  }
}
