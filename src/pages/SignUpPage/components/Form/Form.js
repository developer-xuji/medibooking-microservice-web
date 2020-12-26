import React from "react";
import styled from "styled-components";
import DividingLine from "./components/DividingLine";
import InputField from "./components/Input";
import SubmitButton from "./components/SubmitButton";
import Footer from "./components/Footer";

const PasswordHint = styled.div`
  color: #5c7783;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 0;
  line-height: 21px;
  text-align: center;
`;

const Form = () => {
  return (
    <>
      <DividingLine />
      <form>
        <InputField
          type="text"
          id="username"
          name="username"
          placeholder="Username:"
          data-parsley-type-message="Please enter a valid username"
          required=""
          data-parsley-required-message="Please enter your username"
        />
        <InputField
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First name"
          required=""
          data-parsley-required-message="Please enter your first name"
          autocomplete="off"
        />
        <InputField
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last name"
          required=""
          data-parsley-required-message="Please enter your last name"
          autocomplete="off"
        />
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required="required"
          data-parsley-required-message="Please enter a password"
          minlength="10"
          data-parsley-minlenth-message="Passwords must be 10 characters or more, and not a common well known password"
          autocomplete="off"
        />
        <PasswordHint>
          Please use at least 10 characters, avoid dictionary words and common
          passwords.
        </PasswordHint>
        <SubmitButton
          class="submit"
          id="signup-submit"
          name="signup-submit"
          dataEvent="patient-signup"
          dataSignupType="email"
        >
          Sign up
        </SubmitButton>
      </form>
      <Footer>Already have an account? Log in</Footer>
    </>
  );
};
export default Form;
