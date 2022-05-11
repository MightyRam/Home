import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {toggle ? <img src={logo} className="App-logo" alt="logo" /> : null}

        <button
          className="my-button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Button
        </button>
      </header>
    </div>
  );
}

export default App;
