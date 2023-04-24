import React, { useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: "123",
      text: "장보기",
      status: "active",
    },
    {
      id: "124",
      text: "공부하기",
      status: "active",
    },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    // 새로운 투두를 todos에 업데이트 해야 함
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  return (
    <section>
      {todos.map((i) => (
        <Todo
          key={i.id}
          todo={i}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
