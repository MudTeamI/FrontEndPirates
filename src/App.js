import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./Components/Forms/Login"
import Registration from "./Components/Forms/Registration"

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </div>
  )
}

export default App
