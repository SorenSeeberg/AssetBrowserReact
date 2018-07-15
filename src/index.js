import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./components/TopBar";
import { TopBarTitle } from "./components/TopBar";
import PreviewGrid from "./components/PreviewGrid";
import SearchBar from "./components/SearchField";
import "./styles.css";

const tags = {};

const metaData = [
  {
    name: "wall_old_stone_001.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "wall", "tiling"]
  },
  {
    name: "wall_old_stone_002.png",
    x: 4096,
    y: 4096,
    depth: 24,
    channels: "RBG",
    tags: ["texture", "wall"]
  },
  {
    name: "wall_old_stone_003.png",
    x: 4096,
    y: 4096,
    depth: 8,
    channels: "Palette",
    tags: ["texture", "wall"]
  },
  {
    name: "floor_broken_tiles_001.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "floor", "tiles", "weathered"]
  },
  {
    name: "floor_broken_tiles_002.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "floor", "tiles", "weathered"]
  },
  {
    name: "floor_broken_tiles_003.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "floor", "tiles", "cracked"]
  },
  {
    name: "floor_tiles_001.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "floor", "tiles"]
  },
  {
    name: "floor_tiles_002.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "floor", "tiles"]
  },
  {
    name: "floor_tiles_003.png",
    x: 4096,
    y: 4096,
    depth: 32,
    channels: "RBGA",
    tags: ["texture", "floor", "tiles"]
  },
  { name: "Image10.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image11.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image12.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image13.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image14.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image15.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image16.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image17.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image18.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image19.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image20.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image21.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image22.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" }
];

function App() {
  return (
    <div className="App">
      <TopBar>
        <TopBarTitle text={"Asset Browser"} />
        <SearchBar placeholder={"Asset Search . . ."} />
      </TopBar>
      <PreviewGrid metaData={metaData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
