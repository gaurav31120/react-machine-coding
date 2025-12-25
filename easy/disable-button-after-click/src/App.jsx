import "./App.css";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <h1>Disable button after click</h1>

      <div className="container">
        <button
          onClick={() => {
            setSubmitted(true);
          }}
          disabled={submitted}
        >
          Submit
        </button>

        {submitted && "Submitted successfully"}
      </div>
    </>
  );
}

export default App;
