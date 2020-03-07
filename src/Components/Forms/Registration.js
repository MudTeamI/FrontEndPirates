import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../../Styles/forms.css"

function Register(props) {
  const [register, setRegister] = useState({
    username: "",
    password1: "",
    password2: ""
  })

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post("https://pirates-backend.herokuapp.com/api/registration/", register)
      .then(res => {
        console.log("res from post() on registertion component", res)
        localStorage.setItem("key", res.data.key)
        props.history.push("/login")
      })
      .catch(error => {
        console.log("error from register components", error)
      }, [])
  }

  const handleChange = user => event => {
    console.log(event)
    setRegister({
      ...register,
      [user]: event.target.value
    })
  }
  console.log(register)
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h2> Registration</h2>
        <label> Username </label>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Captain_Morgan"
            value={props.username}
            onChange={handleChange("username")}
            required
          />
        </div>
        <label> Password </label>
        <div>
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={props.password1}
            onChange={handleChange("password1")}
            required
          />
        </div>
        <label> Confirm Password </label>
        <div>
          <input
            type="password"
            name="password"
            placeholder="*********"
            value={props.password2}
            onChange={handleChange("password2")}
            required
          />
        </div>
        <div>
          <button type="submit"> Register </button>
        </div>
        <div>
          <Link to="/login"> Already have an account? </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
