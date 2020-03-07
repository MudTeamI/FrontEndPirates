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
    const { password1, password2 } = register
    if (password1 !== password2) {
      console.log("password does not match")
    } else {
      axios
        .post(
          "https://pirates-backend.herokuapp.com/api/registration/",
          register
        )
        .then(res => {
          localStorage.setItem("token", res.data.key) // pass token
          props.history.push("/game")
        })
        .catch(error => {
          console.log("error from register components", error)
        }, [])
    }
  }

  const handleChange = event => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
  }

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
            onChange={handleChange}
            required
          />
        </div>
        <label> Password </label>
        <div>
          <input
            type="password"
            name="password1"
            placeholder="*********"
            value={props.password1}
            onChange={handleChange}
            required
          />
        </div>
        <label> Confirm Password </label>
        <div>
          <input
            type="password"
            name="password2"
            placeholder="*********"
            value={props.password2}
            onChange={handleChange}
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
