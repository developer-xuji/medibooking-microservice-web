import processData from "../apis/processData";

const addAppointment = (patient) =>
  processData("/patients", "post", null, patient)
    .then((response) => console.log(response))
    .catch((response) => console.log(response));
export default addAppointment;
