import React from "react";
import styled from "styled-components";
import Modal from "../../../../../../../../../../../../components/Modal";
import InfoItem from "./components/InfoItem";
import cancelledImage from "../../../../../../../../../../../../assets/images/cancelled.png";
import fetchData from "../../../../../../../../../../../../apis/fetchData";

const Block = styled.div`
  padding-bottom: 15px;
  /* border-bottom: 1px solid lightblue; */
`;
const AppointmentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: ${(props) => (props.message ? "#6666ff" : "#fc8368")};
  padding-left: 10px;
  padding-bottom: 3px;
`;

const Doctor = styled.a`
  margin: 0 60px;
  height: 80px;
  width: 250px;
  border: 2px solid #e9e9ea;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: black;

  &:hover {
    border: 2px solid #02a4b7;
  }
`;

const Avatar = styled.img`
  height: 76px;
  width: 76px;
`;

const DoctorName = styled.span`
  flex: 1;
  text-align: center;
`;

const Message = styled.div`
  /* width: 100%; */
  padding: 0 60px;
  font-weight: 600;
  word-wrap: break-word;
  word-break: normal;
`;
const Cancelled = styled.img`
  position: absolute;
  width: 200px;
  height: 100px;
  left: 55%;
  top: 55%;
  z-index: 300;
`;

class AppointmentDetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientData: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const { booking } = this.props;
    const url = `/patients/patientId/${booking.patient}`;

    fetchData(url).then((data) => {
      console.log(data);
      this.setState({
        patientData: data,
        loading: false,
      });
    });
  }

  render() {
    const { onClose, booking } = this.props;
    const { patientData, loading } = this.state;

    return (
      !loading && (
        <Modal
          large
          onClose={onClose}
          title="Appointment Detail"
          body={
            <>
              <Block>
                <Title>Booking</Title>
                <AppointmentInfo>
                  <InfoItem label="Id">{booking.id}</InfoItem>
                  <InfoItem label="Date">{booking.date}</InfoItem>
                  <InfoItem label="Time">{`${booking.startingTime} `}</InfoItem>
                </AppointmentInfo>
              </Block>
              <Block>
                <Title>Patient</Title>
                <AppointmentInfo>
                  <InfoItem label="Name">{booking.patientName}</InfoItem>
                  <InfoItem label="Age">{patientData.age}</InfoItem>
                  <InfoItem label="Gender">{patientData.gender}</InfoItem>
                </AppointmentInfo>
              </Block>

              <Title>Doctor</Title>
              <Doctor href={`/doctors/${booking.doctor}`}>
                <Avatar src={booking.doctorIcon} />
                <DoctorName>{booking.doctorName}</DoctorName>
              </Doctor>
              {booking.isCancelled && <Cancelled src={cancelledImage} />}
            </>
          }
          footer={
            <>
              <Title message>Patient Message</Title>
              <Message>{booking.notes}</Message>
            </>
          }
        />
      )
    );
  }
}

// const AppointmentDetailModal = ({ onClose, booking }) => (

// );

export default AppointmentDetailModal;
