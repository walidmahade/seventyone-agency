import styled from "styled-components";

export const StyledPortfolio = styled.section`
  padding: 160px 0 80px 0;

  .portfolio-inner {
    width: 100%;
    max-width: 660px;
  }

  .h2 {
    margin-bottom: 32px;
  }

  .description {
    margin-bottom: 90px;
  }

  .portfolio-items-wrapper {
    display: flex;
    flex-wrap: wrap;
    column-gap: 100px;

    article {
      width: calc(50% - 50px);

      &:nth-child(even) {
        margin-top: 200px;
      }
    }
  }
`;
