import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState()
  useEffect(() => {
    axios
      .post("https://lambda-mud-test.herokuapp.com/")
      .then(res => setUser(res.data))
      .catch(err => setError(err.res))
  }, [])
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const handleSubmit = e => {
    e.prevent.Default()
    const newUser = {
      username: "",
      password: ""
    }
  }
  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <h2> Registration </h2>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          placeholder="UserName"
          onChange={handleChange}
        />
        <label>Password</label>
        <input type="text" name="password1" placeholder="password" />
        <input type="text" name="password2" placeholder="password" />

        <button type="submit">Register</button>
        <div>
          <div>
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Registration
