import React from "react"; // Import the React library.

// Define a functional component named TodoList.
const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return ( // Start the render method of the component.
    <ul className="allTodos"> {/* Render an unordered list with a CSS class. */}
      {todos.map((t) => ( // Map over the todos array and render a list item for each todo.
        <li className="singleTodo"> {/* Render a list item with a CSS class. */}
          <span className="todoText" key={t.id}> {/* Render a span with a CSS class and a unique key. */}
            {t.todo} {/* Display the text content of the todo item. */}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button> {/* Render an "Edit" button with an onClick event handler. */}
          <button onClick={() => handleDelete(t.id)}>Delete</button> {/* Render a "Delete" button with an onClick event handler. */}
        </li> 
      ))} 
    </ul> 
  ); 
};

export default TodoList; 