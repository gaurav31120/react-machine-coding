import { useState } from "react";
import "./App.css";

function App() {
  const list = ["Small", "Medium", "Large"];
  const [selected, setSelected] = useState("");
  return (
    <>
      <h1>Button Group (Single Select)</h1>
      <div className="container">
        <div className="list">
          {list?.map((item) => {
            return (
              <div
                key={item}
              >
                <button
                  className={`${selected === item ? "active" : "inactive"} btn`}
                  onClick={(e) => {
                    setSelected(e.target.innerText);
                  }}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
        <h2>{selected}</h2>
      </div>
    </>
  );
}

export default App;
