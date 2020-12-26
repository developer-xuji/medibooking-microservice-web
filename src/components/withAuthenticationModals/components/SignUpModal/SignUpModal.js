import React from "react";
import styled from "styled-components";
import Modal from "../../../Modal";
import TextInput from "../../../TextInput";
import withForm from "../../../withForm";
import Fields from "./components/Fields";
import ErrorMessage from "../../../ErrorMessage";
import FormItem from "../../../FormItem";
import signUp from "../../../../apis/signUp";
import encodePassword from "../../../../utils/encodePassword";

const PasswordSetGuide = styled.p`
  color: #5c7783;
  font-size: 10px;
  margin-bottom: 0px;
  margin-top: 10px;
  line-height: 21px;
  text-align: center;
`;

const GenderSelector = styled.select`
  box-sizing: border-box;
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px !important;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: #2b4b5a;
  transition: all 0.3s ease;
  will-change: transform;
`;

const SubmitButton = styled.button`
  width: 100%;
  font-size: 18px;
  margin-bottom: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
  color: white;
  background: #01a4b7;
  border: 2px solid #01a4b7;
  border-radius: 100px;
  cursor: pointer;
`;

const Footer = styled.div`
  text-align: center;
  font-size: 14px;
  color: #565656;
`;

const LogInButton = styled.button`
  border: none;
  background-color: white;
  outline: none;
  color: #01a4b7;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: "",
    };
  }

  setErrorMessage(message) {
    this.setState({
      errorMessage: message,
      signUpFailMessage: "",
    });
  }

  setSignUpFailMessage(message) {
    this.setState({
      signUpFailMessage: message,
    });
  }

  render() {
    const { errorMessage, signUpFailMessage } = this.state;

    const {
      onClose,
      onLogIn,
      data,
      formDirty,
      setData,
      submit,
      valid,
      getErrorMessage,
    } = this.props;

    const onSignUp = submit(() => {
      signUp({
        username: data.username.value,
        encodedPassword: encodePassword(data.password.value),
        age: data.age.value,
        gender: data.gender.value,
        firstName: data.firstName.value,
        lastName: data.lastName.value,
      })
        .then((data) => {
          onClose();
        })
        .catch(()=>{this.setSignUpFailMessage("Server error, please try again later!")});
    });

    return (
      <Modal
        onClose={onClose}
        title="Sign up"
        description="Create a free account to book appointments faster and have a personalised health experience."
        body={
          <form id="signUpForm" onSubmit={onSignUp}>
            {errorMessage && (
              <FormItem>
                <ErrorMessage>{errorMessage}</ErrorMessage>
              </FormItem>
            )}
            {Fields.map((f) => (
              <FormItem
                key={f.key}
                error={(formDirty || data[f.key].dirty) && getErrorMessage(f)}
              >
                <TextInput
                  id={f.key}
                  type={f.type}
                  placeholder={f.placeholder}
                  onChange={(event) => {
                    setData(event, f.key);
                    signUpFailMessage && this.setSignUpFailMessage("");
                  }}
                />
              </FormItem>
            ))}
            <GenderSelector
              required
              id="gender"
              form="signUpForm"
              onChange={(event)=>{setData(event,"gender")}}
            >
              <option value="" disabled selected hidden>
                Please Choose your gender...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </GenderSelector>
            <PasswordSetGuide>
              Use at least 8 characters, avoid dictionary words & common
              passwords.
            </PasswordSetGuide>
            {signUpFailMessage &&(
              <FormItem>
                <ErrorMessage>{signUpFailMessage}</ErrorMessage>
              </FormItem>
            )}
            <FormItem>
              <SubmitButton disabled={!valid} block size="lg" variant="success">
                SIGN UP
              </SubmitButton>
            </FormItem>
          </form>
        }
        footer={
          <Footer>
            <span>Already have an account?</span>
            <LogInButton variant="link" onClick={onLogIn}>
              Log in
            </LogInButton>
          </Footer>
        }
      />
    );
  }
}

const WithFormSignUpModal = withForm(Fields)(SignUpModal);

export default WithFormSignUpModal;
