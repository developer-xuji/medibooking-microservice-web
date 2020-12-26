import processData from "../apis/processData";

const addAppointment = (appointment) => {
  processData(
    "/management/appointments",
    "post",
    null,
    appointment
  ).then((response) => console.log(response));
};

export default addAppointment;
