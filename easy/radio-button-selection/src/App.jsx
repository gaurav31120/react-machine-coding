import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <h1>Radio Button Selection</h1>
      <div>
        <label>
          <input
            name="gender"
            type="radio"
            value="Male"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
            checked={selected === "Male"}
          />
          Male
        </label>
        <label>
          <input
            name="gender"
            type="radio"
            value="Female"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
            checked={selected === "Female"}
          />
          Female
        </label>
        <label>
          <input
            name="gender"
            type="radio"
            value="Other"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
            checked={selected === "Other"}
          />
          Other
        </label>

        <h3>Selected: {selected ? selected : "None"}</h3>
      </div>
    </>
  );
}

export default App;
