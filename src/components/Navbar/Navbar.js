import React from 'react'
import './Navbar.css'
const Navbar = () => {

const user_id=localStorage.getItem("user_id")

let check;

if(user_id !=null ||user_id!=undefined){
  check=true;
}

    return (



      <div>
        <div class="nav">
          <input type="checkbox" id="nav-check"></input>
          <div class="nav-header">
            <div class="nav-title" onClick={()=>{
              
              if(localStorage.getItem("donor")=="true")
              {
                window.location = "/dashboard/donor";
              }
              else{
                window.location = "/dashboard/receiver";
              }
              }}>Bludy</div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            {localStorage.getItem("donor") == "true" ? (
              <a href="/dashboard/donor">Home</a>
            ) : (
              <a href="/dashboard/receiver">Home</a>
            )}

            <a href="/about">About</a>

            {localStorage.getItem("donor") == "true" ? null : (
              <a href="#"> Your requests</a>
            )}
            <a href="/requestform">Make a Request</a>
            {/* <a href="https://codepen.io/jo_Geek/" target="#">Codepen</a>
    <a href="https://jsfiddle.net/user/jo_Geek/" target="#">JsFiddle</a> */}

            {
              check? <a href="#">Logout</a>:null
            }



          </div>
        </div>
      </div>
    );
}

export default Navbar
