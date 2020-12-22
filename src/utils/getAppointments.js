import processData from "../apis/processData";
import getParameterList from "./getParameterList";

const getAppointments = () => {
  const userId = localStorage.getItem("USER_ID");
  const role = localStorage.getItem("ROLE");
  const idName = role === "ROLE_PATIENT" ? "patientId" : "doctorId";
  const parametersList = getParameterList({
    name: idName,
    value: userId,
  });
  processData(
    "/management/appointments",
    "get",
    parametersList
  ).then((response) => console.log(response));
};

export default getAppointments;
