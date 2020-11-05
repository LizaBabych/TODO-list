import React, {useState} from "react"
import Todo from "./Todo"

export interface ITodo {
  name: string,
  checked: boolean,
  id: number,
}

type stateTodo = 'all' | 'done' | 'active';

const TodoForm: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [stateTodo, setStateTodo] = useState<stateTodo>('all');
  const [todo, setTodo] = useState<ITodo>({
    name: '',
    checked: false,
    id: 0,
  });

  const clickHandler = () => {
    if (todo.name !== '') {
      todos.push(todo);
      setTodo({...todo, name: '', id: todo.id + 1});
    }
  }

  const setChecked = (myTodo: ITodo) => {
    todos.push({...myTodo, checked: !myTodo.checked});
    setTodos(todos.filter((n) => {return n !== myTodo}));
    console.log(todos);
  }

  const deleteTodo = (myTodo: ITodo) => {
    setTodos(todos.filter((n) => {return n !== myTodo}));
  }

  return (
    <>
      <div className="todo-form">
        <input
          value={todo.name}
          onChange={(e) => setTodo({...todo, name: e.target.value})}
          className="form-control"
          type="text"
          placeholder="Введите название..." />
        <button
          className="btn btn-success"
          onClick={() => clickHandler()}
        >Добавить</button>
      </div>
      <div className="dropdown new-line">
        <button
            className="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown">
          {stateTodo}
        </button>
        <div className="dropdown-menu">
          <span className="dropdown-item" onClick={() => setStateTodo('all')}>Все</span>
          <span className="dropdown-item" onClick={() => setStateTodo('active')}>Активные</span>
          <span className="dropdown-item" onClick={() => setStateTodo('done')}>Выпоненые</span>
        </div>
      </div>
      {stateTodo === 'all' ? (
        <div className="todos">
          {todos.map((myTodo) =>
            <Todo
              todo={myTodo}
              key={myTodo.id}
              setChecked={() => setChecked(myTodo)}
              deleteTodo={() => deleteTodo(myTodo)}/>
          )}
        </div>
      ) : (stateTodo === 'active') ? (
        <div className="todos">
          {todos.map((myTodo) =>
            <div
            key={myTodo.id}>
              {myTodo.checked === false &&
              <Todo
                todo={myTodo}
                setChecked={() => setChecked(myTodo)}
                deleteTodo={() => deleteTodo(myTodo)}/>
              }
            </div>
           )}
         </div>
      ) : (
        <div className="todos">
          {todos.map((myTodo) =>
            <div
            key={myTodo.id}>
              {myTodo.checked === true &&
              <Todo
                todo={myTodo}
                setChecked={() => setChecked(myTodo)}
                deleteTodo={() => deleteTodo(myTodo)}/>
              }
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TodoForm;
