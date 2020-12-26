import React from "react";
import styled from "styled-components";
import { SMILE_ICON } from "../../../../../constants"
import { BED_ICON } from "../../../../../constants"
import { EXPERIENCE_ICON } from "../../../../../constants"
import { SUPPORT_ICON } from "../../../../../constants"
import { MOBILE_WIDTH } from "../../../../../constants"
import { SMALL_BREAKPOINT } from "../../../../../constants"

const LARGE_BREAKPOINT = "1230px";


const Card = styled.div`
  width: 25vw;
  height: 230px;
  box-shadow: 20px 0px 28px rgba(0,0,0,0.04), 0 20px 20px rgba(0,0,0,0.04);
  margin: 16px 8px;
  background-color: #fff;

  @media screen and (max-width: ${LARGE_BREAKPOINT}) {
    width: 20vw;
  }

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 15vw;
  }

  @media screen and (max-width: ${SMALL_BREAKPOINT}) {
    display: none;
  }

`

const IconTitle = styled.div`
  display: flex;
  padding: 24px 0 0 24px;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: ${LARGE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  }

`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(174, 204, 84, 0.4);
  width: 80px;
  height: 80px;

  img {
      width: 60px;
      height: 60px;
  }

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    width: 60px;
    height: 60px;
  
    img {
        width: 40px;
        height: 40px;
    }
  }
`

const Title = styled.div`
  padding: 0 24px;
  @media screen and (max-width: ${LARGE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`
const DataTitle = styled.p`
  color: #aecc54;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    font-size: 24px;
  }
`
const UnitTitle = styled.p`
  color: #5b7189;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: ${MOBILE_WIDTH}) {
    font-size: 18px;
  }
`
const Description = styled.p`
  padding: 12px 24px;
  color: grey;
  line-height: 1.6;

  @media screen and (max-width: ${LARGE_BREAKPOINT}) {
    display: none;
  }
`

const iconDict = {
    "smile": SMILE_ICON,
    "bed": BED_ICON,
    "experience": EXPERIENCE_ICON,
    "support": SUPPORT_ICON
}

const DataCard = ({ icon, data, unit, description }) => {

    return (<Card>
        <IconTitle>
            <IconContainer><img src={iconDict[`${icon}`]} alt="icon"></img></IconContainer>
            <Title>
                <DataTitle>{data}</DataTitle>
                <UnitTitle>{unit}</UnitTitle>
            </Title>
        </IconTitle>
        <Description>{description}</Description>

    </Card>)
}

export default DataCard