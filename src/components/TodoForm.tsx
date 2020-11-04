import React, {useState} from "react"
import Todo from "./Todo"

interface ITodo {
  name: string,
  checked: boolean,
  id: number,
}

const TodoForm: React.FC = () => {

  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState<any>('');

  const clickHandler = () => {
    todos.push(todo);
    setTodo('');
  }

  const deleteTodo = (myTodo: string) => {
    setTodos(todos.filter((n) => {return n !== myTodo}));
  }

  return (
    <>
      <div className="todo-form">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Введите название..." />
        <button className="btn btn-success" onClick={() => clickHandler()}>Добавить</button>
      </div>
      <div className="todos">
        {todos.map((myTodo, idx) =>
          <Todo todo={myTodo} key={idx} deleteTodo={() => deleteTodo(myTodo)}/>
        )}
      </div>
    </>
  );
}

export default TodoForm;
