
import React from "react"; 
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
