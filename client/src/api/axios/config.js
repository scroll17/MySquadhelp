import axios from 'axios';


export const setAuthRequest = (accessToken) => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
};

export const getAuthRequest = () => {
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("accessToken");
};

export default axios;
