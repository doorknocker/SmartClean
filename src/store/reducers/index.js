import { combineReducers } from "redux";

// calling the default reducer to create a link
import user from "./user";
import list from "./list";

const rootReducers = combineReducers({
  user,
  list,
});

export default rootReducers;
