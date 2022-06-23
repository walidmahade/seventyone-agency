import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { media } from "../../styles/responsive";

export const StyledHero = styled.section`
  background-color: ${THEME.colors.bgDark};
  color: ${THEME.colors.textLight};
  text-align: center;
  padding: 80px 0 140px 0;

  .subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.48px;
    color: ${THEME.colors.primary};
    /* width: 100%; */
    margin-bottom: 40px;
  }

  .title {
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 52px;
    color: ${THEME.colors.textLight};
    max-width: 1130px;
    margin: 0 auto 30px auto;

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

  .description {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.68px;
    color: ${THEME.colors.textLight};
    max-width: 700px;
    margin: 0 auto 30px auto;

    ${media.up("lg")} {
      margin: 0 auto 60px auto;
    }
  }

  .cta {
    display: flex;
    justify-content: center;
    gap: 32px;
    /* width: 100%; */
    ${media.down("sm")} {
      flex-wrap: wrap;

      a {
        width: 100%;
      }
    }
  }
`;
