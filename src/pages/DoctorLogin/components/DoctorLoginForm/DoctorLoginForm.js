import React from "react";
import styled from "styled-components";

const Layout = styled.form`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-family: MessinaSansWeb, Arial, sans-serif;
`;
const PatientLoginEntry = styled.a`
  position: absolute;
  right: 3rem;
  top: 2rem;
  font-size: 15px;
  font-weight: 700;
  color: #01a4b7;
  text-decoration: none;
`;
const FormWrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
`;
const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  border: thin solid #ecf0f2;
  border-radius: 5px;
  height: 60px;
  position: relative;
  width: 100%;
  outline: none;
  padding: 16px 16px 10px;
  box-sizing: border-box;
  margin-top: 10px;
  font-size: 16px;
  :hover {
    border: thin solid #01a4b7;
  }
`;

const LogInButton = styled.input`
  background: #01a4b7;
  display: flex;
  height: 60px;
  white-space: nowrap;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 48px;

  font-size: 20px;
  outline: none;
  font-weight: 600;
  user-select: none;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const DoctorSignInEntry = styled.div`
  margin-top: 40px;
  font-size: 15px;

  a {
    color: #01a4b7;
    text-decoration: none;
  }
`;

const DoctorLoginForm = () => (
  <Layout>
    <PatientLoginEntry href="/">
      Looking for the patient login?
    </PatientLoginEntry>
    <FormWrapper>
      <Title>Doctor Login</Title>

      <Label for="email">
        User Name: <br></br>
        <Input type="text" id="username" name="username" />
      </Label>

      <Label for="pwd">
        Password: <br></br>
        <Input type="password" id="password" name="password" />
      </Label>

      <LogInButton type="submit" value="Login" />

      <DoctorSignInEntry href="/">
        Don't have a doctor account? <a href="/"> Sign up as a doctor!</a>
      </DoctorSignInEntry>
    </FormWrapper>
  </Layout>
);
export default DoctorLoginForm;
