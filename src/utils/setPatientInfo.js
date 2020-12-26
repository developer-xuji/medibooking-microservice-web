import processData from "../apis/processData";

const setPatientInfo = (patientInfo) => {
  const patientId = localStorage.getItem("USER_ID");
  return processData("/patients/" + patientId, "put", null, patientInfo).then(
    (response) => response
  );
};

export default setPatientInfo;
