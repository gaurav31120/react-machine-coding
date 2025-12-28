import { useState } from "react";
import "./App.css";

function App() {
  const [selectTab, setSelectTab] = useState(0);
  const tabs = [
    {
      text: "Home",
      content: "Welcome to Home page",
    },
    {
      text: "Profile",
      content: "This is Profile page",
    },
    {
      text: "Settings",
      content: "Settings go here",
    },
  ];

  return (
    <>
      <h1>Tabs component</h1>
      <div className="container">
        <div className="tabs">
          {tabs?.map((item, index) => {
            return (
              <div key={item?.text}>
                <button
                  onClick={() => {
                    setSelectTab(index);
                  }}
                  className={`tab-item ${
                    selectTab === index ? "active" : "not-active"
                  }`}
                >
                  {item?.text}
                </button>
              </div>
            );
          })}
        </div>

        <div className="contain-box">{tabs[selectTab]?.content}</div>
      </div>
    </>
  );
}

export default App;
