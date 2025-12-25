import "./App.css";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [password, setPassword] = useState('');
  return (
    <>
      <h1>Show/hide password</h1>
      <div className="container">
        <div className="input-btn">
          <input 
          type={isShow ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
           />
          <button
            className="button"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            {isShow ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
