import React from "react"
import Pirate from "../Images/Capture.PNG"
import "../Styles/homepage.css"

const HomePage = () => {
  return (
    <div className="container">
      <img
        src={Pirate}
        alt="Pirate ship heading towards a cave"
      />
      <div className="title">
        <div>
          <h2>Pillage and Plunder</h2>
        </div>
        <div className="acontainer">
          <div className="paragraph">
            <a href="/login">Sign In</a>
          </div>
          <div className="paragraph">
            <a href="/registration">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
