import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/About";

import Contact from "./pages/contact";
import Team from "./pages/team";

import Project from "./pages/project";
import Partner from "./pages/partner";
import FAQ from "./pages/faq";
import Page404 from "./pages/404";
import RoadMapOne from "./pages/RoadMapOne";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#141A31]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/roadmap" element={<RoadMapOne />} />
          <Route path="/project" element={<Project />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
