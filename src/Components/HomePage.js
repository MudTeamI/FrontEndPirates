import React from "react"
import Pirate from "../Images/Capture.PNG"
import "../Styles/homepage.css"

const HomePage = () => {
  return (
    <div>
      {/* <h2>THIS IS OUR HOME PAGE</h2> */}
      <img
        src={Pirate}
        alt="This is the background image to the
      homepage"
      />
    </div>
  )
}
export default HomePage
