import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const list = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
  ];
  const totalPages = Math.floor(list.length / itemsPerPage);
  
  return (
    <>
      <h1>Pagination (Basic)</h1>
      <div className="container">
        <div>
          {list
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => {
              return (
                <div className="list" key={item}>
                  {item}
                </div>
              );
            })}
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              Prev
            </button>
            <button
              disabled={currentPage === totalPages + 1}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
