import React from "react";
import { ITodo } from "../types";
import { ITodoComponent } from "../types";

import { useDispatch } from "react-redux";
import { deleteTodo, setChecked } from "../store/actions";

const Todo: React.FC<ITodoComponent> = (props) => {

  const dispatch = useDispatch();
  const deleteMyTodo = (todo: ITodo) => { dispatch(deleteTodo(todo)); };
  const setCheckedTodo = (todo: ITodo) => { dispatch(setChecked(todo)); };

  return (
    <div className="list list-group-item-action list-group-item-secondary center"
      onClick={() => setCheckedTodo(props.todo)}>
      <div className="element-row ml-1">
        {(props.todo.checked) ? (
            <i className="show mt-1 fas fa-check" />
          ) : ( <i className="hide mt-1 fas fa-check" />
        )}
        <p className={props.todo.checked ? "checked ml-1 " : "unchecked ml-1 "}>
          {props.todo.name}
        </p>
      </div>
      <button className="btn btn-sm" onClick={() => deleteMyTodo(props.todo)}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default Todo;
