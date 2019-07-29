import ACTION from "../actions/actiontsTypes";
import { call } from 'redux-saga/effects';

import { getAuthRequest } from '../api/axios/config';

export function* saveTokenSaga({tokens}) {
    if(tokens){
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);


/*       yield call(localStorage.setItem,["accessToken", tokens.accessToken]);
       yield call(localStorage.setItem,["refreshToken", tokens.refreshToken]);*/
    }
    yield call( getAuthRequest , tokens.accessToken); //TODO
}
