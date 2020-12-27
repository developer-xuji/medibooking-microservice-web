import axios from "axios";
import getAuth from "../../apis/getAuth";
import { AUTHENTICATION_URL } from "../../env";

const authInstance = axios.create({
  baseURL: AUTHENTICATION_URL,
});

authInstance.interceptors.response.use((response) => {
  const authToken = response.headers.authorization;
  if (authToken) {
    const jwtToken = authToken.substring(7);
    localStorage.setItem("JWT_TOKEN", jwtToken);
    getAuth({ token: jwtToken });
  }
  return response;
});

authInstance.interceptors.request.use((request) => {
  const token = window.localStorage.getItem("JWT_TOKEN");
  if (token) {
    request.headers["Authorization"] = "Bearer " + token;
  }
  return request;
});

export default authInstance;
