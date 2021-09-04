import React, { useEffect, usetate } from "react";
import axios from "axios";
import Sawo from "sawo";
// import img_1 from "../../utils/images/blood1.jpg"
// import img_2 from "../../utils/svg/blood2.svg"
import './Selection.css'


const Selection= () => {
    return (
      <>
      <div className="selection">
        <div className="donorselect">
          <img className="selectionimage" src="assets/images/blood1.jpg" alt="" />
          <button className="donorbutton" onClick={()=>{
            localStorage.setItem("donor",true)

            window.location="/donor"
            
            }}>DONOR</button>
        </div>

        <div className="receiverselect" >
          <img className="selectionimage" src="assets/svg/blood2.svg" alt="" />

          <button className="receiverbutton" onClick={()=>{
            localStorage.setItem("donor", false);
            window.location="/receiver"
           
          
          }}>RECEIVER</button>
        </div>
      </div>
      </>
    );
}

export default Selection;
