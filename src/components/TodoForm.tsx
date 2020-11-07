import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { ITodo } from "../types";
import { TStateTodo } from "../types";

import { setTodos } from "../store/actions";
import reducer from "../store/reducers";

const TodoForm: React.FC = () => {

  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);             // any
  const setMyTodos = (todo: ITodo) => { dispatch(setTodos(todo)); };

  const [searchName, setSearchName] = useState<string>("");           // Не Name,а туду!!!!
  const [stateTodo, setStateTodo] = useState<TStateTodo>("all");
  const [search, setSearch] = useState<string>("");
  const [todoName, setTodoName] = useState<string>("");

  const clickHandler = () => {
    if (todoName !== "") {
      setMyTodos({name: todoName, checked: false, id: 0});
      setTodoName("");
      setStateTodo("all");
    }
  };

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search !== "") {
      setStateTodo("search");
    }
  };

  return (
    <>
      <div className="wrapper-list">
        <p className="todo-name">Todo-List</p>
        <form className="form-inline form" onSubmit={sendForm}>
          <input
            value={search}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Поиск..."
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
      </div>
      <div className="todo-form mt-2">
      <div className="dropdown new-line">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-toggle="dropdown">
          {stateTodo}
        </button>
        <div className="dropdown-menu">
          <span className="dropdown-item" onClick={() => setStateTodo("all")}>Все</span>
          <span className="dropdown-item" onClick={() => setStateTodo("active")}>Активные</span>
          <span className="dropdown-item" onClick={() => setStateTodo("done")}>Выпоненые</span>
        </div>
      </div>
        <input
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="form-control"
          type="text"
          onKeyPress={(e) => {if (e.key === "Enter") clickHandler();}}
          placeholder="Введите название..." />
          <i className="click-add fas fa-plus" onClick={() => clickHandler()}/>

      </div>
      {stateTodo === "all" ? (
        <div className="todos">
          {todos.map((myTodo: ITodo) =>
            <Todo todo={myTodo} key={myTodo.id}/>
          )}
        </div>
      ) : (stateTodo === "active") ? (
        <div className="todos">
          {todos.map((myTodo: ITodo) =>
            <div key={myTodo.id}>
              {myTodo.checked === false && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      ) : (stateTodo === "done") ? (
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
              {myTodo.name === search && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      )
    }
    </>
  );
};


export default TodoForm;
