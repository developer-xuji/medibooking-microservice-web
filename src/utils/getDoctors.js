import processData from "../apis/processData";

const getDoctors = () =>
  processData("/doctors", "get", null).then((response) => response);
export default getDoctors;
