import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
