import React from "react";
import styled from "styled-components";
import BookingDetails from "./components/BookingDetails";
import TimeSelector from "./components/TimeSelector";
import DoctorSelector from "./components/DoctorSelector";
import DateSelector from "./components/DateSelector";
import addAppointment from "../../utils/addAppointment";
import getAppointmentByDoctorAndDate from "../../utils/getAppointmentByDoctorAndDate";
import { getRoutePath } from "../../utils/getRoute";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-items: center;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.3);
`;

const SelectArea = styled.div`
  width: 100%;
  border-radius: 0 0 0 15px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Note = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  textarea {
    min-height: 100px;
  }
`;

const TextArea = styled.textarea`
  height: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
`;

class BookingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor: null,
      date: "",
      startTime: "",
      endTime: "",
      notes: "",
      errorMessage: "",
      invalidAppointments: [],
    };
    this.handleSelector = this.handleSelector.bind(this);
    this.handleBookingClick = this.handleBookingClick.bind(this);
    this.handleTimeSelector = this.handleTimeSelector.bind(this);
    this.handleDoctorSelector = this.handleDoctorSelector.bind(this);
    this.handleDateSelector = this.handleDateSelector.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }

  handleBookingClick() {
    this.setErrorMessage("");
    if (localStorage.getItem("ROLE") === "ROLE_PATIENT") {
      const { date, startTime, doctor, endTime, notes } = this.state;
      const appointment = {
        date: date,
        startingTime: startTime,
        endingTime: endTime,
        notes: notes,
        isCancelled: false,
        patient: localStorage.getItem("USER_ID"),
        doctor: doctor === null ? null : doctor.id,
      };

      doctor === null || date === "" || startTime === "" || endTime === ""
        ? this.setErrorMessage("Invalid Appointment Details")
        : addAppointment(appointment);
      window.location.href = getRoutePath("user_center/manageBookings");
    } else
      this.setErrorMessage(
        "Only patients can make appointments after logged in"
      );
  }

  handleSelector(key) {
    switch (key) {
      case "doctor":
        return (doctor) => this.handleDoctorSelector(doctor);
      case "date":
        return (date) => this.handleDateSelector(date);
      case "time":
        return (event) => this.handleTimeSelector(event);
      default:
        return null;
    }
  }

  handleTimeSelector(event) {
    this.setState({
      startTime: event.target.value,
      endTime: event.target.value,
    });
  }

  setInvalidTime() {
    const { doctorId, date } = this.state;
    getAppointmentByDoctorAndDate(doctorId, date).then((appointmentList) => {
      this.setState({ invalidAppointment: appointmentList });
    });
  }

  handleDoctorSelector(doctor) {
    const { date } = this.state;
    getAppointmentByDoctorAndDate(doctor.id, date).then((appointmentList) => {
      this.setState({
        doctor: doctor,
        invalidAppointments: appointmentList,
      });
    });
  }

  handleDateSelector(date) {
    const doctorId = this.state.doctor === null ? 0 : this.state.doctor.id;
    getAppointmentByDoctorAndDate(doctorId, date.format("YYYY-MM-DD"))
      .then((appointmentList) => {
        this.setState({
          date: date.format("YYYY-MM-DD"),
          invalidAppointments: appointmentList,
        });
      })
      .catch(() => {
        this.setState({
          date: date.format("YYYY-MM-DD"),
        });
      });
  }

  handleNoteChange(event) {
    this.setState({
      notes: event.target.value,
    });
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
    });
  }

  render() {
    const {
      doctor,
      date,
      startTime,
      errorMessage,
      invalidAppointments,
    } = this.state;

    return (
      <Layout>
        <BookingDetails
          doctor={doctor}
          date={date}
          time={startTime}
          onBooingClick={this.handleBookingClick}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <SelectArea>
          <DoctorSelector
            title="Select Doctor"
            selected={
              doctor === null ? "" : doctor.firstName + " " + doctor.lastName
            }
            onSelect={this.handleSelector("doctor")}
          />
          <DateSelector
            title="Select Date"
            onSelect={this.handleSelector("date")}
          />
          <TimeSelector
            title="Select Time "
            onSelect={this.handleSelector("time")}
            doctorId={doctor === null ? "" : doctor.id}
            date={date}
            invalidAppointments={invalidAppointments}
          />
          <Note>
            <h3>Notes</h3>
            <TextArea onChange={(e) => this.handleNoteChange(e)} />
          </Note>
        </SelectArea>
      </Layout>
    );
  }
}

export default BookingPage;
