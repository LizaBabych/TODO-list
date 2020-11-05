import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import "./App.css";

const initialState = {
  name: "a",
  age: 15,
};

const rootReducer = (state = initialState, action: any) => {
  return state;
};

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <TodoForm />
      </div>
    </Provider>
  );
};

export default App;
