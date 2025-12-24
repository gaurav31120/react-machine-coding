import { useState } from "react";
import "./App.css";

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="container">
      <div className="tooltip-box">
        <div>
          <h1>Toggle text</h1>

          <div className="tooltip">
            <button
              onClick={() => {
                setShowText(!showText);
              }}
            >
              {showText ? "Hide text" : "Show text"}
            </button>
          </div>
        </div>
      </div>

      {showText && (
        <div className="message">This is a tooltip text content.</div>
      )}
    </div>
  );
}

export default App;
