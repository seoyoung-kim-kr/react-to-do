import logo from "./logo.svg";
import "./App.css";
import TodoList from "/Users/seoyoung/Library/Mobile Documents/com~apple~CloudDocs/Study/react/todo/src/components/TodoList/TodoList.jsx";
import Header from "/Users/seoyoung/Library/Mobile Documents/com~apple~CloudDocs/Study/react/todo/src/components/Header/Header.jsx";
import { useState } from "react";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
