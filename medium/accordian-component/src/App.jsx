import "./App.css";
import { useState } from "react";

function App() {
  const list = [
    { title: "Section 1", content: "This is section 1 content" },
    { title: "Section 2", content: "This is section 2 content" },
    { title: "Section 3", content: "This is section 3 content" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <h1>Accordion Component (Single Open)</h1>
      <div className="container">
        {list.map((item, index) => {
          return (
            <div key={item.title}>
              <div
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index);
                }}
                className="title"
              >
                {openIndex === index ? "▼" : "▶"} {item?.title}
              </div>
              {/* {openIndex === index  && <div>{list[index].content}</div>} // both will work */}
              {openIndex === index && (
                <div className="content">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
