import { useState } from "react";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h1>Checkbox Toggle Text</h1>
      <div className="container">
        <div className="checkbox">
          <div className="input-label">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
            <label>Accept terms and conditions</label>
          </div>
          {checked && <p>Accepted</p>}
        </div>
      </div>
    </>
  );
}

export default App;
