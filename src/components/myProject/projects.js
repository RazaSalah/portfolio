import React from "react";
import "./projects.css"
export default function projects(props) {
  
  return (
  
      <div className="work__section">
        <div className="cards">
          <img src={props.picture} alt="" />
         <a href={props.link}>See Work</a>
        </div>
      </div>
    
  );
}
