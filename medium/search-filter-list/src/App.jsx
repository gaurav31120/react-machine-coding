import "./App.css";
import { useState } from "react";

function App() {
  const list = ["Apple", "banana", "Mango", "Orange"];
  const [search, setSearch] = useState("");

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Search Filter List</h1>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div className="list-items">
        <ul>
          {filteredList?.map((items) => {
            return <li key={items}>{items}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
