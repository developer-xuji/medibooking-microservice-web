import React from "react";
import styled from "styled-components";
import Form from "./components/Form";
import SocialAuthButton from "./components/SocialAuthButton";
import Title from "./components/Title";

const Container = styled.div`
  font-family: MessinaSansWeb, Source Sans Pro, sans-serif;
  background: #fff;
  box-shadow: 0 1px 10px rgba(92, 119, 131, 0.15);
  border-radius: 4px;
  margin: 24px auto;
  width: 391px;
  padding: 24px;
  text-align: center;
`;

const SignUpPage = () => {
  return (
    <Container>
      <Title />
      <SocialAuthButton>Google</SocialAuthButton>
      <SocialAuthButton>Facebook</SocialAuthButton>
      <Form />
    </Container>
  );
};
export default SignUpPage;
