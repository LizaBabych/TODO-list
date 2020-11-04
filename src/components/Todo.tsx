import React, {useState} from "react"

const Todo = (props: any) => {

  const [checked, setChecked] = useState<boolean>(false);

  const toggle = () => {
    setChecked(!checked);
  }

  return (
    <div className="list-group mb-2">
      <div className="list-group-item list-group-item-action list-group-item-secondary center">
        <div className="element-row">
          <div className="check-box mr-1">
            <input type="checkbox" onChange={() => toggle()}/>
          </div>
          <p className={checked ? "checked " : "unchecked "}>{props.todo}</p>
        </div>
        <button className="btn btn-sm btn-danger" onClick={props.deleteTodo}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
