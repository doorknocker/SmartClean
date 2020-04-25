import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Toc from "@material-ui/icons/Toc";
import ShowChart from "@material-ui/icons/ShowChart";
import ExitToApp from "@material-ui/icons/ExitToApp";

import { useLocation } from "react-router-dom";

import { SmallTitle } from "../../styles/headings";
import { LinkTag } from "../../styles/common";

import { signOut } from "../../store/actions/user";

import admin from "../../images/admin.jpg";

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const position = useSelector((state) => state.user.position);
  const { pathname } = useLocation();

  const handleSignOut = async () => {
    await dispatch(signOut());
    window.location = "/";
  };

  const isActive = (link) => {
    if (pathname === link) return "active";
    return "notactive";
  };

  return (
    <StyledDashboard>
      <aside>
        <SmallTitle>Optimus</SmallTitle>
        <nav>
          <ul>
            <LinkTag to="/tabular" active={isActive("/tabular")}>
              <Toc />
              Tabular
            </LinkTag>
            <LinkTag to="/charts" active={isActive("/charts")}>
              <ShowChart />
              Charts
            </LinkTag>
          </ul>
        </nav>
        <div>
          <img src={admin} alt="admin" />
          <div>
            <h6>{name}</h6>
            <p>{position}</p>
          </div>
          <span onClick={handleSignOut}>
            <ExitToApp />
          </span>
        </div>
      </aside>
      <section>{children}</section>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: flex;
  height: 100%;
  position: relative;

  aside {
    > h3 {
      color: var(--primary);
      font-weight: bold;
      margin-left: 1rem;
    }
    background: var(--bgBrand);
    color: white;
    width: 12rem;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      > li {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
        margin: 0;
        font-size: 1rem;
        > svg {
          margin-right: 0.5rem;
        }
      }
    }
    > div {
      position: absolute;
      bottom: 0;
      display: flex;
      width: 10rem;
      padding: 1rem;
      h6 {
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
      }
      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }
      p {
        margin: 0;
        padding: 0;
      }
      > div {
        padding: 0 0.4rem;
        flex: 1;
      }
      > span {
        cursot: pointer;
      }
    }
  }

  > section {
    flex: 1;
    padding: 1rem 2rem;
    overflow: scroll;
    > h2 {
      margin-bottom: 1rem;
    }
    .graph {
      height: calc(100vh - 6.4rem);
      > div {
        height: inherit;
        > svg {
          height: inherit;
        }
      }
    }
  }
  select {
    font-size: 1.6rem;
    margin-left: 1rem;
    position: relative;
    bottom: 0.2rem;
  }

  @media only screen and (max-width: 892px) {
    flex-direction: column;
    aside {
      display: none;
    }
  }
`;

export default DashboardLayout;
