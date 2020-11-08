import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import searchReducer from "./reducers/searchReducer";
import stateReducer from "./reducers/stateReducer";

const rootReducer = combineReducers({
  todoReducer,
  searchReducer,
  stateReducer,
});

export default rootReducer;
