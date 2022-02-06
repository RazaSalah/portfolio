import React from 'react';
import MainSection from "./components/MainSection/main";
import AboutSection from "./components/AboutSection/Aboutme";
import ProjectSection from "./components/myProject/projects";

export default function Home() {
       //  obj
       const Cards = [
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
  return(
    <>
     
     <MainSection />
        <AboutSection />
        <div className="works">
          {Cards.map((Cards) => {
            return (
              <ProjectSection
                picture={Cards.picture}
                link={Cards.link}
              />
            );
          })}
          </div>
    </>);
}
