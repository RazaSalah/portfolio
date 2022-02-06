import React from 'react';
import MyProjects from "./components/myProject/projects"

export default function ProjectPage() {
       //  obj
       const ReportCards = [
        {
          picture: "./r.png",
          link: "https://github.com/RazaSalah/Dashboard-master",
        },
        {
          picture: "./r.png",
          link: "https://github.com/RazaSalah/Movie-Website-master",
        },
        {
          picture: "./r.png",
          link: "https://github.com/RazaSalah/Today-Project-main",
        },
        {
          picture: "./r.png",
          link: "https://github.com/RazaSalah/Card-Game-Project-master",
        },
        { picture: "./r.png", link: "https://github.com/RazaSalah/project" },
      ];
  return <div>
     <div className="works">
          {ReportCards.map((ReportCards) => {
            return (
              <MyProjects
                picture={ReportCards.picture}
                link={ReportCards.link}
              />
            );
          })}
          </div> 
  </div>;
}
