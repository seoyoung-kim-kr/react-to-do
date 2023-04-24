import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// AddTodo에서 새로운 아이템이 추가 된 것을 보여주고, 상태는 상위(TodoList)에서 처리
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return "";
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
