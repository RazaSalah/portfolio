import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="top-section">
        <div className="left">
          <p className="about__subheading">
            Hi, I am <span>Razan Alsubaie</span>
          </p>
          <h2 className="about__heading">A Frontend developer</h2>
          <div className="about__info">
            <p className="aboutme">
              Fresh graduate Computer Information System from Imam Abdulrahman
              Bin Faisal University. Always strive to learn more and gain new
              skills .the rapid ability to work with teams to come up with
              creative ideas . Passionate about analyzing , improving ,and
              designing systems.
              <br /> <br />
              It is time for us to create more good stuff that helps the world
              to become a better place.
            </p>
          </div>
          <button className="buttons">Download CV</button>
        </div>
        <div className="right">
          <img src="./r.png" alt="me" />
        </div>
      </div>
    </div>
  );
}
