import "./App.css";

import { useState } from "react";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editText, setEditText] = useState(null);

  const handleAdd = () => {
    setTodoList([
      ...todoList,
      { text: addTodo, completed: false, isEditing: false },
    ]);
    setAddTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  const handleCompleted = (index) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, completed: true, isEditing: false } : item
    );
    setTodoList(updatedTodoList);
  };

  const handleEdit = (index) => {
    setEditText(todoList[index].text);
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, completed: false, isEditing: true } : item
    );
    setTodoList(updatedTodoList);
  };

  const handleCancel = (index) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, isEditing: false } : item
    );
    setTodoList(updatedTodoList);
    setEditText(null);
  };

  const handleSave = (index, editText) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, text: editText, isEditing: false } : item
    );
    setTodoList(updatedTodoList);
    setEditText(null);
  };

  return (
    <>
      <h1>To do app </h1>

      <div className="container">
        <div className="input-btn">
          <input
            className="input"
            onChange={(e) => {
              setAddTodo(e.target.value);
            }}
            value={addTodo}
            type="text"
            placeholder="Enter your task"
          />

          <button
            className="button"
            disabled={!addTodo.trim()}
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </button>
        </div>
        <div></div>
        <div className="list-delete">
          {todoList?.map((item, index) => {
            return (
              <div key={index} className="list-box">
                <div className="list-delete-row">
                  <p
                    className={
                      item?.completed ? "item-completed" : "item-not-completed"
                    }
                  >
                    {item?.text}
                  </p>
                  {item?.isEditing && (
                    <div className="edit-input">
                      <input
                        value={editText ?? item?.text}
                        type="text"
                        onChange={(e) => {
                          setEditText(e.target.value);
                        }}
                      />
                      <div className="edit-input-btn">
                        <button onClick={() => handleCancel(index)}>
                          Cancel
                        </button>
                        <button onClick={() => handleSave(index, editText)}>
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    disabled={todoList.some((t) => t.isEditing)}
                    onClick={() => {
                      handleEdit(index);
                    }}
                  >
                    Edit
                  </button>

                  {!item?.completed && (
                    <button
                      onClick={() => {
                        handleCompleted(index);
                      }}
                    >
                      Completed
                    </button>
                  )}

                  <button
                    className="del-btn"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
