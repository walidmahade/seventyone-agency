import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Seventy1Logo from "../images/logo.svg";
import { ROUTES } from "../routes";
import { THEME } from "../styles/theme";
import { CustomNavLink } from "./CustomNavLink";

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
            <Link to="/">
              <img src={Seventy1Logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="right">
          <nav>
            <ul>
              {ROUTES.map((link) => (
                <li>
                  <CustomNavLink linkTo={link.to} linkName={link.name} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </StyledHeader>
  );
};

export { SiteHeader };
