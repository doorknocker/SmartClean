import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signIn } from "../../store/actions/user";
import loadingGif from "../../images/loading.gif";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.loading);
  const token = useSelector((state) => state.user.token);

  const error = useSelector((state) => state.user.error);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  }
  if (!loading && token) {
    return <Redirect to={`/tabular`} />;
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        minLength="4"
      />
      <button disabled={loading}>
        {loading ? <img src={loadingGif} alt="loading" /> : "Submit"}
      </button>
      {error && <div>{error}</div>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  align-items: center;
  position: relative;
  > input {
    padding: 1rem 2rem;
    padding-left: 1.4rem;
    background: transparent;
    border-radius: 50px;
    display: block;
    margin: 1rem 0;
    border: none;
    font-size: 0.9rem;
    width: 15rem;
    -webkit-box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-in-out;
  }
  > input::placeholder {
    color: grey;
    font-weight: normal;
    opacity: 0.5;
  }
  > input:focus {
    outline: none;
    -webkit-box-shadow: -2px 6px 17px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 6px 17px -10px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 6px 17px -10px rgba(0, 0, 0, 0.75);
  }
  > button {
    padding: 1rem 2rem;
    padding-left: 1.4rem;
    background: transparent;
    border-radius: 50px;
    margin: 1rem 0;
    cursor: pointer;
    border: none;
    font-size: 0.9rem;
    width: 18.5rem;
    text-align: left;
    background: var(--secondary);
    color: white;
    -webkit-box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
  }
  > button::hover {
    -webkit-box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 3px 17px -10px rgba(0, 0, 0, 0.75);
  }
  > button:disabled {
    background: grey;
    color: white;
  }
  > div {
    position: absolute;
    color: var(--alert);
    bottom: -17px;
  }

  img {
    width: 1.4rem;
  }

  @media only screen and (max-width: 892px) {
    > input {
      width: 12rem;
    }
    > button {
      width: 15.5rem;
    }
  }
`;

export default Form;
