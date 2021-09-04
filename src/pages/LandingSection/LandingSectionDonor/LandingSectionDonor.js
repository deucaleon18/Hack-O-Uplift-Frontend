import React, { useEffect, usetate } from "react";
import axios from "axios";
import "./LandingSectionDonor.css";
import Navbar from "../../../components/Navbar/Navbar";

const LandingSectionDonor = () => {
  return (
    <>
    <Navbar/>
    <div className="Donor">
      <div className="donorLeft">
        <img src="assets/animated/blood_donation_campagin.gif" alt="" />
      </div>
      <div className="donorRight">
        <h1>Blood Donation Form</h1>
      </div>
    </div>
    </>
  );
};

export default LandingSectionDonor;

