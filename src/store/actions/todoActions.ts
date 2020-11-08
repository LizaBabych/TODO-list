import { ITodo, ITodoAction, SET_TODO, SET_CHECKED, DELETE_TODO } from "../../types";

export const setTodos = (todo: ITodo): ITodoAction => {
  return {
    type: SET_TODO,
    payload: todo,
  };
};

export const setChecked = (todo: ITodo): ITodoAction => {
  return {
    type: SET_CHECKED,
    payload: todo,
  };
};

export const deleteTodo = (todo: ITodo): ITodoAction => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};
