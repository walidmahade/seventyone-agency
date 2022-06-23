import React from "react";
import { StyledPortfolio } from "./styles";
import { Title } from "../title/title";

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Title type="h2">The work we do, and the people we help.</Title>

      <p className="description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </StyledPortfolio>
  );
};
