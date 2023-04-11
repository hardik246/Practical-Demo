import getReducer from "./AllReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  getReducer,
});

export default rootReducer;
