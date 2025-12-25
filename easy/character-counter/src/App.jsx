import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Character Counter</h1>

      <div className="container">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <p>Characters: {value.length} </p>
        {value?.length > 100 ? " Maximum limit exceeded" : ""}
      </div>
    </>
  );
}

export default App;
