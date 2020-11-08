import React from "react";
import { useDispatch } from "react-redux";
import { ITodo, ITodoComponent } from "../types";
import { deleteTodo, setChecked } from "../store/actions/todoActions";

const Todo: React.FC<ITodoComponent> = (props) => {

  const dispatch = useDispatch();

  const deleteMyTodo = (todo: ITodo) => { dispatch(deleteTodo(todo)); };
  const setCheckedTodo = (todo: ITodo) => { dispatch(setChecked(todo)); };

  return (
    <div
      className={"list list-group-item-action center " +
      (props.todo.checked ? "checked-todo " : "")}
      onClick={() => setCheckedTodo(props.todo)}>
      <div className="element-row ml-1 mt-1">
        {(props.todo.checked) ? (
            <i className="show mt-1 fas fa-check" />
          ) : ( <i className="hide mt-1 fas fa-check" />
        )}
        <p className={props.todo.checked ? "checked ml-2 " : "unchecked ml-2 "}>
          {props.todo.title}
        </p>
      </div>
      <button className="btn btn-sm" onClick={() => deleteMyTodo(props.todo)}>
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default Todo;
