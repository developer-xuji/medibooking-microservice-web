import React from "react";
import styled from "styled-components";
import { LOGO } from "../../constants";
import { FOOT_BACKGROUND } from "../../constants";
import { MOBILE_WIDTH } from "../../constants";
import { SMALL_BREAKPOINT } from "../../constants";
import Specialists from "./Components/Specialists";
import Contact from "./Components/Contact";
import Title from "./Components/Title";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhoneSquareAlt ,faEnvelope, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add( faFacebook, faTwitter, faInstagram, faMapMarkerAlt, faPhoneSquareAlt ,faEnvelope, faAngleRight );

const Layout = styled.div`
  background: url(${FOOT_BACKGROUND});
  background-size: cover;
  width: 100%;
  height: 400px;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    height: 300px
}
`;

const LogoContainer = styled.div`
  width: 17%;
  @media screen and (max-width: 1224px) {
    display:none;
  }
`;

const Logo = styled.div`
  background: url(${LOGO});
  background-size: cover;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const InfoContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
  margin-right: 3em;
  align-items: center;
  @media screen and (max-width: 1224px) {
    width: 100%;
    margin-right: 0em;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  padding: 15px 25px;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 5px;
  @media screen and (max-width: ${SMALL_BREAKPOINT}) {
    display:none
  } 
`;

const LINK_LIST = [
  {
    key: "our_centers",
    contains: "Our Centers",
  },
  {
    key: "our_doctors",
    contains: "Our Doctors",
  },
  {
    key: "general_information",
    contains: "General Information",
  },
];

const Footer = () => {
  return (
    <Layout>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <InfoContainer>
        <Info>
          {LINK_LIST.map((l) => (
            <Title key={l.key} titleName={l.contains} />
          ))}
        </Info>
        <Specialists></Specialists>
        <Contact/>
      </InfoContainer>
    </Layout>
  );
};

export default Footer;
