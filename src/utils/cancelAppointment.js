import processData from "../apis/processData";

const cancelAppointment = (appointmentId) => {
  return processData(
    "/management/appointments/" + appointmentId,
    "put",
    null,
    null
  ).then((response) => response);
};

export default cancelAppointment;
