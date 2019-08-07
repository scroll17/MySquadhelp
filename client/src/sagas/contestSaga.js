import ACTION from "../actions/actiontsTypes";
import { createContest } from "../api/rest/restContoller";

import { toast } from 'react-toastify';

import { put, call } from 'redux-saga/effects';
import history from "../boot/browserHistory";


export function* createContestSaga({contest}) {
    try {


        const { data } = yield createContest(contest);

        console.log(data);


/*        toast.success(data, {
            position: toast.POSITION.TOP_CENTER
        });*/

        yield call(history.push, '/');


        yield put({type: ACTION.USERS_RESPONSE});
    } catch (e) {
        yield put({type: ACTION.USERS_ERROR, error: e})
    }
}

