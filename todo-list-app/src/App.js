import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  const addToList = () => {
    if (!title.trim()) return;
    const newItem = { id: generateId(), title };
    setList([...list, newItem]);
    setTitle("");
  };

  const generateId = () => crypto.randomUUID().substring(2, 10);

  const handleUpdate = (id, updatedTitle) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, title: updatedTitle } : item
      )
    );
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h2>ToDo List</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addToList}>Add</button>

      {list.map((item) => (
        <TodoList
          key={item.id}
          item={item}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
