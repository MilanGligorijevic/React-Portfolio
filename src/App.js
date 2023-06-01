import React from "react";
import { Routes, Route } from "react-router-dom";

import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>  
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
    </div>
  );
}

export default App;
