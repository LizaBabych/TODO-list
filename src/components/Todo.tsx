import React from "react";

const Todo = (props: any) => {

  return (
    <div className="list-group mb-2">
      <div className="list-group-item list-group-item-action list-group-item-secondary center">
        <div className="element-row">
          <div className="check-box mr-1">
            <input type="checkbox" checked={props.todo.checked} onChange={props.setChecked}/>
          </div>
          <p className={props.todo.checked ? "checked " : "unchecked "}>{props.todo.name}</p>
        </div>
        <button className="btn btn-sm btn-danger" onClick={props.deleteTodo}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
