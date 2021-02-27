import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabData from "./TabData";

const Tabs = (props) => {
  const [change, setChange] = useState("");

  const changeTab = (components) => {
    setChange(() => {
      return (
        <>
          <div>
            <p>{components}</p>
          </div>
        </>
      );
    });
  };
  const db = TabData;

  return (
    <>
      <div className="App">
        <ul className="nav nav-tabs">
          {db.map((tabNames, index) => {
            return (
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  onClick={() => changeTab(tabNames.component)}
                >
                  {tabNames.tab_name}
                </a>
              </li>
            );
          })}
        </ul>
        <div>{change}</div>
      </div>
    </>
  );
};

export default Tabs;
