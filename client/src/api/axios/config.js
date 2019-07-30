import axios from 'axios';
import ACTION from '../../actions/actiontsTypes';
import {restURL} from '../baseURL';
import Store from '../../boot/store';

axios.interceptors.request.use( config => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response,
    async (error) => {
        if(error.response.status === 401 && error.response.data.token === "access" ) {// TODO
            try {
                const {data: {tokenPair: tokens, user}} = await axios.post(restURL + '/refresh', getRefreshBody());
                Store.dispatch({type: ACTION.SET_TOKENS_ACTION, tokens});

                error.config.headers['Authorization'] = "Bearer "+tokens.access;
                error.config.__isRetryRequest=true;

                Store.dispatch({type: ACTION.USERS_RESPONSE, user});
                return axios(error.config);
            } catch (err) {
                Store.dispatch({type: ACTION.TOKEN_ERROR});
            }
        }
        return error;
    });

export const setAuthRequest = (accessToken) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
};

export const getAuthRequest = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
};

export default axios;
