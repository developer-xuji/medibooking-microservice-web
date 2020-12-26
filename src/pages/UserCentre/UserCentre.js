import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
import logo from "../../assets/images/logo.png";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavBar = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  border-bottom: 1px solid #e1e1e1;
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3d3d3d;
  color: white;
  height: 100px;
  font-size: 50px;
  font-weight: 500;
`;

const Logo = styled.img`
  /* position: relative; */
  /* top: 50px; */
  /* width: 200px; */
  height: 80px;
  padding-right: 10vw;
`;
const Title = styled.div`
  padding-left: 10vw;
`;

const Body = styled.div`
  flex: 1;
  background-color: #f5f5f5;
`;

const Main = styled.div`
  background: white;
  border: #e1e1e1 1px solid;
  min-height: 80vh;
  margin: 0 12.5%;
`;

class UserCentre extends React.Component {
  render() {
    return (
      <Layout>
        <Banner>
          <Title>User Centre</Title>
          <Logo src={logo} alt="logo" />
        </Banner>
        <Body>
          <Main>
            <Content />
          </Main>
        </Body>
      </Layout>
    );
  }
}

export default UserCentre;
