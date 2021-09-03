
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Selection from '../src/pages/Selection/Selection'
import Login from "../src/pages/Login/Login";


import LandingSectionDonor from './pages/LandingSection/LandingSectionDonor/LandingSectionDonor'
import LandingSectionReceiver from './pages/LandingSection/LandingSectionReceiver/LandingSectionReceiver'

const Routing = () => {



 const donor = localStorage.getItem("donor");
    return (
      <div>
        <Router>
          <Route exact path="/selection">
            <Selection />
          </Route>
          <Route exact path="/">
       
            <Login />
          </Route>
     
          <Route exact path="/dashboard/donor">
            <LandingSectionDonor />
          </Route>
          <Route exact path="/dashboard/receiver">
            <LandingSectionReceiver />
          </Route>
          <Route></Route>
        </Router>
      </div>
    );
}

export default Routing
