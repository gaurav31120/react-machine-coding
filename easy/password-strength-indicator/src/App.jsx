import { useState } from "react";
import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(0);

  const passwordStrength = (passwordLength) => {
    if (passwordLength === 0) return "";
    else if (passwordLength < 6) return "weak";
    else if (passwordLength < 10) return "medium";
    else return "strong";
  };

  const strength = passwordStrength(passwordLength);

  return (
    <>
      <h1>Password Strength Indicator</h1>
      <div className="container">
        <input
          type="password"
          className="input"
          placeholder="Enter a password"
          onChange={(e) => {
            setPasswordLength(e.target.value.length);
          }}
        />

        {passwordLength > 0 && (
          <p className={`label ${strength}`}>{strength} password</p>
        )}
      </div>
    </>
  );
}

export default App;
