export const SET_TODO: TAction = "SET_TODO";
export const SET_CHECKED: TAction = "SET_CHECKED";
export const DELETE_TODO: TAction = "DELETE_TODO";
export const SET_SEARCH: TAction = "SET_SEARCH";
export const SET_STATE: TAction = "SET_STATE";

export interface ITodo {
  title: string,
  checked: boolean,
  id: number,
}

export interface IRootReducer { 
  todoReducer: IInitialTodos,
  searchReducer: IInitialSearch,
  stateReducer: IInitialState,
}

export interface IInitialTodos { todos: ITodo[] }

export interface IInitialState { state: TStateTodo }

export interface IInitialSearch { search: string }

export interface ITodoComponent { todo: ITodo }

export interface ITodoAction {
  type: TAction,
  payload: ITodo,
}

export interface ISearchAction {
  type: TAction,
  payload: string,
}

export interface IStateAction {
  type: TAction,
  payload: TStateTodo,
}

export type TStateTodo = 'all' | 'done' | 'active' | 'search';

export type TAction = 'SET_TODO' | 'SET_CHECKED' | 'DELETE_TODO' | 'SET_STATE' | 'SET_SEARCH';
