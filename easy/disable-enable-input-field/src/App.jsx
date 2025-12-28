import "./App.css";
import { useState } from "react";

function App() {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <h1>Disable / Enable Input Field</h1>
      <div className="container">
        <input
          type="text"
          className="input"
          placeholder="Enter text here"
          disabled={disabled}
        />

        <button
          className="btn"
          onClick={() => {
            setDisabled(!disabled);
          }}
        >
          {disabled ? "Enable" : "Disable"}
        </button>
      </div>
    </>
  );
}

export default App;
