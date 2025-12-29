import "./App.css";
import { useState } from "react";

function App() {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <h1>Show / Hide List</h1>
      <div className="container">
        <button
          className="btn"
          onClick={() => {
            setShowList(!showList);
          }}
        >
          Toogle List
        </button>
        {showList && (
          <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Mango</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
