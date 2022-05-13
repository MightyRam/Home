import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const HomePage = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (toggle === true) {
      toast.success("ToggleOn");
    } else {
      toast.warn("ToggleOff");
    }
  });

  return (
    <>
      {toggle ? <img src={logo} className="App-logo" alt="logo" /> : null}

      <button
        className="my-button"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
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
    </>
  );
};
