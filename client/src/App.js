import React, { Fragment } from "react";
import "./App.css";

//components

 import InputTodo from "./components/InputTodo";
 import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <h1>Hello There</h1>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;