import { useState } from "react";
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Landing from "./Landing";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import Terms_N_Conditions from "./Pages/TNC/Tnc";
import Privacy from "./Pages/PrivacyPolicy/Privacy";
import Cancellation from "./Pages/Cancellation/Cancellation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Landing />} />
          <Route path="/termsandconditions" element={<Terms_N_Conditions />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/cancellation" element={<Cancellation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
