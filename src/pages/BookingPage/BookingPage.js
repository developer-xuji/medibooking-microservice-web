import React from "react";
import styled from "styled-components";
import BookingDetails from "./components/BookingDetails";
import TimeSelector from "./components/TimeSelector";
import DoctorSelector from "./components/DoctorSelector";
import DateSelector from "./components/DateSelector";
import fetchData from "../../apis/fetchData/fetchData";
import postData from "../../apis/postData";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  align-items: center;
  margin: 100px auto;
  border-radius: 15px;
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.3);
  height: 550px;
`;

const SelectArea = styled.div`
  overflow-y: auto;
  width: 100%;
  border-radius: 0 0 0 15px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 100%;
  & ~ & {
    margin: 20px 0;
  }
`;

const DOCTORS = [
  {
    name: "Tom",
  },
  {
    name: "Jack",
  },
  {
    name: "Steven",
  },
  {
    name: "Peter",
  },
];

class BookingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Doctor: "Tom",
      Date: "2020-12-01",
      Time: "09:00",
    };
    this.handleBookingClick = this.handleBookingClick.bind(this);
    this.handleTimeSelector = this.handleTimeSelector.bind(this);
    this.handleDoctorSelector = this.handleDoctorSelector.bind(this);
    this.handleDateSelector = this.handleDateSelector.bind(this);
  }

  handleBookingClick() {
    //this.props.history.push("/doctors");
    const appointment = {
      date: "2017-01-01",
      startTime: "17:10:00",
      endTime: "17:25:00",
      appointmentMessage: "headache",
      isCancelled: "Yes",
      patient: 4,
      doctor: 2,
    };

    const parameter = {
      name: "patientId",
      value: 1,
    };
    fetchData("/management/appointments/search", parameter);
    postData("/management/appointments", appointment);
  }

  handleTimeSelector(key) {
    return (value) => {
      this.setState({
        [key]: value.format("HH:mm"),
      });
    };
  }

  handleDoctorSelector(key) {
    return (value) => {
      console.log(value);
      this.setState({
        [key]: value,
      });
    };
  }

  handleDateSelector(key) {
    return (value) => {
      this.setState({
        [key]: value.format("YYYY-MM-DD"),
      });
    };
  }

  render() {
    const { Doctor, Date, Time } = this.state;
    const SELECTORS = [
      {
        key: "time_selector",
        selector: (
          <TimeSelector
            title="Select Time "
            onSelect={this.handleTimeSelector("Time")}
          />
        ),
      },
      {
        key: "date_selector",
        selector: (
          <DateSelector
            title="Select Date"
            onSelect={this.handleDateSelector("Date")}
          />
        ),
      },
      {
        key: "doctor_selector",
        selector: (
          <DoctorSelector
            title="Select Doctor"
            doctors={DOCTORS}
            selected={Doctor}
            onSelect={this.handleDoctorSelector("Doctor")}
          />
        ),
      },
    ];
    return (
      <Layout>
        <BookingDetails
          doctor={Doctor}
          date={Date}
          time={Time}
          onBooingClick={this.handleBookingClick}
        />
        <SelectArea>
          {SELECTORS.map((s) => (
            <Section key={s.key}>{s.selector}</Section>
          ))}
        </SelectArea>
      </Layout>
    );
  }
}

export default BookingPage;
