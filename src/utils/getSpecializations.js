import processData from "../apis/processData";

const getSpecializations = () =>
  processData("/languages", "get", null).then((response) => response);
export default getSpecializations;
