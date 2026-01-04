import "./App.css";
import { useState } from "react";

function App() {
  const [on, setOn] = useState(false);
  return (
    <>
      <h1>Toggle Button Text (ON / OFF)</h1>
      <div className="container">
        <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>
      </div>
    </>
  );
}

export default App;
