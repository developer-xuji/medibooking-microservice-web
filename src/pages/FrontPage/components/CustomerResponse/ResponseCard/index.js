import React from "react";
import styled from "styled-components";

import { QUOTE_ICON } from "../../../../../constants"
import { USER_AVATAR1 } from "../../../../../constants"
import { USER_AVATAR2 } from "../../../../../constants"

const Layout = styled.div`
  background-color: #fff;
  width: 500px;
  height: 250px;
  margin: 12px 24px;
  padding: 18px 36px;
  font-family: 'Open Sans', sans-serif;
  border: 5px solid #5b7189;
`

const Header = styled.div`
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  width: 100%;

  img {
      width: 70px;
      height: 70px;
  }

  h3 {
    color: #5b7189;
    font-weight: bold;
    font-size: 24px;
    margin-left: 12px;
  }

  .quote {
      opacity: 0.5;
      width: 50px;
      height: 50px;
      margin-left: auto;
      margin-right: 0;
  }
`

const Description = styled.div`
  color: #5b7189;
  line-height: 1.8;
  margin-top: 8px;

  @media screen and (max-width: 520px) {
    font-size: 12px;
  }
`

const iconDict = {
    "avatar1" : USER_AVATAR1,
    "avatar2" : USER_AVATAR2
}

const ResponseCard = ({ icon, name, response }) => {

    return <Layout>
        <Header>
            <img src={iconDict[`${icon}`]} alt="avatar"></img>
            <h3>{name}</h3>
            <img src={QUOTE_ICON} alt="quote" className="quote"></img>
        </Header>
        <Description>{response}</Description>
    </Layout>

}

export default ResponseCard