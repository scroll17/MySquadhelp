import axios from '../axios/config';
import { restURL } from '../baseURL';


export const loginUser = ( user ) => axios.post(`${restURL}/login`,  user );

export const getUser = () =>  axios.get(restURL + '/user');

export const userLogout = (refreshToken) => axios.delete(`${restURL}/logout`,  { refreshToken });

export const getAllUser = () =>  axios.get(restURL + '/allUser');
