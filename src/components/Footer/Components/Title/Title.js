import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "../../../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Layout = styled.div`
  color: white
  text-align: left;
  display: flex;
  transition: all 3.35s ease;
  

  h3 {
    color: white;
    font-size: 1.45em;
    font-weight: 500;
    margin-left: 12px;
    font-family: Arial;
    letter-spacing: 1px;
    position: relative;
    top: 3.2px;
  }

  :hover {
    cursor: pointer;
    h3, svg {
      color: #201309;
    }
  }

  @media screen and (max-width: ${MOBILE_WIDTH}) {
    h3 {
      font-size: 1.1em
    }
  }
`;

const Title = ({ titleName }) => {
  return (
    <Layout>
      <FontAwesomeIcon 
      color='white' 
      icon='angle-right'
      size='2x'
      className="AngleRight"
      />
      <h3>{titleName}</h3>
    </Layout>
  );
};
export default Title;
