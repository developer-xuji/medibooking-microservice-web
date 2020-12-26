import React from "react";
import styled, { css } from "styled-components";

const AuthButton = styled.div`
  border: 2px solid #e3e8ed;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 10px 20px;
  margin: 8px 0;
  width: auto;
  display: block;
  font-size: 16px;
  position: relative;
  text-align: center;
  color: #051e2a;

  &:before {
    content: "";
    -webkit-background-size: cover;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg);
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    left: 24px;
  }

  ${(props) =>
    props.logo === "Google" &&
    css`
      &:before {
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg);
      }
    `}
  ${(props) =>
    props.logo === "Facebook" &&
    css`
      &:before {
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg);
      }
    `}
`;

const SocialAuthButton = (props) => {
  const { children } = props;
  return (
    <>
      <AuthButton as="a" logo={children}>
        Continue with {children}
      </AuthButton>
    </>
  );
};
export default SocialAuthButton;
