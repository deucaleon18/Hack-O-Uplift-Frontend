import React, { useEffect, usetate } from "react";
import axios from "axios";
import "./LandingSectionDonor.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const LandingSectionDonor = () => {
  return (
    <>
      <Navbar />
      <div className="Donor">
        <div className="donorLeft">
          <img src="assets/animated/blood_donation_campagin.gif" alt="" />
        </div>
        <div className="donorRight">
          <div className="wrapper">
            <div className="subtitle_1">Welcome to the Bludy community</div>
            <div className="heading">Come Let's make a difference</div>
            <div className="subtitle_2">
              Your one pint of blood donation can save more than 3 lives
              everyday.So try to donate as much as you can and be a saviour.
            </div>
            {/* <button className="butn">Schedule your donation</button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingSectionDonor;
