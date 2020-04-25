import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoBack = styled.div`
  margin-top: 2rem;
  background-color: var(--primary);
  color: white;
  border-radius: 1rem;
  text-decoration: none;
  width: 8rem;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  font-size: large;
  color: white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }
`;

export const LinkTag = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  margin: 0;
  text-decoration: none;
  font-size: 1rem;
  color: white;
  ${({ active }) =>
    active === "active" ? `background: var(--secondary);` : ``}
  > svg {
    margin-right: 0.5rem;
  }
`;
