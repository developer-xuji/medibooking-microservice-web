import authInstance from "../../lib/authInstance";
import setUserDetail from "../../utils/setUserDetail";

const getAuth = (token) =>
  authInstance.post("/auth", token).then((response) => {
    const { accountId, grantedAuthorities } = response.data;
    const { authority } = grantedAuthorities[0];
    const role = authority;
    localStorage.setItem("ACCOUNT_ID", accountId);
    localStorage.setItem("ROLE", role);
    setUserDetail(role, accountId);

    return response;
  });

export default getAuth;
