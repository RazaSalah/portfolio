import React from "react";
import "./main.css";

export default function main() {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Razan Alsubaie</h1>
            <p>Front end developer</p>

            <div className="buttons">
              <button>See My Work</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src="./r.png" alt="" />
        </div>
      </div>
    </div>
  );
}
