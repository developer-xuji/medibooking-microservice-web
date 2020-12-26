import styled, { css } from "styled-components";
import { THEME_COLOR } from "../../../../constants";

const NavItem = styled.div`
  padding: 18px 14px;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  ${(props) =>
    ({
      indictable: css`
        &:hover {
          color: ${THEME_COLOR};
          border-top-color: ${THEME_COLOR};
        }
      `,
      highlight: css`
        &:hover {
          color: ${THEME_COLOR};
        }
      `,
    }[props.variant])}

  ${(props) =>
    props.indictable &&
    css`
      &:hover {
        color: ${THEME_COLOR};
        border-top-color: ${THEME_COLOR};
      }
    `}
    ${(props) =>
    props.highlight &&
    css`
      &:hover {
        color: ${THEME_COLOR};
      }
    `}
`;

export default NavItem;
