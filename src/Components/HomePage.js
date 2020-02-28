import React from "react"
import Pirate from "../Images/Capture.PNG"
import "../Styles/homepage.css"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="container">
      <img
        src={Pirate}
        alt="This is the background image to the
      homepage"
      />
      <div className="title">
        <h2>Pillage and Plunder</h2>
        <Link to="/login">
          <p>Sign In</p>
        </Link>
        <Link to="/registration">
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  )
}
export default HomePage
