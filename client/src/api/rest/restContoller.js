import axios from '../axios/config';
import { restURL } from '../baseURL';

export const loginUser = ( user ) => axios.post(`${restURL}/login`,  user );
export const createUser = ( user ) => axios.post(`${restURL}/user`,  user );
export const userLogout = (refreshToken) =>  axios.delete(`${restURL}/logout`, { data:{ refreshToken } });

export const getUser = () =>  axios.get(restURL + '/user');

export const getAllUser = () =>  axios.get(restURL + '/AllUser');
export const banUserById = (userId, isBanned) => axios.put(`${restURL}/user/${userId}`, { isBanned });
