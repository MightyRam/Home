import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (toggle === true) {
      toast.success("ToggleOn");
    } else {
      toast.warn("ToggleOff");
    }
  });

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
        <div>
          <Button
            color="danger"
            href="https://www.youtube.com/watch?v=-EjWbb8aYpI"
            target="_blank"
            rel="noreferrer noopener"
          >
            Don't touch
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              alert("Hello! Have nice day :)");
            }}
          >
            Hello
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/MightyRam"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </Button>
        </div>
      </header>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
