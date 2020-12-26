import instance from "../../lib/instance";

const signUp = (data) =>
  instance.post("/register", data).then((response) => response.data);

export default signUp;
