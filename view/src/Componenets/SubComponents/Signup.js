import React, { useState } from "react";
import "../../CSS/Signup.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate, Router  } from 'react-router-dom'

export default function SignUp() {
  function validate() {
    var x = document.getElementById("password").value;
    var y = document.getElementById("password2").value;
    if (x === y) {
      document.getElementById("errors").innerText = "";
      document.getElementById("submitbutton").disabled = false;
      return;
    } else {
      document.getElementById("errors").innerText = "*Passwords Not Matched";
      document.getElementById("submitbutton").disabled = true;
    }
  }
  function noti() {
    document.getElementById("noti").style.display = "flex";
    document.getElementById("noti").innerText =
      "*Password must include 8 letters";
  }
  function notierase() {
    document.getElementById("noti").innerText = "";
    document.getElementById("noti").style.display = "none";
  }
  function matching() {
    if (
      document
        .getElementById("email")
        .value.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
        
    ) {
      document.getElementById("submitbutton").disabled = false;
      return;
    } else {
      document.getElementById("errors").innerText = "*Incorrect Email";
      document.getElementById("submitbutton").disabled = true;
    }
  }
  function formvalidation() {
    if (validateonsubmi() && matchingonsubmit()) {
      return;
    } else {
      alert("Entries not filled correctly");
    }

    function validateonsubmi() {
      var x = document.getElementById("password").value;
      var y = document.getElementById("password2").value;
      if (x === y) {
        document.getElementById("errors").innerText = "";
        return 1;
      } else {
        return 0;
      }
    }

    function matchingonsubmit() {
      if (
        document
          .getElementById("email")
          .value.match(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          )
      ) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  const history=useNavigate();
  const[userRegister, setUserRegister]=useState({
    name:"",
    email:"",
    password:""
  });
  const handleInput=(e)=>
  {
    e.preventDefault();
    const {name,value}=e.target;
    setUserRegister({...userRegister,[name]:value});

  };
  const signup= ()=>
  {
    const {name,email,password}=userRegister;
    if(name && email && password)
    {
      axios.post('http://localhost:4000/Signup',userRegister).then((res)=>
      {
        if(res.data==="created")
        {
          alert("User Created");
         
          window.location.href='/login';
        }
        else{
          alert("Invalid Credentails")
        }
       

      })
    }
    else{
      alert("Invalid Input");
    }
  }

  return (
    <>
      <form method="GET">
        <div className="maincontainer">
          <div className="heading">
            <h1>SIGN UP</h1>
          </div>
          <div className="inputs">
            <label>Name</label>
            <input
              name="name"
              type="text"
              required
              value={userRegister.name}
              onChange={handleInput}
            />
          </div>
          <div className="inputs">
            <label>Email</label>
            <input
              name="email"
              id="email"
              type="email"
              onBlur={matching}
              required
              value={userRegister.email}
              onChange={handleInput}
              
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              name="password"
              id="password"
              type="password"
              onFocus={noti}
              onBlur={notierase}
              required
              value={userRegister.password}
              onChange={handleInput}
            />
          </div>
          <p id="noti"></p>
          <div className="inputs">
            <label>Confirm Password</label>
            <input
              name="password2"
              id="password2"
              type="password"
              onBlur={validate}
              required
              onChange={handleInput}
            />
          </div>
         
          <p Id="errors"></p>
          <input id="submitbutton" type="submit" onClick={signup} />

          <Link to="/Login" className="loginredirect">
            Already a User?
          </Link>
        </div>
      </form>
    </>
  );
}