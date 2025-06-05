import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CoinDetailPage from "./pages/CoinDetailPage";

import Contact from "./pages/contact";
import Team from "./pages/Team";

import Project from "./pages/project";
import Partner from "./pages/Partner";
import FAQ from "./pages/FAQ";
import Page404 from "./pages/404";
import RoadMapOne from "./pages/RoadMapOne";
import WarningModal from "./components/WarningModal";
import MouseFollower from "./components/MouseFollower";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#141A31]">
        <WarningModal />
        <MouseFollower />
        <Header />
        <div className="pt-[90px] flex-grow ">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/roadmap" element={<RoadMapOne />} />
            <Route path="/project" element={<Project />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/coin/:id" element={<CoinDetailPage />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
