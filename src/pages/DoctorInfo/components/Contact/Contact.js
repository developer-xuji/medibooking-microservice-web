import React from "react";
import styled from "styled-components";

const DividingLine = styled.div`
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

const ContactTable = styled.table`
  color: #5c7783;
  font-size: 20px;
  margin-top: 10px;
  line-height: 21px;
  width:400px;
  text-align: center;
  border-collapse:separate;
  border-spacing:0px 5px;
`;

const Contact = () => {
    return (
      <>
        <DividingLine />
        <center>
        <ContactTable>
            <tr>Executive assistant</tr>
            <tr>Email:xxxxx</tr>
            <tr>Tel:xxxxx</tr>
        </ContactTable>
        </center>
      </>
    );
  };
  export default Contact;