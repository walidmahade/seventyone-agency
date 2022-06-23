import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./style";

export const Button = ({ to, name, variant }) => {
  return (
    <StyledButton className={variant}>
      <Link to={to}>{name}</Link>
    </StyledButton>
  );
};
