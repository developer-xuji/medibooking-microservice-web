import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 12vw;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #02a4b7;
`;

const Content = styled.div`
  font-size: 15px;
  /* font-weight:500; */
  /* color: red; */
`;

const InfoItem = ({ label, children }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Content>{children}</Content>
  </Wrapper>
);

export default InfoItem;
