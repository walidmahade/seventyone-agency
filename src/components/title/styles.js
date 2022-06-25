import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledTitle = styled.div`
  .h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 98px;

    ${media.up("md")} {
      font-size: 55px;
      line-height: 65px;
    }

    ${media.up("lg")} {
      font-size: 80px;
      line-height: 98px;
      margin: 0 auto 60px auto;
    }
  }

  .h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 66px;
    letter-spacing: 0.88px;
  }

  .h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0.68px;
  }
  /* h3 {}
  h3 {}
  h3 {} */
`;
