import styled from "styled-components";

export const BigTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  margin: 1rem 0rem;
  margin-left: 0;
  line-height: 2rem;
  font-weight: 500;
  color: ${({ inverse }) => (inverse ? "white" : "var(--textTitle)")};
  max-width: 30rem;
  > span {
    color: var(--primary);
  }

  @media only screen and (max-width: 502px) {
    font-size: 2.4rem;
    > span {
      font-size: 2.4rem;
    }
  }
`;

export const MediumTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 500;
  margin: 0.6rem 0;
  letter-spacing: -1px;
  line-height: 3rem;
  > span {
    display: block;
    color: var(--primary);
  }
  @media only screen and (max-width: 892px) {
    font-size: 2.2rem;
  }
`;

export const SmallTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
`;
