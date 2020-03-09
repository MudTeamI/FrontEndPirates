import React, { useState, useEffect } from "react";
import axios from "axios";
import { Graph } from "react-d3-graph";
import styled from 'styled-components';

const StyledMap = styled.div`
  border: 5px solid black;
  background-color: dodgerblue;
`
const root_x = 50;
const root_y = 50;
const multiplier = 30;


const myConfig = {
  automaticRearrangeAfterDropNode: true,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: false,
  maxZoom: 8,
  minZoom: 0.1,
  nodeHighlightBehavior: false,
  panAndZoom: false,
  staticGraph: true,
  staticGraphWithDragAndDrop: false,
  width: 400,
  d3: {
    alphaTarget: [-10, 10],
    gravity: -400,
    linkLength: 100,
    linkStrength: 1
  },
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "SAME",
    highlightFontSize: 12,
    highlightFontWeight: "bold",
    highlightStrokeColor: "blue",
    highlightStrokeWidth: "SAME",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: false,
    size: 100,
    strokeColor: "none",
    strokeWidth: 2,
    svg: "",
    symbolType: "triangle"
  },
  link: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 12,
    fontWeight: "normal",
    highlightColor: "white",
    highlightFontSize: 8,
    highlightFontWeight: "normal",
    labelProperty: "label",
    mouseCursor: "pointer",
    opacity: 1,
    renderLabel: true,
    semanticStrokeWidth: true,
    strokeWidth: 1.5
  }
}

const Map = props => {

  

  console.log(props.mapData)

  const south_links = props.mapData.rooms
    .filter(node => node.s !== 0)
    .map(link => ({ source: link.id, target: link.s }))

  const east_links = props.mapData.rooms
    .filter(node => node.e !== 0)
    .map(link => ({ source: link.id, target: link.e }))

  const graph = {
    nodes: props.mapData.rooms.map(node => ({
      ...node,
      x: node.x * multiplier + root_x,
      y: node.y * multiplier + root_y,
      color: node.id === props.gameData.current_room_id ? "green" : "gray",
      symbolType: node.id === props.gameData.current_room_id ? "triangle" : "circle",
      size: node.id === props.gameData.current_room_id ? "350" : "50",
      svg: node.id === props.gameData.current_room_id ? 'https://www.svgrepo.com/show/275524/pirate-ship.svg' : null
    })),
    links: [...south_links, ...east_links]
  }

  return (
    <StyledMap>
      {props.mapData.rooms ? (
        <Graph id="graph-id" data={graph} config={myConfig} />
      ) : (
        <div>Loading...</div>
      )}
    </StyledMap>
  );
};

export default Map
