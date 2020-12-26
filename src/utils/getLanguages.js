import processData from "../apis/processData";

const getLanguages = () =>
  processData("/languages", "get", null).then((response) => response);
export default getLanguages;
