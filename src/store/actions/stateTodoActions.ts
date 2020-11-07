import {TStateTodo} from "../../types";

const setStateTodo = (stateTodo: TStateTodo) => {
  return {
    type: "SET_STATE_TODO",
    payload: stateTodo,
  };
};

export default setStateTodo;
