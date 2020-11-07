import React from "react";
import {ITodo} from "../types";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setChecked } from "../store/actions/todosActions";

const Todo = (props: any) => {

  const dispatch = useDispatch();
  const deleteMyTodo = (todo: ITodo) => { dispatch(deleteTodo(todo)); };
  const setCheckedTodo = (todo: ITodo) => { dispatch(setChecked(todo)); };

  return (
    <div className="list-group mb-2">
      <div className="list-group-item list-group-item-action list-group-item-secondary center">
        <div className="element-row">
          <div className="check-box mr-1">
            <input type="checkbox" checked={props.todo.checked} onChange={() => setCheckedTodo(props.todo)}/>
          </div>
          <p className={props.todo.checked ? "checked " : "unchecked "}>{props.todo.name}</p>
        </div>
        <button className="btn btn-sm btn-danger" onClick={() => deleteMyTodo(props.todo)}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
