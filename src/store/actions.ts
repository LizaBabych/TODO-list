import { ITodo, IAction, SET_TODO, SET_CHECKED, DELETE_TODO } from "../types";

export const setTodos = (todo: ITodo): IAction => {
  return {
    type: SET_TODO,
    payload: todo,
  };
};

export const setChecked = (todo: ITodo): IAction => {
  return {
    type: SET_CHECKED,
    payload: todo,
  };
};

export const deleteTodo = (todo: ITodo): IAction => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};
