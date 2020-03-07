import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./Components/Forms/Login"
import Registration from "./Components/Forms/Registration"
import HomePage from "./Components/HomePage"
import Map from "./Components/Map/Map"
import Game from "./Components/Game"
import Init from "./Components/Map/Init"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/roommap" component={Game} />
        <Route path="/init" component={Init} />
      </Router>
    </div>
  )
}

export default App
