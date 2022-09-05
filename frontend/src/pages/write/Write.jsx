import "./write.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Write({author}, {number}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const post = {
    "title": {title},
    "content": {content},
    "author": {author},
    "number": {number}+1
}
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
  headers.append('Access-Control-Allow-Credentials', 'true');

  const handlePublish = ()=>{
    axios.post(`http://localhost:8000/posts/`+{author}, { post }, { headers: headers})
      .then(res => {
        console.log(res);
        console.log(res.data);
        navigate('/')
      })
  }


  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            onChange={(event)=>{setTitle(event.target.value)}}
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            onChange={(event)=>{setContent(event.target.value)}}
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit" onChange={() => handlePublish()}>
          Publish
        </button>
      </form>
    </div>
  );
}
