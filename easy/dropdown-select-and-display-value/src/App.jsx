import "./App.css";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  return (
    <>
      <h1>Dropdown select and select value</h1>

      <div className="container">
        <div className="select-options">
          <select
            className="options"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          {country && <p> Select country: {country}</p>}
        </div>
      </div>
    </>
  );
}

export default App;
