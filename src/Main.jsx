import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/common/topbar/Topbar";
import Footer from "./components/common/footer/Footer";
import Homepage from "./pages/home/Homepage";
import Contact from "./pages/contact/Contact";
import Aboutus from "./pages/aboutus/Aboutus";

export default function Main() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
