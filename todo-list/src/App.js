import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);  

  function addTodo(content) {
    //Objet qui va contenir les news informations de l'utilisateur
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false
    }
    // '...' est un 'spread operator' qui va créer une copie du tableau 'todoList' dans lequel on va ajouter les nouvelles informations avec l'objet todo.
    setTodoList([...todoList, todo ])
  }

  function deleteTodo(id){
    setTodoList(todoList.filter(todo => todo.id !== id))
  }
  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Todo List</h1>
        <AddTodo addTodo={ addTodo }/>
        <TodoList todoList={ todoList } deleteTodo={ deleteTodo} />
      </div>
    </div>
  );
  
}

export default App;
