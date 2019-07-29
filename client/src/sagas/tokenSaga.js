import ACTION from "../actions/actiontsTypes";
import { call } from 'redux-saga/effects';

import { setAuthRequest } from '../api/axios/config';

export function* saveTokenSaga({tokens}) {
    if(tokens){
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
    }
    yield call( setAuthRequest , tokens.accessToken); //TODO
}
