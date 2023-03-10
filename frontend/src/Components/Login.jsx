import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", { email, password })
        .then(res => {
          if (res.data === "exist") {
            history('/home', { state: { id: email } })
            // history('/')
          }
          else if (res.data === "notexist") {
            alert("User have not sign up")
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e)
        })
    }
    catch (e) { console.log(e) }
  }

  return (
    <div>
      <h2>Login</h2>
      <form action='POST'>

        <input type="email" name='' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
        <input type="password" name='' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />

        <input type="submit" value='submit' onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup"  >SignUp </Link>

    </div>
  )
}

export default Login