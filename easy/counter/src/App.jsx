import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="heading">
        <h5>Counter app </h5>
      </div>
      <div className="">
        <div className="button-container">
          <button onClick={() => { 
          if(count>0)
            setCount(count - 1)} 
        }
            className="button">
            Decrease
          </button>

          <div className="count">{count}</div>
          <button onClick={() => {   
            if(count<10) 
            setCount(count + 1)} }
            className="button">
            Increase
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          setCount(0);
        }}
        className="button"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
