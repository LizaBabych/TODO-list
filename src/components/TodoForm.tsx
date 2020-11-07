import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import {ITodo} from "../types";
import {TStateTodo} from "../types";

import {setTodos} from "../store/actions/todosActions";
import setSearchTodo from "../store/actions/searchTodoActions";
import setStateTodo from "../store/actions/stateTodoActions";
import rootReducer from "../store/reducers";

const TodoForm: React.FC = () => {

  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todosReducer.todos);
  const stateTodo = useSelector((state: any) => state.stateTodoReducer.stateTodo);
  const searchTodo = useSelector((state: any) => state.searchTodoReducer.search);

  const setMyTodos = (todo: ITodo) => { dispatch(setTodos(todo)); };
  const setStateMyTodo = (state: TStateTodo) => { dispatch(setStateTodo(state)); };
  const setSearchMyTodo = (search: string) => { dispatch(setSearchTodo(search)); };

  const [searchName, setSearchName] = useState<string>("");
  const [todoName, setTodoName] = useState<string>("");

  const clickHandler = () => {
    if (todoName !== "") {
      setMyTodos({name: todoName, checked: false, id: 0});
      setTodoName("");
      setStateMyTodo("all");
    }
  };

  const sendForm = (e: any) => {
    e.preventDefault();
    setStateMyTodo("search");
  };

  return (
    <>
      <form className="form-inline form" onSubmit={sendForm}>
        <input
          value={searchTodo}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Введите..."
          onChange={(e) => setSearchMyTodo(e.target.value)}
          />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
      </form>
      <div className="todo-form">
        <input
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Введите название..." />
        <button className="btn btn-success" onClick={() => clickHandler()}>Добавить</button>
      </div>
      <div className="dropdown new-line">
        <button
            className="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown">
          {stateTodo}
        </button>
        <div className="dropdown-menu">
          <span className="dropdown-item" onClick={() => setStateMyTodo("all")}>Все</span>
          <span className="dropdown-item" onClick={() => setStateMyTodo("active")}>Активные</span>
          <span className="dropdown-item" onClick={() => setStateMyTodo("done")}>Выпоненые</span>
        </div>
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
            {myTodo.name === searchTodo && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      )
    }
    </>
  );
};


export default TodoForm;
