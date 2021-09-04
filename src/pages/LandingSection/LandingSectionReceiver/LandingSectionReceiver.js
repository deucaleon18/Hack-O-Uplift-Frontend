 
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./LandingSectionReceiver.css";
import Navbar from "../../../components/Navbar/Navbar";
import AppBar from "@material-ui/core/AppBar";

import Footer from "../../../components/Footer/Footer";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import Fade from "react-reveal/Fade";
const uid = localStorage.getItem("user_id");


const LandingSectionReceiver = () => {

 const[laoding,setLoading]=useState(false);
 const[requests,setRequests]=useState([])



  useEffect(()=>{

    const getUserRequests=async()=>{
   await axios.get(`/userrequests/${uid}`)

   .then((res)=>{
       console.log(res.data)
       setRequests(res.data)
   })
   .catch((err)=>{
     console.log(err)
   })
   
    }

 getUserRequests();

  },[])
  return (
    <div>
      <Fade top>
        <Navbar />
      </Fade>
      <div className="hero-section">
        <Fade left>
          <div className="hero-section-text">
            <div className="hero-section-textwrapper">
              <div className="subtitle_1">Welcome to the Bludy community</div>
              <div className="heading">Come Let's make a difference</div>
              <div className="subtitle_2">
                Your one pint of blood donation can save more than 3 lives
                everyday.So try to donate as much as you can and be a saviour.
              </div>
              <div>
                <span>
                  <InvertColorsIcon
                    style={{ color: "white", width: "85px", height: "160px" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="hero-section-image">
            {/* <img
                style={{ width: "100%", height: "100%" }}
                src={img}
                alt=""
              ></img> */}
          </div>
        </Fade>
      </div>

      <div className="user-requests">
        <div className="heading">KEEP A TRACK OF YOUR REQUESTS</div>

        <div className="request-grid">
          {requests.map((request) => {
            const { reason, uid, bloodgroup, status, city,_id } = request;
            return (
              <div className="request-box">
                <div className="request-box-image"></div>
                <div className="request-box-title"></div>

                <div className="request-box-desc">{reason}</div>
                <button className="know-more-btn"  onClick={()=>window.location=`/user/bloodrequest/${_id}`}  >KNOW MORE</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingSectionReceiver;