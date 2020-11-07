import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoForm />
    </div>
  );
};

export default App;
