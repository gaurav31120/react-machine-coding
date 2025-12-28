import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Button Click Counter with Limit</h1>
      <div className="container">
        <button disabled={counter == 5} onClick={() => setCounter(counter + 1)}>
          Click
        </button>
        <p>Count: {counter}</p>
      </div>
    </>
  );
}

export default App;
