import React from "react";
import { FaPlus } from "react-icons/fa";

function InputContainer({inputVal,writeTodo,addTodo}) {
  return (
    <div className="input-container">
      <input
        type="text" value={inputVal} onChange={writeTodo}
        placeholder="What do you want to accomplish today?"
      />
      <button onClick={addTodo}className="add-btn" aria-label="Add task">
        <FaPlus />
      </button>
    </div>
  );
}

export default InputContainer;
