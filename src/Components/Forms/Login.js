import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    axios
      .post("https://lambda-mud-test.herokuapp.com/", this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        this.props.history.push("/homepage")
      })
      .catch(error => {
        console.log("This is an error from Login", error)
      }, [])
  }
  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    })
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h2> Login </h2>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            onChange={this.handleChange}
            value={this.state.credentials.username}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.credentials.password}
          />
          <div>
            <button> Login </button>
            <div>
              <Link to="/registration">Don't have an account?</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
