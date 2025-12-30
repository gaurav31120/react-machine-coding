import "./App.css";
import { useState } from "react";

function App() {
  const [selectedList, setSelectedList] = useState([]);
  const list = [
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "Angular",
    },
    {
      id: 3,
      name: "Vue",
    },
  ];
  return (
    <>
      <h1>Multi-Select Checkbox List</h1>
      <div className="container">
        {list.map((item) => {
          return (
            <div key={item?.id}>
              <div className="input-label">
                <input
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedList([...selectedList, item]);
                    } else {
                      const updatedList = selectedList.filter(
                        (data) => data?.id !== item.id
                      );
                      setSelectedList(updatedList);
                    }
                  }}
                />

                <h2>{item?.name}</h2>
              </div>
            </div>
          );
        })}

        <div>------------Selected Items----------</div>

        {selectedList.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
