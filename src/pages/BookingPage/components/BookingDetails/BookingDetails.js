import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";

const HEIGHT = "140px";

const Layout = styled.div`
  border-radius: 15px 15px 0 0;
  background-color: rgb(46, 202, 127);
  height: ${HEIGHT};
  width: 100%;
  top: 0;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  flex: 2;
  color: white;
  line-height: ${HEIGHT} / 3;
  font-size: 30px;
`;

const BookingButton = styled(Button)`
  flex: 1;
  height: 70%;
`;

const BookingDetails = ({ doctor, date, time, onBooingClick }) => {
  return (
    <Layout>
      <Label>
        {doctor === null ? "" : doctor.firstName + " " + doctor.lastName}
      </Label>
      <Label>{date}</Label>
      <Label>{time}</Label>
      <BookingButton onClick={onBooingClick}>Booking</BookingButton>
    </Layout>
  );
};
export default BookingDetails;
