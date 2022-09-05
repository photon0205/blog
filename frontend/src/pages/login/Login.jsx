import "./login.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"



export default function Login() {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
  headers.append('Access-Control-Allow-Credentials', 'true');

  const fetchAllUsers= () => {
    axios.get('http://localhost:8000/users/', {headers: headers})
    .then(res =>{
      console.log(res.data)
    })
    .catch((error) => {
      console.log("error hui hui: " + {error})
      });
  }
  useEffect(()=>{
    fetchAllUsers();
  })
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

    const handleSubmit = async () => {

      axios.get('http://localhost:8000/users/' + {username}, {headers: headers})
      .then(res =>{
        console.log(res.data)
        const data = res.data
        if(data && data.password === password) {
          navigate("/"+{username})
        }else if (data && data.password !== password) {
          setError("wrong password")
        }else{
          setError("username not registered")
        }
      })
      .catch((error) => {
        console.log("error: " + {error})
        });
      
  }
    return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." onChange={(event)=>{setUsername(event.target.value)}} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."  onChange={(event)=>{setPassword(event.target.value)}} />
        <label>{error}</label>
        <button className="loginButton"  onClick={() => handleSubmit()}>Login</button>
      </form>
        <button className="loginRegisterButton" onClick={()=> navigate("/register")}>Register</button>
    </div>
  );
  }
