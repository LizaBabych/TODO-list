import {ITodo} from "../../types";

export const setTodos = (todo: ITodo) => {
  return {
    type: "SET_TODOS",
    payload: todo,
  };
};

export const setChecked = (todo: ITodo) => {
  return {
    type: "SET_CHECKED",
    payload: todo,
  };
};

export const deleteTodo = (todo: ITodo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};
