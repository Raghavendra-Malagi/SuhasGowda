import React, { useState } from "react";
import { values } from "../constants/constants";

import "./Navigation.css";
const Navigation = () => {
  const [activeId, setActiveId] = useState();
  return (
    <>
      <div className="navigation">
        <ul>
          {values.map((val) => {
            return (
              <li key={val.id}>
                <a
                  href={`#${val.text}`}
                  onClick={() => setActiveId(val.id)}
                  className={activeId === val.id ? "active" : "inactive"}
                >
                  {val.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Navigation;
