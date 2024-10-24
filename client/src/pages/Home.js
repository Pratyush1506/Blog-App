import React, { useEffect, useState } from 'react'
import Post from '../components/Post/Post'


const Home = () => {

  const[posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => { // this is a get request, get request is default that's why we didn't need to define it here
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  },[]);
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post}/>
      ))}
    </>
  )
}

export default Home