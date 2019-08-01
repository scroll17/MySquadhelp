import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';
import {restURL} from '../baseURL';
import { store } from '../../boot/store';

import history from "../../boot/browserHistory";


axios.interceptors.request.use(  config => {
    store.dispatch({type: ACTION.USERS_REQUEST});
    //console.log('config USERS_REQUEST');

    config.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
    return config;
}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(
    response => response,
    async (error) => {
        const { response: {config} } = error;
/*        console.log('error:', error.response);
        console.log('config:', config);*/
        try {
            switch (error.response.status) {
                case 401:
                    localStorage.clear();
                    history.push('/login');
                    break;
                case 419:
                    //console.clear(); //TODO console._commandLineAPI.clear();

                    const {data: {tokenPair,  user}} = await axios.post(`${restURL}/refresh`, {refreshToken: localStorage.getItem("refreshToken")});
                    const tokens = tokenPair;

                    store.dispatch({type: ACTION.TOKENS_ACTION_WITH_LOCAL, tokens });
                    store.dispatch({type: ACTION.USERS_RESPONSE, user});
                    break;
            }
        } catch (err) {
            console.log('/axios/config : ',err);
            store.dispatch({type: ACTION.TOKENS_ERROR, err});
        }

        //return axios.request(config); //TODO Делает повторный звпрос неудачного запроса
    }
);


export const setAuthRequest = (accessToken) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
};

export const getAuthRequest = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
};

export default axios;
