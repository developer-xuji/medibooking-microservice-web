import processData from "../apis/processData";
import encodePassword from "./encodePassword";

const changePassword = (password) => {
  const encodedPassword = encodePassword(password);
  const accountId = localStorage.getItem("ACCOUNT_ID");
  processData("/register/" + accountId, "put", null, {
    encodedPassword: encodedPassword,
  }).then((response) => console.log(response));
};

export default changePassword;
