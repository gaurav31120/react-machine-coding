import "./App.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1>Modal Component</h1>
      <div className="container">
        {!showModal && (
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Open modal
          </button>
        )}
        {showModal && (
          <div className="modal">
            <p>This is a modal</p>
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
