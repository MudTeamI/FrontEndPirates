import React, { useState, useEffect } from "react";
import axios from "axios";
import { Graph } from "react-d3-graph";

const root_x = 200;
const root_y = 200;
const multiplier = 30;

const gameData = {
    current_room_id: 1
}

const seed = [
  {
    id: 1,
    x: 0,
    y: 0,
    north: 5,
    south: 0,
    east: 0,
    west: 0
  },
  {
    id: 2,
    x: -1,
    y: 0,
    north: 6,
    south: 3,
    east: 0,
    west: 0
  },
  {
    id: 3,
    x: -1,
    y: -1,
    north: 2,
    south: 0,
    east: 0,
    west: 4
  },
  {
    id: 4,
    x: -2,
    y: -1,
    north: 1,
    south: 7,
    east: 3,
    west: 0
  },
  {
    id: 5,
    x: 0,
    y: 1,
    north: 0,
    south: 1,
    east: 0,
    west: 6
  },
  {
    id: 6,
    x: -1,
    y: 1,
    north: 0,
    south: 2,
    east: 5,
    west: 0
  },
  {
    id: 7,
    x: -2,
    y: 0,
    north: 4,
    south: 0,
    east: 0,
    west: 0
  }
];

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
  staticGraph: false,
  staticGraphWithDragAndDrop: true,
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
};

const Map = props => {
  

  console.log(props.mapData);

  const south_links = seed
    .filter(node => node.south !== 0)
    .map(link => ({ source: link.id, target: link.south }));

  const east_links = seed
    .filter(node => node.east !== 0)
    .map(link => ({ source: link.id, target: link.east }));

  const graph = {
    nodes: seed.map(node => ({
      ...node,
      x: node.x * multiplier + root_x,
      y: node.y * multiplier + root_y,
      color: node.id === gameData.current_room_id ? "green" : "gray"
    })),
    links: [...south_links, ...east_links]
  };

  return (
    <div>
      {seed ? (
        <Graph id="graph-id" data={graph} config={myConfig} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Map;
