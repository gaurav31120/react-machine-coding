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

  const isAllSelected = selectedList.length === list.length;

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedList(list);
    } else {
      setSelectedList([]);
    }
  };

  const handleItemChange = (item) => {
    const isSelected = selectedList.some((selected) => selected.id === item.id);

    if (isSelected) {
      const updatedSelected = selectedList.filter(
        (selected) => selected.id !== item.id
      );

      setSelectedList(updatedSelected);
    } else {
      setSelectedList([...selectedList, item]);
    }
  };

  return (
    <>
      <h1>Select All / Unselect All Checkboxes</h1>
      <div className="container">
        <div>
          <div className="input-label">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={(e) => {
                handleSelectAll(e.target.checked);
              }}
            />
            <h2>Select all</h2>
          </div>
          {list.map((item) => {
            return (
              <div key={item?.id}>
                <div className="input-label">
                  <input
                    type="checkbox"
                    checked={selectedList.some(
                      (selected) => selected.id === item.id
                    )}
                    onChange={() => {
                      handleItemChange(item);
                    }}
                  />
                  <h3>{item?.name}</h3>
                </div>
              </div>
            );
          })}

          {selectedList && (
            <>
              {selectedList?.map((item) => {
                return (
                  <div key={item?.id}>
                    <h3>{item?.name}</h3>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
