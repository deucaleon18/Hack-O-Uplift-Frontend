import React, { useEffect, useState } from "react";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { DeleteRounded } from "@material-ui/icons";
import Navbar from '../../../components/Navbar/Navbar'
import RequestEdit from '../../RequestEdit/RequestEdit'

import './RequestDisplayReceiver.css'

 const RequestDisplayReceiver = () => {
   // eslint-disable-next-line no-unused-vars
   const [edit, setEdit] = useState(false);
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
   const [status, setStatus] = useState("");

   const { id } = useParams();
   console.log(id);

   const deleteRequest = async () => {
     await axios
       .get(`/bloodrequest/delete/${id}`)
       .then(() => {
         console.log("success");
         window.location = "/receiver";
       })
       .catch((err) => {
         console.log(err);
       });
   };

   // const handleUpdate=async()=>{

   // }

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

           console.log(res);
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
       <div className="single-request-display-receiver">
         <div className="display-left">{/* <img src=""></img> */}</div>
         <div className="display-right">
           <div className="icons">
             <Fab small>
               <EditIcon onClick={() => setEdit(true)} />
             </Fab>
             <Fab small onClick={deleteRequest}>
               <DeleteIcon />
             </Fab>
             {edit ? (
               <RequestEdit id={id} setEdit={setEdit} />
             ) : !loading ? (
               <div className="display-request-details">
                 <h1>Name: {name}</h1>

                 <h1>Contact-Number: {contact}</h1>
                 <h1>Blood-Group: {blood}</h1>
                 <h2>Address: {line1}</h2>
                 <h2> : {line2}</h2>
                 <h2>City: {city}</h2>
                 <h2>State: {state}</h2>
                 <h2>Reason: {reason}</h2>
                 <h2>Status: {status ? "ACCEPTED" : "PENDING"}</h2>
               </div>
             ) : null}
           </div>
         </div>
       </div>
     </>
   );
 };

export default RequestDisplayReceiver;
