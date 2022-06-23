import React from "react";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <div className="container">
      <img
        className="sheepimg"
        src="https://www.ciwf.eu/media/7430330/sheep-closeup-eating-grass.jpg?anchor=center&mode=crop&width=730&height=400&format=webp&rnd=131364863080000000"
        alt="sheep-eating"
      />
      <h1>Contact Us</h1>
      <form>
        <div>
          <label for="fullName">Full Name</label>
        </div>
        <div>
          <input id="fullName" type="text" />
        </div>
        <div>
          <label for="email">Email</label>
        </div>
        <div>
          <input id="email" type="email" />
        </div>
        <div>
          <label for="subject">Subject</label>
        </div>
        <div>
          <select id="subject">
            <option>Info about sheep</option>
            <option>You want to buy sheep</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label for="msg">Message</label>
        </div>
        <div>
          <textarea id="msg" rows="6"></textarea>
        </div>
        <div>
          <input type="submit" value="Send Mail" />
        </div>
      </form>
    </div>
  );
};
