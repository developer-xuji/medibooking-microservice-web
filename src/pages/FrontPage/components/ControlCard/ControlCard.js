import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Button";
import CardIcon from "../CardIcon";

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1vw;
  width: 30vw;
  min-width: 350px;
  background: white;
  border-top: 3px solid red;
  padding: 20px;
  align-items: center;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  color: #363837;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
`;

const Cell = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
`;

const Contain = styled.div`
  padding: 10px;
  font-size: 0.9375rem;
  font-weight: 400;
  color: #4a4a4a;
  text-align: left;
`;

const ControlCard = ({ icon, title, text, button, href }) => {
  return (
    <Layout>
      <CardIcon icon={icon} icon_width="100px" />
      <Cell>
        <Title>{title}</Title>
        <Contain>{text}</Contain>
        <a href={href}>
          <Button>{button}</Button>
        </a>
      </Cell>
    </Layout>
  );
};
export default ControlCard;
