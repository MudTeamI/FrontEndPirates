import React, {useEffect, useState} from "react";
import Map from "./Map/Map";
import axios from "axios";

const Game = () => {
  const [mapData, setMapData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://lambda-mud-test.herokuapp.com/api/adv/rooms/')
        .then(res => {
            setMapData(JSON.parse(res.data.rooms))
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
  }, []);

  console.log(mapData)

  return (
    <div>
        {mapData ? <Map mapData={mapData} /> : <div>Loading...</div>}
    </div>
  );
};

export default Game;
