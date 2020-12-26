import React from "react";
import styled from "styled-components";
import DoctorLoginForm from "./components/DoctorLoginForm";
import SplashPane from "./components/SplashPane";

const Layout = styled.div`
  display: flex;
  // font-family: "MessinaSansWeb", "Arial", sans-serif;
  // position: relative;
`;

const DoctorLogin = () => (
  <Layout>
    <SplashPane></SplashPane>
    <DoctorLoginForm></DoctorLoginForm>
  </Layout>
);

export default DoctorLogin;
