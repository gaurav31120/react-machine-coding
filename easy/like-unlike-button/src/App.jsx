import { useState } from "react";
import "./App.css";

function App() {
  const [like, setLike] = useState(false);
  return (
    <>
      <h1>Like / Unlike Button</h1>
      <div className="container">
        <div className="btn-count">
          <button
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? "Unlike 💔" : "Like ❤️"}
          </button>
          <h3>Likes: {like ? 1 : 0}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
