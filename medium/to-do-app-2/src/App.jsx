import "./App.css";

import { useState } from "react";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    setTodoList([...todoList, { text: addTodo, completed: false }]);
    setAddTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  const handleCompleted = (index) => {
    const updatedTodoList = todoList.map((item, i) =>
      i === index ? { ...item, completed: true } : item
    );
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
