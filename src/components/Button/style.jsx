import { THEME } from "../../styles/theme";
import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledButton = styled.div`
  display: inline-block;

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 40px;
    text-decoration: none;
    border-radius: 50px;
    display: inline-block;

    ${media.up("md")} {
      font-size: 18px;
    }

    ${media.up("lg")} {
      font-size: 20px;
      line-height: 28px;
      padding: 20px 60px;
    }
  }

  &.normal {
    a {
      color: ${THEME.colors.text} !important;
      background-color: ${THEME.colors.primary};

      &:hover {
        background-color: ${THEME.colors.primaryHover};
      }
    }
  }

  &.outline {
    a {
      color: ${THEME.colors.textLight} !important;
      border: 1px solid ${THEME.colors.primary};
      background-color: transparent;

      &:hover {
        color: ${THEME.colors.text} !important;
        background-color: ${THEME.colors.primaryHover};
        border-color: ${THEME.colors.primaryHover};
      }
    }
  }
`;
