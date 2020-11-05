import React, {useState} from "react";
import Todo from "./Todo";

interface ITodo {
  name: string,
  checked: boolean,
  id: number,
}

type stateTodo = 'all' | 'done' | 'active' | 'searchTodo';

const TodoForm: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);
  const [searchTodo, setSearchTodo] = useState<string>("");
  const [stateTodo, setStateTodo] = useState<stateTodo>("all");
  const [todo, setTodo] = useState<ITodo>({
    name: "",
    checked: false,
    id: 0,
  });

  const clickHandler = () => {
    if (todo.name !== "") {
      todos.push(todo);
      setTodo({...todo, name: "", id: todo.id + 1});
    }
  };

  const setChecked = (myTodo: ITodo) => {
    todos.push({...myTodo, checked: !myTodo.checked});
    setTodos(todos.filter((n) => {return n !== myTodo;}));
  };

  const deleteTodo = (myTodo: ITodo) => {
    setTodos(todos.filter((n) => {return n !== myTodo;}));
  };

  const sendForm = (e: any) => {
    e.preventDefault();
    console.log(searchTodo);
    setStateTodo("searchTodo");
  };

  return (
    <>
      <form className="form-inline form" onSubmit={sendForm}>
        <input
          value={searchTodo}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Введите..."
          onChange={(e) => setSearchTodo(e.target.value)}
          />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
      </form>
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
          <span className="dropdown-item" onClick={() => setStateTodo("all")}>Все</span>
          <span className="dropdown-item" onClick={() => setStateTodo("active")}>Активные</span>
          <span className="dropdown-item" onClick={() => setStateTodo("done")}>Выпоненые</span>
        </div>
      </div>
      {stateTodo === "all" ? (
        <div className="todos">
          {todos.map((myTodo) =>
            <Todo
              todo={myTodo}
              key={myTodo.id}
              setChecked={() => setChecked(myTodo)}
              deleteTodo={() => deleteTodo(myTodo)}/>
          )}
        </div>
      ) : (stateTodo === "active") ? (
        <div className="todos">
          {todos.map((myTodo) =>
            <div key={myTodo.id}>
              {myTodo.checked === false &&
              <Todo
                todo={myTodo}
                setChecked={() => setChecked(myTodo)}
                deleteTodo={() => deleteTodo(myTodo)}/>
              }
            </div>
           )}
         </div>
      ) : (stateTodo === "done") ? (
        <div className="todos">
          {todos.map((myTodo) =>
            <div key={myTodo.id}>
              {myTodo.checked === true &&
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
            <div key={myTodo.id}>
              {myTodo.name === searchTodo &&
              <Todo
                todo={myTodo}
                setChecked={() => setChecked(myTodo)}
                deleteTodo={() => deleteTodo(myTodo)}/>
              }
            </div>
          )}
        </div>
      )
    }
    </>
  );
};

export default TodoForm;
