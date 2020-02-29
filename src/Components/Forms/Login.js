import React from "react"
import axios from "axios"
import "../../Styles/forms.css"
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
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2> Login </h2>
          </div>
          <div>
            <label>Username</label>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Captain_Morgan"
            onChange={this.handleChange}
            value={this.state.credentials.username}
          />
          <div>
            <label>Password</label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="**********"
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
