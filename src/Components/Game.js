import React, {useEffect, useState} from "react";
import Map from "./Map/Map";
import axios from "axios";
import styled from 'styled-components';
import Init from "./Map/Init"

import TextBox from './TextBox';

const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    margin-top: 0;
  }
`

const InternalContainer = styled.div`
  display: flex;
`

const Game = () => {
  const [mapData, setMapData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("http://lambda-mud-test.herokuapp.com/api/adv/rooms/")
      .then(res => {
        setMapData(JSON.parse(res.data.rooms))
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // console.log(mapData)

  return (
    <GameContainer>
        <h1>Pillage and Plunder</h1>
        <InternalContainer>
          <TextBox />
          <Map />
        </InternalContainer>
        <Init />
    </GameContainer>
  );
};
  

export default Game
