import React from "react";
import TodoForm from "./components/TodoForm";
import "./style/App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoForm />
    </div>
  );
};

export default App;
