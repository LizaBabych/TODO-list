import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { ITodo, TStateTodo, IRootReducer } from "../types";
import { setTodos } from "../store/actions/todoActions";
import { setState } from "../store/actions/stateActions";
import "../style/todo.css";

const SortingTodo: React.FC = () => {

  const todos = useSelector((state: IRootReducer) => state.todoReducer.todos);
  const state = useSelector((state: IRootReducer) => state.stateReducer.state);
  const search = useSelector((state: IRootReducer) => state.searchReducer.search);

  const dispatch = useDispatch();

  const setMyTodos = (todo: ITodo) => { dispatch(setTodos(todo)); };
  const setTodoState = (state: TStateTodo) => { dispatch(setState(state)); };

  return (
    <>
      {state === "all" ? (
        <div className="todos">
          {todos.map((myTodo: ITodo) =>
            <Todo todo={myTodo} key={myTodo.id}/>
          )}
        </div>
      ) : (state === "active") ? (
        <div className="todos">
          {todos.map((myTodo: ITodo) =>
            <div key={myTodo.id}>
              {myTodo.checked === false && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      ) : (state === "done") ? (
        <div className="todos">
          {todos.map((myTodo: ITodo) =>
            <div key={myTodo.id}>
              {myTodo.checked === true && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      ) : (
        <div className="todos">
          {todos.map((myTodo: ITodo) =>
            <div key={myTodo.id}>
              {myTodo.title === search && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      )
    }
  </>
  );
};

export default SortingTodo;
