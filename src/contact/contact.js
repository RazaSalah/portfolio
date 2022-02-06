import React from "react";
import "./contact.css";



export default function contact() {
  return (
    <div className="contact">
      <div className="inputs">
        <h1>Contact me</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" className="message" />
        <button>Send</button>
      </div>
    </div>
  );
}
