import {combineReducers} from "redux";
import todosReducer from "./reducers/todosReducer";
import stateTodoReducer from "./reducers/stateTodoReducer";
import searchTodoReducer from "./reducers/searchTodoReducer";

const rootReducer = combineReducers({
  todosReducer,
  stateTodoReducer,
  searchTodoReducer,
});

export default rootReducer;
