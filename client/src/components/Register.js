import React, { useState } from 'react'
import { axiosWithoutAuth } from '../utils/axiosUtils';

function Register(props) {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChanges = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    })
  };

    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('Thank you for registering. Please login to your new account.'))
    axiosWithoutAuth()
      .post('/api/auth/register', userCredentials)
      .then(res => {
        console.log(res.data)
        props.history.push("/login")
      })
      .catch(err => {
        return err.response
      })
    resetForm();
  }

  const resetForm = () => {
    setUserCredentials({
      username: '',
      password: ''
    })
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <hr />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userCredentials.username}
          onChange={handleChanges}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userCredentials.password}
          onChange={handleChanges}
          required
        />
        <button className="addBtn btn" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register;