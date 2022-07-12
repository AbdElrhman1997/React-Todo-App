import React from "react";
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import './App.css';

function App() {
  return(
    <div className="todo-app">
      <TodoList/>
    </div>
  )
}

export default App;