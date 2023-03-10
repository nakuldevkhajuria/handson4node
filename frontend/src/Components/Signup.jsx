import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const history = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/signup",{email,password})
      .then((res)=>{
        if(res.data === "exist"){
          alert("user already exists")
// 
        }
        else if(res.data === "notexist"){
          history('/home',{state:{id:email}})
                  }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }
    catch(e){console.log(e)}
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <form action='POST'>

        <input type="email" name='' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
        <input type="password" name='' onChange={(e)=>{setPassword(e.target.value)}}  placeholder='Password'/>

<input type="submit" onClick={submit} value="submit" />
      </form>
<br />
<p>OR</p>
<br />
<Link to="/" >Login</Link>

    </div>
  )
}

export default Signup