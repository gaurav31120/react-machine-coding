import "./App.css";
import { useState } from "react";

function App() {
  const fruitList = ["Apple", "Banana", "Mango"];
  const [showList, setShowList] = useState(false);
  return (
    <>
      <h1>Show / Hide List</h1>
      <div className="container">
        <button
          onClick={() => {
            setShowList(!showList);
          }}
        >
          Toggle List
        </button>

        {showList && (
          <div>
            {fruitList?.map((item) => {
              return (
                <div key={item}>
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
