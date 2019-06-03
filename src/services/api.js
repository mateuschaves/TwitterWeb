const axios = require("axios");

export const baseURL = "https://sibigdata.herokuapp.com/";
// export const baseURL = "http://localhost:5000/";
export const api = axios.create({ baseURL });

export default api;
