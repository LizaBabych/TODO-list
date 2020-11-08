export const SET_TODO: TAction = "SET_TODO";
export const SET_CHECKED: TAction = "SET_CHECKED";
export const DELETE_TODO: TAction = "DELETE_TODO";

export interface ITodo {
  title: string,
  checked: boolean,
  id: number,
}

export interface IInitialState {
  todos: ITodo[],
}

export interface ITodoComponent {
  todo: ITodo,
}

export interface IAction {
  type: TAction,
  payload: ITodo,
}

export type TStateTodo = 'all' | 'done' | 'active' | 'search';

export type TAction = 'SET_TODO' | 'SET_CHECKED' | 'DELETE_TODO';
