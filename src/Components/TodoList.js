import React, {useState} from "react";
import '../App.css';
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
    const [todos,setTodos]=useState([]);
    const addTodo=(todo)=>{
        if(!todo.text|| /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodo=[todo,...todos];
        setTodos(newTodo);
    }
    return(
        <div className="todo-list">
            <h1>What is the Plan for Today</h1>
            <TodoForm onSubmit={addTodo} tasks={todos} setTasks={setTodos}/>
            {todos.length?<Todo tasks={todos} setTasks={setTodos}/>:<h1 className="emptyTodoText">There is no item to show</h1>}
        </div>
    )
}

export default TodoList;