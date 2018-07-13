import React from "react";
import "./style.css";

const images = [
  { name: "Image01.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image02.png", x: 4096, y: 4096, depth: 24, channels: "RBG" },
  { name: "Image03.png", x: 4096, y: 4096, depth: 8, channels: "Palette" },
  { name: "Image04.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image05.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image06.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image07.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image08.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
  { name: "Image09.png", x: 4096, y: 4096, depth: 32, channels: "RBGA" },
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

const PreviewContainer = ({ data }) => (
  <div className="preview-grid-container">
    <div className="preview-grid-image-overlay">
      <div className="preview-grid-image-infobox">{data.name}</div>
      <div className="preview-grid-image-infobox">{`[ ${data.x} x ${data.y} @ ${
        data.depth
      } bit ] ${data.channels}`}</div>
    </div>
    <img
      className="preview-grid-image"
      src="https://uploads.codesandbox.io/uploads/user/a6d53d72-2d38-4a85-a5b1-d13b3f47fda5/gItd-floor.jpg"
      alt={data.name}
    />
  </div>
);

export default class PreviewGrid extends React.Component {
  render() {
    return (
      <div className="preview-grid">
        {images.map(data => <PreviewContainer data={data} />)}
      </div>
    );
  }
}
