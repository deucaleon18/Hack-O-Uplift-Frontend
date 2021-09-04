
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Selection from '../src/pages/Selection/Selection'
import Login from "../src/pages/Login/Login";


import LandingSectionDonor from './pages/LandingSection/LandingSectionDonor/LandingSectionDonor'
import LandingSectionReceiver from './pages/LandingSection/LandingSectionReceiver/LandingSectionReceiver'
import Details from './pages/Details/Details';
import RequestForm from './pages/ReceiverForm/ReceiverForm'
const Routing = () => {



//  const donor = localStorage.getItem("donor");

    return (
      <div>
        <Router>
          <Route exact path="/selection">
            <Selection />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/donor">
            <LandingSectionDonor />
          </Route>
          <Route exact path="/receiver">
            <LandingSectionReceiver />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route exact path="/requestform">
            <RequestForm/>
          </Route>
        </Router>
      </div>
    );
}

export default Routing
