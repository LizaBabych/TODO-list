export interface ITodo {
  name: string,
  checked: boolean,
  id: number,
}

export interface IInitialState {
  todos?: ITodo[],
  todo?: ITodo,
}

export interface ITodoComponent {
  todo: ITodo,
}

export interface IAction {
  type: TAction,
  payload: Tpayload,
}

export type TStateTodo = 'all' | 'done' | 'active' | 'search';

export type TAction = 'SET_TODO' | 'SET_CHECKED' | 'DELETE_TODO';

export type Tpayload = ITodo | TStateTodo | string;
