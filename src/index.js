import React from "react";
import ReactDOM from "react-dom";
import PreviewGrid from "./components/PreviewGrid";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Preview Grid</h1>
      <PreviewGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
