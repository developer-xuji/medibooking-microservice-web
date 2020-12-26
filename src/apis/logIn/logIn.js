import instance from "../../lib/instance";

const logIn = (credentials) =>
  instance.post("/login", credentials).then((response) => response.config.data);

export default logIn;
