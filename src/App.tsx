import React from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { createStore } from "redux";
// import { Provider } from "react-redux"
import './App.css';
// const store = createStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoForm />
    </div>
  );
}

export default App;
