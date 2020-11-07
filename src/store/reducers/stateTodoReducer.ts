import {IAction} from "../../types";
import {IInitialState} from "../../types";

const initialState: IInitialState = {
  stateTodo: "all",
};

const stateTodoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SET_STATE_TODO":
      return {...state, stateTodo: action.payload};
    default: return state;
  }
};

export default stateTodoReducer;
