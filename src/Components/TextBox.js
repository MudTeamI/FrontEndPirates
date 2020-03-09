import React from 'react';
import styled from 'styled-components';

import Init from "./Map/Init"

const BoxStyle = styled.div`
    border: 5px solid black;
    height: 404px;
    margin-right: 50px;
    font-family: monospace;
    padding: 20px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #D8C9AC;
`

const TextBox = props => {
    return(
        <BoxStyle>
            <p>You're a pirate, sailing the high sees! How much treasure will you plunder? What kinds of places will you explore? What curious creatures will you come across?</p>
            <p>Rope's end long clothes six pounders carouser square-rigged boom jib coffer bilge aye Pirate Round plunder Davy Jones' Locker lad keel. Haul wind weigh anchor blow the man down long boat gabion cog man-of-war.</p>
            <p>Boom aft tackle bucko Davy Jones' Locker brigantine Gold Road hempen halter hogshead gangway Letter of Marque yawl marooned lugsail chase. Walk the plank salmagundi lookout plunder six pounders schooner carouser fluke main sheet barkadeer prow ahoy mutiny gabion jury mast.</p>

            <Init gameData={props.gameData} setGameData={props.setGameData} />

        </BoxStyle>
    )
}

export default TextBox;