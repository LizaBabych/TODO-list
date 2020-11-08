import React, { useState } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import "../style/todo.css";
import { ITodo, IInitialState, TStateTodo } from "../types";
import { setTodos } from "../store/actions";
import reducer from "../store/reducers";

const TodoForm: React.FC = () => {

  const todos = useSelector((todos: IInitialState) => todos.todos);
  const dispatch = useDispatch();
  const setMyTodos = (todo: ITodo) => { dispatch(setTodos(todo)); };

  const [stateTodo, setStateTodo] = useState<TStateTodo>("all");
  const [filter, setFilter] = useState<string>("");
  const [todo, setTodo] = useState<ITodo>({title: "", checked: false, id: 0});

  const clickHandler = (): void => {
    if (todo.title !== "") {
      setMyTodos(todo);
      setTodo({...todo, title: ""});
      setStateTodo("all");
      setFilter("");
    }
  };

  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (filter !== "") {
      setStateTodo("search");
    } else setStateTodo("all");
  };

  return (
    <div className="wrapper">
      <div className="wrapper-list">
        <p className="todo-name">Todo-List</p>
        <form className="form-inline form" onSubmit={sendForm}>
          <input
            value={filter}
            className="form-control mr-sm-2"
            type="text"
            placeholder="Поиск..."
            onChange={(e) => setFilter(e.target.value)}
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
          <span className="dropdown-item" onClick={() => {setStateTodo("all"); setFilter("");}}>Все</span>
          <span className="dropdown-item" onClick={() => {setStateTodo("active"); setFilter("");}}>Активные</span>
          <span className="dropdown-item" onClick={() => {setStateTodo("done"); setFilter("");}}>Выпоненые</span>
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
              {myTodo.title === filter && <Todo todo={myTodo}/> }
            </div>
          )}
        </div>
      )
    }
    </div>
  );
};


export default TodoForm;
