import axios from "axios";

import parser from "../../requests/parser";

export const FETCH_DATA = "[LIST] FETCH_DATA";
export const SET_DATA = "[LIST] SET_DATA";
export const SET_LOADING = "[LIST] SET_LOADING";
export const SET_ERROR = "[LIST] SET_ERROR";

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("/v1/api/clean-data");
    dispatch(setData(parser(response.data)));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(e.response.data));
  }
};

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const setData = (payload) => ({
  type: SET_DATA,
  payload,
});
