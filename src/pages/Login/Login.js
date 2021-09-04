import React, { useEffect, usetate } from "react";
import axios from "axios";
import Sawo from "sawo";

const Login = () => {
  useEffect(() => {

    console.log(process.env.REACT_APP_SAWO_KEY);
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "login-form-sawo",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key copied from 2nd step
      apiKey: process.env.REACT_APP_SAWO_KEY,
      // Add a callback here to handle the payload sent by sdk
      onSuccess: async(payload) => {
        console.log(payload);
        localStorage.setItem("user_id", payload.user_id);
        localStorage.setItem("identifier", payload.identifier);

        await axios.get(`/sawo/${payload.user_id}`)
        .then((res)=>{
           console.log(res)
           console.log(res.data.check)
           if(res.data.check=="true"){
             window.location="/selection"
           }
              else if(res.data.check == "false") {
                window.location = "/details";
              }

        })
        .catch((err)=>{
          console.log(err)
        })
        
      
      },
    };

    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
  
    <div
      id="login-form-sawo"
      style={{
        marginTop: "10px",
        marginLeft: "500px",
        height: "90vh",
        width: "80vh",
      }}
    ></div>
  );
};

export default Login;
