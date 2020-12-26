import React from "react";
import styled from "styled-components";

const OrLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #5c7783;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
  font-weight: 500;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #e3e8ed;
    margin: 0 10px;
  }
`;

const DividingLine = () => {
  return <OrLine>OR</OrLine>;
};
export default DividingLine;
