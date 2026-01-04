import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState("");
  return (
    <>
      <h1>Input Character Limit</h1>
      <div className="container">
        <input
          type="text"
          value={count}
          maxLength={20}
          onChange={(e) => setCount(e.target.value)}
        />
        <h3>Remaining characters: {20 - count.length}</h3>
      </div>
    </>
  );
}

export default App;
