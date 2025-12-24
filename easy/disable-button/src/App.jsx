import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  return (
    <>
      <h1>Disable button</h1>

      <div className="input-btn">
        <input
          type="text"
          value={text}
          placeholder={"Enter text"}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            setSubmittedText(text);
          }}
          disabled={!text}
        >
          Submit
        </button>
      </div>

      {submittedText && <p>{submittedText}</p>}
    </>
  );
}

export default App;
