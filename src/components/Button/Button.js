import styled from "styled-components";
import { THEME_COLOR } from "../../constants";

const Button = styled.button`
  border: 0;
  padding: 12px 16px;
  border-radius: 200px;
  border: 2px solid rgba(41, 43, 50, 0.1);
  background: ${THEME_COLOR};
  color: white;
  cursor: pointer;
  font-size: 12px;
`;
export default Button;
