import "./register.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const user =  {
    "username": {username},
    "password": {password},
    "name": {name}
}

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
  headers.append('Access-Control-Allow-Credentials', 'true');

  const handleSubmit = ()=>{
    axios.post(`http://localhost:8000/users/`, { user }, { headers: headers})
      .then(res => {
        console.log(res);
        console.log(res.data);
        navigate('/')
      })
  }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(event)=>{setUsername(event.target.value)}}/>
        <label>Name</label>
        <input className="registerInput" type="text" placeholder="Enter your name..." onChange={(event)=>{setName(event.target.value)}}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={(event)=>{setPassword(event.target.value)}}/>
        <button className="registerButton" onClick={() => handleSubmit()}>Register</button>
      </form>
        <button className="registerLoginButton" onClick={()=> navigate("/login")}>Login</button>
    </div>
    )
}
