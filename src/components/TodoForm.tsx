import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import SortingTodo from "./SortingTodo";
import "../style/todo.css";
import { ITodo, TStateTodo, IRootReducer } from "../types";
import { setTodos } from "../store/actions/todoActions";
import { setState } from "../store/actions/stateActions";

const TodoForm: React.FC = () => {

  const todos = useSelector((state: IRootReducer) => state.todoReducer.todos);
  const state = useSelector((state: IRootReducer) => state.stateReducer.state);

  const dispatch = useDispatch();

  const setMyTodos = (todo: ITodo) => { dispatch(setTodos(todo)); };
  const setTodoState = (state: TStateTodo) => { dispatch(setState(state)); };

  const [todo, setTodo] = useState<ITodo>({title: "", checked: false, id: 0});

  const clickHandler = (): void => {
    if (todo.title !== "") {
      setMyTodos(todo);
      setTodo({...todo, title: ""});
      setTodoState("all");
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper-list">
        <h1 className="todo-name">Todo-List</h1>
        <Search />
      </div>
      <div className="todo-form mt-2">
      <div className="dropdown new-line">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-toggle="dropdown">
          {state}
        </button>
        <div className="dropdown-menu">
          <span className="dropdown-item" onClick={() => setTodoState("all")}>Все</span>
          <span className="dropdown-item" onClick={() => setTodoState("active")}>Активные</span>
          <span className="dropdown-item" onClick={() => setTodoState("done")}>Выпоненые</span>
        </div>
      </div>
        <input
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value})}
          className="form-control"
          type="text"
          onKeyPress={(e) => {if (e.key === "Enter") clickHandler();}}
          placeholder="Введите название..." />
      </div>
      <SortingTodo />
    </div>
  );
};


export default TodoForm;
