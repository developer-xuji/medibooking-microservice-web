import React from "react";
import styled from "styled-components";
import ServiceCard from "./components/ServiceCard";
import TitleArea from "../TitleArea";
import { MOBILE_WIDTH } from "../../../../constants";
import { THEME_COLOR } from "../../../../constants";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20vh;
  // background-color: rgba(244, 246, 250, 0.5);
  width: 80%;
  align-items: center;
  margin: 24px 12px;
  padding: 12px;
`;

const Top = styled.div`
  display: flex;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const Bottom = styled.div`
  display: flex;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const TOP_LIST = [
  {
    key: "flu_shuts",
    contains: "Flu Shuts",
    href: "/",
  },
  {
    key: "general_practice",
    contains: "General Practice",
    href: "#/doctors",
  },
  {
    key: "travel_shuts",
    contains: "Travel Shuts",
    href: "/",
  },
];

const BOTTOM_LIST = [
  {
    key: "mental_health",
    contains: "Mental Health",
    href: "/",
  },
  {
    key: "pharmacy",
    contains: "Pharmacy",
    href: "/",
  },
  {
    key: "optometry",
    contains: "Optometry",
    href: "/",
  },
];

const Services = () => {
  return (
    <>
      <TitleArea titleText="Services" subTitleText="Finding Doctors by Specialization"/>
      <Layout>
        <Top>
          {TOP_LIST.map((l) => (
            <ServiceCard
              key={l.key}
              icon={l.key}
              text={l.contains}
              href={l.href}
            />
          ))}
        </Top>
        <Bottom>
          {BOTTOM_LIST.map((l) => (
            <ServiceCard
              key={l.key}
              icon={l.key}
              text={l.contains}
              href={l.href}
            />
          ))}
        </Bottom>
      </Layout>
    </>
  );
};
export default Services;
