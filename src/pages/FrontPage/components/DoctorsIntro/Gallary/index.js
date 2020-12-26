import React from "react";
import styled from "styled-components";

import { DOC1_PIC } from "../../../../../constants"
import { DOC2_PIC } from "../../../../../constants"
import { DOC3_PIC } from "../../../../../constants"
import { DOC4_PIC } from "../../../../../constants"
import { DOC5_PIC } from "../../../../../constants"
import {THEME_COLOR} from "../../../../../constants"

const Layout = styled.div`
  width: 60%;
  display: flex;

  @media screen and (max-width: 880px) {
    display: none;
  } 
  `

const LeftGallary = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 25vw;
  img {
      width: 10.5vw;
      height: 20vh;
      margin: 12px;
      object-fit: cover;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    img {
        width: 12vw;
    }
  }
`
const RightGallary = styled.div`
  display: flex;
  flex-direction: column;

  img {
      width: 18vw;
      height: 28vh;
      margin: 12px 0;
      object-fit: cover;
  }
  
  span {
      margin: 12px 0;
      font-size: 24px;
      color: #fff;
      background-color: ${THEME_COLOR};
      width: 76px;
      padding: 8px;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }

`

const Gallary = () => {
    return <Layout>
        <LeftGallary>
            <img src={DOC1_PIC}></img>
            <img src={DOC2_PIC}></img>
            <img src={DOC3_PIC}></img>
            <img src={DOC4_PIC}></img>
        </LeftGallary>
        <RightGallary>
            <img src={DOC5_PIC}></img>
            <span> 170+ </span>
        </RightGallary>
    </Layout>


}

export default Gallary