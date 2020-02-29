import React, { useState, useEffect } from "react"
import axios from "axios"
import "../../Styles/forms.css"
import { Link } from "react-router-dom"

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
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
      password1: "",
      password2: ""
    }
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <h2> Registration </h2>
        </div>
        <div>
          <label>Username</label>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Jack_Sparrow"
          onChange={handleChange}
        />
        <div>
          <label>Password</label>
        </div>
        <input type="password" name="password1" placeholder="**********" />
        <div>
          <label>Confirm Password</label>
        </div>
        <input type="password" name="password2" placeholder="**********" />

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
