import React from "react";
import styled from "styled-components";
import { THEME_COLOR } from "../../../../constants";

const Title = styled.div`
  color: #aecc54;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-top: 40px;
  `

const HorizontalLine = styled.hr`
    display: block;
    height: 1px;
    border-top: 2px solid #aecc54;
    width: 100px;
  
`
const SubTitle = styled.div`
  color: ${THEME_COLOR};
  font-weight: bold;
  font-size: 32px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  width: 80%;
`

const TitleArea = ({ titleText, subTitleText }) => {
  return <>
    <Title>{titleText}</Title>
    <HorizontalLine />
    <SubTitle>{subTitleText}</SubTitle>
  </>
}

export default TitleArea
