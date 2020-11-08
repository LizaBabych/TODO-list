import { IInitialState } from "../types";
import { IAction } from "../types";

const initialState: IInitialState = { todos: [] };

let counter: number = 0;

const reducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case "SET_TODO":
       return {...state, todos: state?.todos?.concat({...action.payload, id: counter++})};
    case "SET_CHECKED":
        const todos = state?.todos?.map((todo) => {
          if (action.payload.id === todo.id) {
            todo.checked = !todo.checked;
            return todo;
          }
          return todo;
        });
       return {...state, todos: todos};
    case "DELETE_TODO":
        const newTodos = state?.todos?.filter((todo) => {
          return todo !== action.payload;
        });
       return {...state, todos: newTodos};
    default: return state;
  }
};

export default reducer;
