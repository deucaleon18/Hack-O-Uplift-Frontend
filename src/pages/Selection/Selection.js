import React, { useEffect, usetate } from "react";
import axios from "axios";
import Sawo from "sawo";
import img_1 from "../../utils/images/blood1.jpg"
import img_2 from "../../utils/svg/blood2.svg"

import './Selection.css'


const Selection= () => {
    return (
      <div className="selection">
        <div className="donorselect">
          <img className="selectionimage" src={img_1} alt="" />
          <button className="donorbutton" onClick={()=>{
            localStorage.setItem("donor",true)

            window.location="/dashboard/donor"
            
            }}>DONOR</button>
        </div>

        <div className="receiverselect" >
          <img className="selectionimage" src={img_2} alt="" />

          <button className="receiverbutton" onClick={()=>{
            localStorage.setItem("donor", false);
            window.location="/dashboard/receiver"
           
          
          }}>RECEIVER</button>
        </div>
      </div>
    );
}

export default Selection;
