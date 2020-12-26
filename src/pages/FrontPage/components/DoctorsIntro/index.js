import React from "react";
import styled from "styled-components";

import Gallary from "./Gallary";
import { THEME_COLOR } from "../../../../constants";
import { getRoutePath } from "../../../../utils/getRoute";

const Layout = styled.div`
  width: 80%;
  margin: 48px 0 0 0;
  display: flex;
  align-items: center;
  text-align: right;

  @media screen and (max-width: 880px) {
    text-align: center;
  }
`;
const TextIntro = styled.div`
  padding: 0 36px;
  button {
    color: #fff;
    border: none;
    padding: 16px 24px;
    background-color: #aecc54;
    font-weight: bold;
    margin: 12px 0;
    a {
      color: #fff;
    }

    &:hover {
      background-color: transparent;
      border: 1px solid #aecc54;
      cursor: pointer;
      a {
        color: #aecc54;
      }
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #aecc54;
    margin-right: 0;
    width: 100px;

    @media screen and (max-width: 880px) {
      margin: 8px auto;
    }
  }
`;

const SubTitle = styled.div`
  color: #aecc54;
  font-weight: bold;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.div`
  color: ${THEME_COLOR};
  font-weight: bold;
  font-size: 36px;
  font-family: "Open Sans", sans-serif;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: dimgray;
  margin: 18px 0;
`;

const DoctorsIntro = () => {
  return (
    <Layout>
      <Gallary></Gallary>
      <TextIntro>
        <SubTitle>Doctors</SubTitle>
        <hr></hr>
        <Title>Professional Expert</Title>
        <Description>
          With over 170 Doctors, we’ll help find the right one for you and your
          family.
        </Description>
        <button>
          <a href={getRoutePath("doctors")}>View All →</a>
        </button>
      </TextIntro>
    </Layout>
  );
};

export default DoctorsIntro;
