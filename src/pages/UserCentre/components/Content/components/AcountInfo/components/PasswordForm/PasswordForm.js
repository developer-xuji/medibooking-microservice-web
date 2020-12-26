import React from "react";
import styled, { keyframes } from "styled-components";
import "antd/dist/antd.css";
import { Form, Input, Button, Descriptions, Row, Col } from "antd";
import { Title } from "../../../styling";

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 0,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

const StyledButton = styled.button`
  background: #01a4b7;
  display: flex;
  height: 50px;
  white-space: nowrap;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 48px;
  font-size: 20px;
  outline: none;
  font-weight: 600;
  user-select: none;
  align-items: center;
  justify-content: center;
`;

const StyledDiscription = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 15px;
`;

function PasswordForm(props) {
  const {
    username,
    PasswordResetStatus,
    onPasswordReset,
    onFinish,
    onNewFinish,
    PasswordResetResult,
  } = props;

  const resetPasswordResult = PasswordResetResult ? (
    <StyledDiscription>Password reset success!</StyledDiscription>
  ) : null;

  switch (PasswordResetStatus) {
    case "show":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0}>
              <StyledDiscription>Username: {username}</StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <StyledButton onClick={onPasswordReset}>
                Reset Your Password
              </StyledButton>
            </Col>
          </Row>
        </>
      );
      break;
    case "reset":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0} span={12}>
              <StyledDiscription>Username: {username}</StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={0} span={12}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Current Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your current password!",
                    },
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <StyledButton type="primary" htmlType="submit">
                    Submit
                  </StyledButton>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </>
      );
      break;
    case "new":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0} span={12}>
              <StyledDiscription>Username: {username}</StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={0} span={12}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onNewFinish}
              >
                <Form.Item
                  label="New Password   "
                  name="newpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your new password!",
                    },
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please Confirm your new password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("newpassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <StyledButton type="primary" htmlType="submit">
                    Submit
                  </StyledButton>
                </Form.Item>
                {resetPasswordResult}
              </Form>
            </Col>
          </Row>
        </>
      );
      break;
    case "wrong":
      return (
        <>
          <Title>Account Information</Title>
          <Row justify="center">
            <Col offset={0} span={12}>
              <StyledDiscription>Username: {username}</StyledDiscription>
            </Col>
          </Row>
          <Row justify="center">
            <Col offset={0} span={12}>
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  label="Current Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your current password!",
                    },
                  ]}
                >
                  <Input.Password defaultValue={""} />
                </Form.Item>
                <Row
                  gutter={[24, 24]}
                  justify="center"
                  style={{ color: "red" }}
                >
                  Incorrect Password! Please enter again!
                </Row>
                <Form.Item {...tailLayout}>
                  <StyledButton type="primary" htmlType="submit">
                    Submit
                  </StyledButton>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </>
      );
      break;
  }
}

export default PasswordForm;
