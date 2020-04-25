import axios from "axios";
import Cookie from "js-cookie";

import interceptor from "../../requests/interceptor";

export const SIGN_IN = "[AUTH] SIGN_IN";
export const FETCH_USER = "[AUTH] FETCH_USER";
export const SET_LOADING = "[AUTH] SET_LOADING";
export const SET_ERROR = "[AUTH] SET_ERROR";
export const SET_USER = "[AUTH] SET_USER";
export const SIGN_OUT = "[AUTH] SET_USER";

// default function to display redux action format
export const signIn = async (payload, ...props) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post("/v1/api/signin", {
      ...payload,
    });

    Cookie.set("token", response.data.token);
    interceptor(response.data.token);
    dispatch(setUser(response.data));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(e.response.data));
  }
};

export const fetchUser = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("/v1/api/user");
    dispatch(setUser(response.data));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    Cookie.remove("token");
    dispatch(setUser({ token: undefined }));
    dispatch(setError(e.response.data));
  }
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const signOut = () => {
  Cookie.remove("token");
  return {
    type: SIGN_OUT,
  };
};
