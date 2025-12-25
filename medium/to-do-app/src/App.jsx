import "./App.css";

import { useState } from "react";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    setTodoList([...todoList, addTodo]);
    setAddTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
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
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </button>
        </div>
        <div className="list-delete">
          {todoList?.map((item, index) => {
            return (
              <div key={index} className="list-box">
                <div className="list-delete-row">
                  <p>{item}</p>
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