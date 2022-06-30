import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/common/topbar/Topbar";
import Footer from "./components/common/footer/Footer";
import Homepage from "./pages/home/Homepage";
import Contact from "./pages/contact/Contact";
import Aboutus from "./pages/aboutus/Aboutus";
import Whyuspage from "./pages/whyuspage/Whyuspage";
import Company from "./pages/company/Company";
import Services from "./pages/services/Services";
import Article from "./pages/services/articleservices/Article";
import Academic from "./pages/services/academicservices/Academic";
import Blogs from "./pages/blog/Blogs/Blogs";
import Singleblog from "./pages/blog/singleblog/Singleblog";
import Scrolltop from "./components/scroltop/Scrolltop";

export default function Main() {
  return (
    <>
      <Router>
        <Topbar />
        <Scrolltop />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/whyus" element={<Whyuspage />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/articles" element={<Article />} />
          <Route exact path="/academics" element={<Academic />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blogs/:id" element={<Singleblog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
