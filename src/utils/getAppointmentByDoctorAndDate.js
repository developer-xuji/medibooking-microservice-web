import processData from "../apis/processData";

const getAppointmentByDoctorAndDate = (doctorId, date) => {
  const parameterList = [
    {
      name: "doctorId",
      value: doctorId,
    },
    {
      name: "date",
      value: date,
    },
  ];
  return processData("/management/appointments", "get", parameterList, null);
};

export default getAppointmentByDoctorAndDate;
