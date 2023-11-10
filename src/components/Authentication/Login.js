import React, { useState } from 'react'
import axios from "axios";
import "./Login.css";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
const submitHandler = () => {
    axios.post('https://fakestoreapi.com/auth/login',{
        "username": JSON.stringify(userName),
        "password": JSON.stringify(password)
    }).then(res => console.log(res) );
}
  return (
    <div className='login'>
        <form onSubmit={submitHandler} className='form'>
         <label htmlFor="email">UserName</label><br></br>
          <input type="text" id="email" value={userName} onChange={(e) => setUserName
            (e.target.value)} required />
         <label htmlFor="password">Password</label><br></br>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
          <div className='btn'>
          <button>Login</button>
          </div>
          
        </form>
    </div>
  )
}

export default Login;