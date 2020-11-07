import {IAction} from "../../types";
import {IInitialState} from "../../types";

const initialState: IInitialState = {
  search: "",
};

const searchTodoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SET_SEARCH_TODO":
      return {...state, search: action.payload};
    default: return state;
  }
};

export default searchTodoReducer;
