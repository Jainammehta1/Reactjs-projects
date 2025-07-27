import React from "react";

function Todo({todo,index,deleteTodo }) {
  return (
   
      <div className="todo">
        <input type="checkbox" className="check-complete" />
        <p>{todo}s</p>
        <button onClick={()=>deleteTodo(index)} className="delete-btn" aria-label="Delete task">
          Delete
        </button>
      </div>
    
  );
}

export default Todo;
