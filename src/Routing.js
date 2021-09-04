
import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Selection from '../src/pages/Selection/Selection'
import Login from "../src/pages/Login/Login";


import LandingSectionDonor from './pages/LandingSection/LandingSectionDonor/LandingSectionDonor'
import LandingSectionReceiver from './pages/LandingSection/LandingSectionReceiver/LandingSectionReceiver'
import Details from './pages/Details/Details';
import RequestForm from './pages/ReceiverForm/ReceiverForm'
import RequestDisplayDonor from './pages/RequestDisplay/RequestDisplayDonor/RequestDisplayDonor'
import RequestDisplayReceiver from "./pages/RequestDisplay/RequestDisplayReceiver/RequestDisplayReceiver";
import Success from "./pages/Success/Success";
import RequestEdit from "./pages/RequestEdit/RequestEdit";
import UserEdit from "./pages/UserEdit/UserEdit";
import Failure from "./pages/Failure/Failure";



const Routing = () => {

const[logged,setLogged]=useState(false)
useEffect(()=>{
if (
  localStorage.getItem("user_id") != null ||
  localStorage.getItem("user_id") != undefined
) {
  setLogged(true);
}
},[])

  //  const donor = localStorage.getItem("donor");

  return (
    <div>
      <Router>
        <Route exact path="/selection">
          {logged ? <Selection /> : <Login />}
        </Route>
        <Route exact path="/">
          {!logged ? <Login /> : <Details />}
        </Route>

        <Route exact path="/donor">
          {logged ? <LandingSectionDonor /> : <Login />}
        </Route>
        <Route exact path="/receiver">
          {logged ? <LandingSectionReceiver /> : <Login />}
        </Route>

        <Route exact path="/details">
          {logged ? <Details /> : <Login />}
        </Route>
        <Route exact path="/requestform">
          {logged ? <RequestForm /> : <Login />}
        </Route>
        <Route exact path="/user/bloodrequest/:id">
          {logged ? <RequestDisplayReceiver /> : <Login />}
        </Route>
        <Route exact path="/bloodrequest/:id">
          {logged ? <RequestDisplayDonor /> : <Login />}
        </Route>
        <Route exact path="/bloodrequest/edit/:id">
          {logged ? <RequestEdit /> : <Login />}
        </Route>
        <Route exact path="/user/edit/:id">
          {logged ? <UserEdit /> : <Login />}
        </Route>
   <Route exact path="/success">
     <Success/>
        </Route>
           <Route exact path="/failure">
     <Failure/>
        </Route>
      </Router>
    </div>
  );
}

export default Routing
