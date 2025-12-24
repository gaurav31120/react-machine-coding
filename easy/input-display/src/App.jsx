import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>Input display</h1>
        <div className="input-btn">
          <input
            placeholder={"Enter an input"}
            value={text}
            className="input"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              setText("");
            }}
          >
            Clear
          </button>
        </div>

        {text && <p>{text}</p>}
      </div>
    </>
  );
}

export default App;
