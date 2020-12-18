import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.response.use((response) => {
  const authToken = response.headers.authorization;
  if (authToken) {
    const jwtToken = authToken.substring(7);
    localStorage.setItem("JWT_TOKEN", jwtToken);
  }
  return response;
});

instance.interceptors.request.use((request) => {
  const token = window.localStorage.getItem("JWT_TOKEN");
  if (token) {
    request.headers["Authorization"] = "Bearer " + token;
  }
  return request;
});

export default instance;
