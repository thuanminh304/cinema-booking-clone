import axios from "axios";
import {  BASE_URL } from "settings/apiConfig";

const callApiCl = (endpoint, method = "GET", data = null) => {
  return axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    data,
  });
};
export default callApiCl;
