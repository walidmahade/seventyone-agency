import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/button";
import { Wrapper } from "../Wrapper/wrapper";
import { StyledHero } from "./styles";

export const Hero = (props) => {
  // console.log(props);
  const { title, subtitle, description, buttons } = props;

  return (
    <StyledHero>
      <Wrapper>
        <div>
          {subtitle ? <h3 className="subtitle">{subtitle}</h3> : ""}

          {title ? <h1 className="title">{title}</h1> : ""}

          {description ? <p className="description">{description}</p> : ""}

          <div className="cta">
            {buttons.map((button, i) => (
              <Button
                key={i}
                to={button.to}
                name={button.name}
                variant={button.variant}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </StyledHero>
  );
};
