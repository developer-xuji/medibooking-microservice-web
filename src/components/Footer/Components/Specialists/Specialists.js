import React from "react";
import styled from "styled-components";
import Title from "../Title";
import { MOBILE_WIDTH } from "../../../../constants";
import { SMALL_BREAKPOINT } from "../../../../constants";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 20px 25px;
  border-radius: 6px;
  height: 320px;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    padding: 10px 9px;
    height: 220px;
    font-size: 12px;
  }
`;

const UntitleList = styled.ul`
  margin-left: 0;
  margin-bottom: 0;
  list-style-type: none;
  -webkit-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 27px;
`;

const Item = styled.li`
  width: 100%;
  color: white;
  display: block;
  margin: 15px 0;
  font-size: 15px;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    font-size: 9px;
    margin: 9px 0;
  }
`;

const LIST = [
  "Cardiology",
  "General Surgeon/Surgical Oncologist",
  "Maxillofacial Surgeon",
  "Otorhinolaryngology",
  "Counselor",
  "Gynaecology & Obstetrics",
  "Neurosurgeon",
];

const Specialists = () => {
  return (
    <Layout>
      <Title titleName="Specialists" />
      <div width="100%">
        <UntitleList>
          {LIST.map((l) => (
            <Item key={l}>{l}</Item>
          ))}
        </UntitleList>
      </div>
    </Layout>
  );
};
export default Specialists;
