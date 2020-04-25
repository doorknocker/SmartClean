import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { fetchUser } from "../../store/actions/user";

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const token = useSelector((state) => state.user.token);

  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (!loading && error) {
    return <Redirect to="/" />;
  }

  if (!token) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
};

export default AuthWrapper;
