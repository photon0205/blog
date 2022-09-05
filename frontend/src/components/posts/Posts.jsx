import Post from "../post/Post";
import "./posts.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Posts() {
  const [post,setPost]=useState([])
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

  const fetchAllPosts= () => {
    axios.get('http://127.0.0.1:8000/posts/', {headers: headers})
      .then(res => {
        console.log(res);
        const data = res.data;
        console.log(data);
        setPost(data)
      })
  }

  useEffect(()=>{
    fetchAllPosts();
  },[])
  
  return (
    <div className="posts">
    {post ? 
    <div className="post">
    {post.map((e)=>{
      return (
        <Post title={e.title} content={e.content} author={e.author}/>
      )
    })}
    </div> : <div>Loading</div> }
    </div>
  );
}