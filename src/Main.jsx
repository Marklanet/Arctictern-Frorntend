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
import Singleservice from "./pages/services/singleservice/Singleservice";
import Login from "./pages/Account/Login";
import Password from "./pages/Account/Password";
import Signup from "./pages/Account/Signup";
import Ordernow from "./pages/ordernow/Ordernow";
import Order from "./pages/user/Orders/Order";
import User from "./pages/user/User";
import Pricing from "./pages/pricing/Pricing";
import Dashboard from "./pages/user/Dashboard/Dashboard";
import Messages from "./pages/user/Messages/Messages";
import Payment from "./pages/user/Payment/Payment";
import Profile from "./pages/user/Profile/Profile";
import Reviews from "./pages/user/Reviews/Reviews";
import Support from "./pages/user/Support/Support";

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
          <Route exact path="/services/article" element={<Article />} />
          <Route exact path="/services/academic" element={<Academic />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blogs/:id" element={<Singleblog />} />
          <Route exact path="/services/:id" element={<Singleservice />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset-password" element={<Password />} />
          <Route exact path="/order-now" element={<Ordernow />} />
          <Route exact path="/pricing" element={<Pricing />} />

          <Route exact path="/user" element={<User />}>
            <Route index element={<Dashboard />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="order" element={<Order />} />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="payment" element={<Payment />} />
            <Route exact path="messages" element={<Messages />} />
            <Route exact path="reviews" element={<Reviews />} />
            <Route exact path="support" element={<Support />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
