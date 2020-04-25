import { SET_DATA, SET_ERROR, SET_LOADING } from "../actions/list";

export default (
  state = {
    loading: false,
    list: [],
  },
  action
) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_DATA:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
