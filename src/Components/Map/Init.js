import React, { useState, useEffect } from "react"
import axios from "axios"

const Init = () => {
  const [init, setInit] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("key")
    axios
      .get("https://pirates-backend.herokuapp.com/api/adv/init", {
        headers: {
          Authorization: `Token ${token} `
        }
      })

      .then(res => {
        console.log(res.data)
        setInit(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(init)

  const changeHandler = event => {
    console.log(event)
    const token = localStorage.getItem("key")
    axios
      .post(
        "https://pirates-backend.herokuapp.com/api/adv/move",
        {
          direction: event
        },
        {
          headers: {
            Authorization: `Token ${token} `
          }
        }
      )
      .then(res => {
        setInit(res.data)
      })
  }

  return (
    <div>
      <p>{init.name}</p>
      <p>{init.title}</p>
      <button onClick={e => changeHandler("w")}>West</button>
      <button onClick={e => changeHandler("n")}>North</button>
      <button onClick={e => changeHandler("e")}>East</button>
      <button onClick={e => changeHandler("s")}>South</button>
    </div>
  )
}

export default Init
