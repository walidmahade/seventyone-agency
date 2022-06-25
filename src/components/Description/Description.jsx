import React from "react";
import styled from "styled-components";
// import { THEME } from "../../styles/theme";
// import { media } from "../../styles/responsive";

const StyledDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.68px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.68px;
    color: inherit;
  }
`;

const Description = ({ children, className }) => {
  return (
    <StyledDescription className={className}>{children}</StyledDescription>
  );
};

export default Description;
