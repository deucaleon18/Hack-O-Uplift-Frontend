import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LandingSectionDonor.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const LandingSectionDonor = () => {

 const[requests,setRequests]=useState([])
 const uid=localStorage.getItem("user_id")
 useEffect(()=>{
   const findDonorRequests = async () => {
     await axios
       .get(`/donor/${uid}`)

       .then((res) => {
         console.log(res);

         setRequests(res.data);
       })

       .catch((err) => {
         console.log(err);
       });
   };

   findDonorRequests();

   // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])



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
              You can save someone's life today.Check for the available requests in your Donor dashboard.
            </div>
            {/* <button className="butn">Schedule your donation</button> */}
          </div>
        </div>
      </div>


      <div className="donor-requests" id="donor-requests">
        <div className="heading">DONATE NOW</div>

        <div className="request-grid">



          {requests.map((request) => {
            // eslint-disable-next-line no-unused-vars
            const { reason, uid, bloodgroup, status, city, _id } = request;
            return (
              <div className="request-box">
                <div className="request-box-image"></div>
                <div className="request-box-title"></div>

                <div className="request-box-desc">{reason}</div>
                <button
                  className="know-more-btn"
                  onClick={() => (window.location = `/bloodrequest/${_id}`)}
                >
                  KNOW MORE
                </button>
              </div>
            );
          })}



        </div>
      </div>






      <Footer />
    </>
  );
};

export default LandingSectionDonor;
