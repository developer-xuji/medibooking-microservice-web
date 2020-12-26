import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
  color: white;
  background: #01a4b7;
  border: 2px solid #01a4b7;
  border-radius: 100px;
  cursor: pointer;
`;

// const SubmitButton = (props) => {
//   const { buttonClass, id, name, dataEvent, dataSignupType, children } = props;
//   return (
//     <Button
//       class={buttonClass}
//       id={id}
//       name={name}
//       data-event={dataEvent}
//       data-signup-type={dataSignupType}
//     >
//       {children}
//     </Button>
//   );
// };
export default SubmitButton;
