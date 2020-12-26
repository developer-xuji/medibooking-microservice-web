import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & ~ & {
    margin-top: 14px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  margin-bottom: 8px;
  color: rgb(41, 43, 50);
`;

const Error = styled.div`
  margin-top: 2px;
  color: red;
`;

const FormItem = ({
  children,
  error,
}) => (
  <Wrapper>
    {children}
    {error && (<Error>{error}</Error>)}
  </Wrapper>
);

export default FormItem;