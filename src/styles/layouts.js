import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  height: 100%;
  ${({ dashboard }) =>
    !dashboard
      ? `  > div {
    flex: 1;
  }
`
      : `  > div:nth-child(2) {
  flex: 1;
}
`}

  @media only screen and (max-width: 892px) {
    flex-direction: column;
  }
`;

export const FocusedLayout = styled.div`
  height: 100%;
  background: var(--bgBrand);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
  > div {
    img {
      height: 2rem;
    }
    > h2 {
      font-size: 1.6rem;
    }
  }
  table {
    tr {
      font-size: 1rem;
      > td {
        background: white;
        padding: 1rem 2rem;
      }
    }
  }
  @media only screen and (max-width: 892px) {
    padding: 1rem;
    justify-content: flex-start;
    > a {
      > img {
        display: none;
      }
    }

    > div {
      img {
        height: 2.5rem;
      }
    }
  }
  @media only screen and (max-width: 456px) {
    table {
      tr {
        font-size: 0.8rem;
        > td {
          background: white;
          padding: 0.2rem 0.4rem;
        }
      }
    }
  }
`;

export const MainLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2rem;
  h2,
  p {
    max-width: 34rem;
  }
  @media only screen and (max-width: 892px) {
    padding: 1rem;
  }
`;
