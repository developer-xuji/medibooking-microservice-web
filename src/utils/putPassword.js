import processData from "../apis/processData";

const putPassword = (accountId, account) =>
  processData(`/register/${accountId}`, "put", null, account).then((response) => console.log(response));
export default putPassword;