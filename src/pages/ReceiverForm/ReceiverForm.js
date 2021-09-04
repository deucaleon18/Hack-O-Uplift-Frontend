import React, { useEffect, usetate } from "react";
import axios from "axios";
import "./ReceiverForm.css";

const ReceiverForm = () => {
  return (
    <>
      <div className="Receiver">
        <div className="receiverLeft">
          <img src="assets/images/blood_donation.png" alt="" />
        </div>
        <div className="receiverRight">
          <div className="FormWrapper">
            <h1>Blood Request Form</h1>
            <div className="Form">
              <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" />
                </label>
                <label>
                  Blood Group:
                  <input type="text" name="group" />
                </label>
                <label>
                  Address:
                  <input type="text" name="address" />
                </label>
                <label>
                  Pincode:
                  <input type="text" name="pin" />
                </label>
              </form>
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiverForm;
