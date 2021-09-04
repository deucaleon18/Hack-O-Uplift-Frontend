import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RequestEdit = () => {
    
    const[request,setRequest]=useState([])


    const{id}=useParams()

    useEffect(()=>{

     const getUserRequest=async()=>{
       await axios.get(`/bloodrequest/${id}`)
       .then((res)=>{
           console.log(res)
       })
       .catch((err)=>{
           console.log(err)
       })

 

     }
      getUserRequest();
    })




    return (
        <div>
                    welcome to the single request page 
                    
        </div>
    )
}

export default RequestEdit
