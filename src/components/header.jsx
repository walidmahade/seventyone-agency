import React from "react";
import styled from "styled-components";
import Seventy1Logo from "../images/logo.svg";
import { THEME } from "../styles/theme";

const StyledHeader = styled.section`
  background-color: ${THEME.colors.bgDark};

  .wrapper {
    max-width: 1280px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;

const SiteHeader = () => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <img src={Seventy1Logo} alt="logo" />
          </div>
        </div>

        <div className="right"></div>
      </div>
    </StyledHeader>
  );
};

export { SiteHeader };
