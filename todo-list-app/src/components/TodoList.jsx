import { useState, useEffect } from "react";
import "../styles/TodoList.css";

const TodoList = ({ item, handleUpdate, handleDelete }) => {
  const { title, id } = item;

  const [isEditable, setIsEditable] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    setNewTitle(title);
  }, [title]);

  const handleSave = () => {
    handleUpdate(id, newTitle);
    setIsEditable(false);
  };

  return (
    <div className="tile">
      {isEditable ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="tileInput"
            autoFocus
          />
          <div className="tileButtonContainer">
            <button onClick={handleSave} className="tileButton saveButton">
              Save
            </button>
            <button
              onClick={() => setIsEditable(false)}
              className="tileButton cancelButton"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="tileTitle">{title}</p>
          <div className="tileButtonContainer">
            <button
              onClick={() => setIsEditable(true)}
              className="tileButton editButton"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="tileButton deleteButton"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
