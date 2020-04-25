import Cookies from "js-cookie";

import { SET_USER, SET_ERROR, SET_LOADING, SIGN_OUT } from "../actions/user";

export default (
  state = {
    loading: false,
    token: Cookies.get("token"),
  },
  action
) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_USER:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return {
        loading: false,
        token: undefined,
      };
    default:
      return state;
  }
};
