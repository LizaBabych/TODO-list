import {IAction} from "../../types";
import {IInitialState} from "../../types";

const initialState: IInitialState = {
  todos: [],
};

let counter: number = 0;

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_TODOS":
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

export default todosReducer;
