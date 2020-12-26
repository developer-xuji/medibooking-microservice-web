import processDate from "../apis/processData";
import getParameterList from "./getParameterList";

const setUserDetail = (role, account_id) => {
  const url = role === "ROLE_DOCTOR" ? "/doctors" : "/patients";
  const param = {
    name: "accountId",
    value: account_id,
  };
  const parameterList = getParameterList(param);
  processDate(url, "get", parameterList).then((response) => {
    console.log(response);
    localStorage.setItem("USER_ID", response.id);
  });
};

export default setUserDetail;
