import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

let items = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(items);
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);
  //  effect will only be triggered when the list variable changes.

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedTodos = todos.map((t) =>
        t.id === editId ? { id: t.id, todo } : t
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
    } else if (todo.trim() !== "") {
      const newTodo = { id: `${todo}-${Date.now()}`, todo };
      setTodos([newTodo, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setTodo(todoToEdit.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;