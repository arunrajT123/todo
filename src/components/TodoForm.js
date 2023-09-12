import React from "react"; // Import the React library.

// Define a functional component named TodoForm.
const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return ( 
    <form className="todoForm" onSubmit={handleSubmit}> {/* Render a form onSubmit event handler. */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)} // Render an input field with value and onChange event handler.
      />
      <button type="submit"> {editId ? "Edit" : "Submit"}</button> {/* Render a button with dynamic text based on editId prop. */}
    </form> 
  ); // End of the render method.
};

export default TodoForm; // Export the TodoForm component as the default export of the module.