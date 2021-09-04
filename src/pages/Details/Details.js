import React, { useState, useEffect } from "react";
import "./Details.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from 'axios'
import Fab from "@material-ui/core/Fab";

  

const Details = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [blood, setBlood] = useState("");
  const [email, setEmail] = useState("");

  const [displayName, setDisplayName] = useState(true);
  const [displayEmail, setDisplayEmail] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(false);
  const [displayBlood, setDisplayBlood] = useState(false);

  
  const uid=localStorage.getItem("user_id")
 
const useStyles = makeStyles({
  textField: {
    color : "white",
    width:"80%"
  }
});

  const handleSubmit=
  // async
  
  (e)=>{
    e.preventDefault()
    //  await axios.post("/users",{
    //    name,
    //    email,
    //    address:location,
    //    blood:blood,
    //    uid
    //  })

    window.location='/selection'
  }



  const classes=useStyles()

  return (
    <div className="details">
      <div className="user-details-form">
        <div className="user-details-form-inner">
          <form onSubmit={(e) => handleSubmit(e)}>
            {displayName ? (
              <div className="detail-field">
                <TextField
                  style={{ color: "white" }}
                  className={classes.textField}
                  label="Name"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowForwardIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayName(false);
                          setDisplayEmail(true);
                        }}
                      />
                    </Fab>
                  </span>
                </div>
              </div>
            ) : null}
            {displayEmail ? (
              <div className="detail-field">
                <TextField
                  className={classes.textField}
                  label="Email-Address"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowBackIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayName(true);
                          setDisplayEmail(false);
                        }}
                      />
                    </Fab>
                  </span>
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowForwardIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayEmail(false);
                          setDisplayLocation(true);
                        }}
                      />
                    </Fab>
                  </span>
                </div>
              </div>
            ) : null}

            {displayLocation ? (
              <div className="detail-field">
                <TextField
                  className={classes.textField}
                  label="Address"
                  required
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowBackIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayEmail(true);
                          setDisplayLocation(false);
                        }}
                      />
                    </Fab>
                  </span>

                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowForwardIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayLocation(false);
                          setDisplayBlood(true);
                        }}
                      />
                    </Fab>
                  </span>
                </div>
              </div>
            ) : null}
            {displayBlood ? (
              <div className="detail-field">
                <TextField
            
                  className={classes.textField}
                  label="Blood-Type"
                  required
                  value={blood}
                  onChange={(e) => {
                    setBlood(e.target.value);
                  }}
                ></TextField>
                <div className="nav-icons">
                  <span>
                    <Fab size="small" style={{ marginRight: "10px" }}>
                      <ArrowBackIcon
                        className="icon-navigation"
                        onClick={() => {
                          setDisplayLocation(true);
                          setDisplayBlood(false);
                        }}
                      />
                    </Fab>
                  </span>

                  <button type="submit" className="submit-button-details">
                    SUBMIT
                  </button>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
