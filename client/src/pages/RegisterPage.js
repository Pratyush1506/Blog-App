import React, { useState } from 'react'

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async(e) => {
    e.preventDefault(); // Use preventDefault so that we don't redirect from the current page
   const response = await fetch('http://localhost:4000/register', {
      method: 'POST', //as it is post method
      body: JSON.stringify({username, password}), // sending username and password
      headers: {'Content-Type':'application/json'}, // content type is json
    });

    if(response.status === 200){
      alert('Registration successful');
    }else{
      alert('Registration failed');
    }
  }

  return (
    <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input type="text"
               placeholder="username"
               value={username} 
               onChange={e => setUsername(e.target.value)}
        />
        <input type="password"
               placeholder="password" 
               value={password}
               onChange={e => setPassword(e.target.value)}
        />
      <button type='submit' >Register</button>
    </form>
  )
}

export default RegisterPage