const axios = require("axios");

export const baseURL = "https://mytwitterserver.herokuapp.com/";
export const api = axios.create({ baseURL });

export default api;
