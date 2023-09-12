import React, { useState } from "react"; 

import TodoForm from "./components/TodoForm"; // Import the TodoForm component.
import TodoList from "./components/TodoList"; // Import the TodoList component.

const App = () => { // Define the App functional component.
  const [todo, setTodo] = useState(""); // Create a state variable "todo" 
  const [todos, setTodos] = useState([]); // Create a state variable "todos"
  const [editId, setEditId] = useState(0); // Create a state variable "editId" 

  const handleSubmit = (e) => { // Define a function "handleSubmit" to handle form submission.
    e.preventDefault(); // Prevent the default form submission behavior.

    if (editId) { // Check if there is an "editId" (indicating an edit operation).
      const editTodo = todos.find((i) => i.id === editId); // Find the todo item to edit.
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      ); // Update the todos array with the edited todo item.
      setTodos(updatedTodos); // Set the state "todos" to the updated list.
      setEditId(0); // Reset the editId to indicate no ongoing edit.
      setTodo(""); // Reset the todo input field.
      return; // Exit the function.
    }

    if (todo !== "") { // Check if the "todo" input field is not empty.
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]); // Add a new todo item to the todos array.
      setTodo(""); // Reset the todo input field.
    }
  };


  // handle delete
  const handleDelete = (id) => { // Define a function "handleDelete" to delete a todo item.
    const delTodo = todos.filter((to) => to.id !== id); // Create a new array without the deleted todo item.
    setTodos([...delTodo]); // Update the state "todos" with the filtered list.
  };

  const handleEdit = (id) => { // Define a function "handleEdit" to edit a todo item.
    const editTodo = todos.find((i) => i.id === id); // Find the todo item to edit.
    setTodo(editTodo.todo); // Set the "todo" state to the todo text of the item being edited.
    setEditId(id); // Set the "editId" state to indicate an ongoing edit.
  };

  return ( // Start rendering the App component.
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        /> {/* Render the TodoForm component with props. */}
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        /> {/* Render the TodoList component with props. */}
      </div>
    </div>
  ); // End of the render method.
};

export default App; // Export the App component as the default export of the module.