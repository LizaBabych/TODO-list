import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { ITodo, TStateTodo, IRootReducer } from "../types";
import "../style/todo.css";

const SortingTodo: React.FC = () => {

  const todos = useSelector((state: IRootReducer) => state.todoReducer.todos);
  const state = useSelector((state: IRootReducer) => state.stateReducer.state);
  const search = useSelector((state: IRootReducer) => state.searchReducer.search);

  return (
    <div className="todos">
      {todos.map((myTodo: ITodo) =>
        <div key={myTodo.id}>
          {(state === "all") ? <Todo todo={myTodo}/> :
          (state === "active" && myTodo.checked === false) ? <Todo todo={myTodo}/> :
          (state === "done" && myTodo.checked === true) ? <Todo todo={myTodo}/> :
          (state === "search" && myTodo.title === search) ? <Todo todo={myTodo}/> :
          <span/>
         }
        </div>
      )}
    </div>
  );
};

export default SortingTodo;
