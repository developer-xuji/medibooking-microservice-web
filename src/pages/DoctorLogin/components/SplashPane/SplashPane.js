import React from "react";
import styled from "styled-components";
import {LOGO} from "../../../../constants";
// import Button from '../../../Button';
// import NavItem from '../NavItem';

const Layout = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url("https://media.visualstories.com/uploads/images/1/143/5431307-960_501909142-1558373_p.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Logo = styled.div`
  width: 190px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  font-size: 30px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Welcome = styled.div`
  width: 25vw;
  display: block;
  color: white;
  font-weight: 600;
  font-size: 3.5vw;
  margin-top: 50vh;
`;
const Caption = styled.div`
  width: 30vw;
  display: block;
  color: white;
  font-size: 1.7vw;
  margin-top: 3vh;
  margin-left: 5vw;
`;

const SplashPane = () => (
  <Layout>
    <Logo>
      <img src={LOGO} alt="logo" width="50" height="50" />
      Universal
    </Logo>
    <Contents>
      <Welcome>Welcome to Doctor Admin.</Welcome>
      <Caption>Please log in with your doctor account.</Caption>
    </Contents>
  </Layout>
);

export default SplashPane;
