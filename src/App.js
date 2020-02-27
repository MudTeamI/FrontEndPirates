import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./Components/Forms/Login"
import Registration from "./Components/Forms/Registration"
import HomePage from "./Components/HomePage"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Router>
    </div>
  )
}

export default App
