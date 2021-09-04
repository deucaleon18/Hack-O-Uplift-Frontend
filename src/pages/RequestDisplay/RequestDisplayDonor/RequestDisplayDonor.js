import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import { Map, GoogleApiWrapper } from "google-maps-react";

import Navbar from '../../../components/Navbar/Navbar'
import './RequestDisplayDonor.css'

const RequestDisplayDonor = () => {
  // eslint-disable-next-line no-unused-vars
  const [request, setRequest] = useState([]);

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [blood, setBlood] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [reason, setReason] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState("");

  const { id } = useParams();
  console.log(id);

  const acceptRequest = async () => {
    // console.log("Accept");

    await axios
      .put(`/bloodrequest/edit/${id}`, {
        status: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getRequestInfo = async () => {
      await axios
        .get(`/bloodrequest/${id}`)
        .then((res) => {
          setRequest(res.data);
          setName(res.data.name);
          setContact(res.data.phno);
          setBlood(res.data.blood);
          setLine1(res.data.address.addressLine1);
          setLine2(res.data.address.addressLine2);
          setCity(res.data.address.city);
          setState(res.data.address.state);
          setReason(res.data.reason);
          setStatus(res.data.status);
          setTimeout(() => setLoading(false), 2000);

          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getRequestInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="single-request-display-Donor">
        <div className="display-left">{/* <img src=""></img> */}</div>
        <div className="display-right">
          {!loading ? (
            <div className="display-request-details">
              <h1>Name: {name}</h1>

              <h1>Contact-Number: {contact}</h1>
              <h1>Blood-Group: {blood}</h1>
              <h2>Address: {line1}</h2>
              <h2> : {line2}</h2>
              <h2>City: {city}</h2>
              <h2>State: {state}</h2>
              <p>Reason: {reason}</p>

              <button onClick={acceptRequest} className="btn">
                ACCEPT THIS REQUEST
              </button>

              {/* <h2>Status: {status?"ACCEPTED":"PENDING"}</h2> */}
            </div>
          ) : null}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default RequestDisplayDonor;

