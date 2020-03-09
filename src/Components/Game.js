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
  const [gameData, setGameData] = useState({current_room_id: 2})
  const [mapData, setMapData] = useState()

  useEffect(() => {
    axios
      .get("https://pirates-backend.herokuapp.com/api/adv/rooms")
      .then(res => {
        setMapData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <GameContainer>
        <h1>Pillage and Plunder</h1>
        <InternalContainer>
          <TextBox />
          {mapData ? <Map gameData={gameData} setGameData={setGameData} mapData={mapData} /> : <div>Loading...</div>}
        </InternalContainer>
        {/* <Init gameData={gameData} setGameData={setGameData} /> */}
    </GameContainer>
  );
};
  

export default Game
