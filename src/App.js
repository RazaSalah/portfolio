import React, { Component } from "react";
import "./App.css";
import Nav from "./layout/Nav/NavBar";
import Footer from "./layout/Footer/Footer";
import Home from "./Home"
// import MainSection from "./components/MainSection/main";
// import AboutSection from "./components/AboutSection/Aboutme";
// import ProjectSection from "./components/myProject/projects";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
 
    return (
      <>
        <Nav />
        <Home/>
        <Footer />
      </>
    );
  }
}
