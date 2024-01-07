import React from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Stack from "./Components/Stack";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Stack />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
