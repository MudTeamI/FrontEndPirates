import React, { useState } from "react"
import Axios from "axios"
import "../../Styles/forms.css"

const Login = ({ history }) => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  })
  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    Axios.post("https://pirates-backend.herokuapp.com/api/login/", creds)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.key)
        history.push("/roommap")
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h2> Sign In </h2>
        <label> Username </label>
        <div>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="Jack_Sparrow"
            onChange={handleChange}
            value={creds.username}
          />
        </div>
        <label> Password </label>
        <div>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="*********"
            onChange={handleChange}
            value={creds.password}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login
