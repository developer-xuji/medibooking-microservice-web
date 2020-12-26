import React from "react";
import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px !important;
  padding: 18px 12px;
  height: auto;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  color: #2b4b5a;
  transition: all 0.3s ease;
  will-change: transform;
`;

// const InputField = (props) => {
//   const {
//     type,
//     id,
//     name,
//     placeholder,
//     required,
//     autocomplete,
//     dataParsleyRequiredMessage,
//     dataParsleyMinlenthMessage,
//     minlength,
//   } = props;
//   return (
//     <Input
//       type={type}
//       data-parsley-required-message={dataParsleyRequiredMessage}
//       id={id}
//       name={name}
//       placeholder={placeholder}
//       required={required}
//       autocomplete={autocomplete}
//       data-parsley-minlenth-message={dataParsleyMinlenthMessage}
//       minlength={minlength}
//     ></Input>
//   );
// };
export default Input;
