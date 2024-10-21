import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';


const Header = () => {

  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch( 'http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then( userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  // this will run everytime we mount this (Header) componenet

  const logout = () => {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
        <Link to="/" className="logo">MyLogo</Link>
        <nav>
          {username && (
            <>
              <Link to='/create'>Create new post</Link>
              <a onClick={logout} href="/">Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
    </header>
  )
}

export default Header