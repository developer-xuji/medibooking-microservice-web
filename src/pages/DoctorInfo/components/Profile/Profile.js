import React from "react";
import styled from "styled-components";
import image from "./assets/img/doctor.png";

const InfoTable = styled.table`
  color: black;
  font-size: 20px;
  margin-top: 10px;
  line-height: 21px;
  width:650px;
  text-align: center;
  position:absolute;
  top:580px;
  left:650px;  
`;

const DoctorName = styled.h2`
  color: black;
  font-size: 30px;
`;

const FlexContainer = styled.div`
  display:flex;
  flex-wrap:nowrap;
  justify-content:center;
`;

const DividingLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #5c7783;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
`;

const ParentContainer = styled.div`
  position:relative;
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: red;
  border-radius: 4px;
  margin: 24px auto;
  padding: 24px;
  text-align: center;
  height:700px;
`;

const Container = styled.div`
  left:0;
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background-color:white;
  margin: 3px auto;
  padding: 2px;
  text-align: center;
  height:660px;
`;


const ImageContainer = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #FFF0F5;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  width: 500px;
  height: 450px;
  padding: 24px;
  text-align: center;
  border:1px solid black;
`;

const BookContainer = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #FFF0F5;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  width: 320px;
  height:350px;
  padding: 24px;
  text-align: center;
  border:1px solid black;
`;


const BookButton = styled.button`
  width: 80%;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
  color: white;
  background: #01a4b7;
  background-color:red;
  border: 2px solid;
  border-radius: 100px;
  cursor: pointer;
`;


const DesContainer = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  font-size:20px;
  border-radius: 4px;
  margin: 24px auto; 
  width: 600px;
  height: 400px;
  background-color:white;
  padding: 24px;
  text-align: center;
  border:1px;
`;

const Profile = (props) => {
  let currentDoctor = props.Doctor;
  
    return (
      <>
          <ParentContainer>
          <Container>
          <FlexContainer>
          <ImageContainer>
            <img src={image} alt="image" />
            <DoctorName>
            {`${currentDoctor.FirstName} ${currentDoctor.SecondName}`}
          </DoctorName>
          </ImageContainer>
          <DesContainer>
          {currentDoctor.Description}
          </DesContainer>
          
          <BookContainer>
            <h2>Medibooking</h2>
            <h3>135 Lonsdale Street, Melbourne</h3>
            <h3>Phone:xxxxxxxx</h3>
            <h3>Email:xxxxxx</h3>
            <h3>Open: 8:00am-8:00pm</h3>
            <BookButton>Book Appointment</BookButton>
          </BookContainer>
          </FlexContainer>
          <center>
          <InfoTable>
            <td>
            <ul>
              <li>Language: {currentDoctor.Language.join(", ")}</li>
              <li>Specialization: {currentDoctor.Specialization.join(", ")}</li>
            </ul>
            </td>
          </InfoTable>
          </center>
          
          <DividingLine />
          
          </Container>
          </ParentContainer>
      </>
    );
  };
  export default Profile;