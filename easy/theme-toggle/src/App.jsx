import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div className={isDark ? "bg-dark" : "bg-light"}>
        <h1 className={isDark ? "text-dark" : "text-light"}>Theme toggle</h1>
        <div className="container">
          <div className={isDark ? "text-dark" : "text-light"}>
            This is a theme toggle screen {isDark ? "dark" : "light"} mode
          </div>
          <button
            className="button"
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            {isDark ? "Switch to light mode" : "Switch to dark mode"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
