import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';
import {restURL} from '../baseURL';
import store from '../../boot/config';

import history from "../../boot/browserHistory";

axios.interceptors.request.use(  config => {
    config.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
    return config;
}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(
    response => response,
    async (error) => {
        try {
            switch (error.response.status) {
                case 401:
                    console.log(401);
                    localStorage.clear();
                    history.push('/login');
                    break;
                case 419:
                    console.log(419);
                    const {data: {tokenPair , user}} = await axios.post(`${restURL}/refresh`, {refreshToken: localStorage.getItem("refreshToken")});
                    store.dispatch({type: ACTION.TOKENS_ACTION_WITH_LOCAL, tokenPair});
                    store.dispatch({type: ACTION.USERS_RESPONSE, user});
                    break;
            }
        } catch (err) {
            console.log('/axios/config : ',err);
            store.dispatch({type: ACTION.TOKENS_ERROR, err});
        }
        //return error;
    }
);


export const setAuthRequest = (accessToken) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
};

export const getAuthRequest = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
};

export default axios;
