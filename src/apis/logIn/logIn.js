import authInstance from "../../lib/authInstance";

const logIn = (credentials) =>
  authInstance
    .post("/login", credentials)
    .then((response) => response.config.data);

export default logIn;
