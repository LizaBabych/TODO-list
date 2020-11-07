export interface ITodo {
  name: string,
  checked: boolean,
  id: number,
}

export interface IInitialState {
  todos?: ITodo[],
  search?: string,
  stateTodo?: string,
  todo?: ITodo,
}

export interface ITodoComponent {
  todo: ITodo,
  setChecked(): void,
  deleteTodo(): void,
}

export interface IAction {
  type: TAction,
  payload: Tpayload,
}

export type TStateTodo = 'all' | 'done' | 'active' | 'search';

export type TAction = 'SET_TODOS' | 'SET_CHECKED' | 'DELETE_TODO' | 'SET_STATE_TODO' | 'SET_SEARCH_TODO';

export type Tpayload = ITodo | TStateTodo | string;
