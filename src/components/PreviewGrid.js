import React from "react";
import {
  COLOR_ACCENT_BLUE,
  COLOR_ACCENT_BLUE_SHADOW,
  COLOR_BLACK_0,
  COLOR_BLACK_15,
  COLOR_BLACK_FULL,
  TRANSITION_TIME_0035,
  TRANSITION_TIME_0025,
  TRANSITION_TIME_0020
} from "../themes/dark";

class PreviewContainer extends React.Component {
  render() {
    const {
      data,
      selected,
      onClick,
      containerLength,
      imagesPerRow
    } = this.props;

    return (
      <React.Fragment>
        <div className={`preview-grid-container ${selected && "selected"}`}>
          <div className="preview-grid-image-overlay" onClick={onClick}>
            <div className="preview-grid-image-infobox">{data.name}</div>
            <div className="preview-grid-image-infobox">{`[ ${data.x} x ${
              data.y
            } @ ${data.depth}-bit ${data.channels}]`}</div>
          </div>
          <img
            className="preview-grid-image"
            src="https://uploads.codesandbox.io/uploads/user/a6d53d72-2d38-4a85-a5b1-d13b3f47fda5/gItd-floor.jpg"
            alt={data.name}
          />
        </div>
        <style jsx>{`
          .preview-grid-container {
            transition: background ${TRANSITION_TIME_0025} ease;
            display: flex;
            flex: 0 0 ${100 / imagesPerRow}%;
            color: black;
            background: #191919;
            height: ${containerLength}px;
            align-items: center;
            justify-content: center;
          }

          /* border-color:hover */
          .preview-grid-container:hover:not(.selected) {
            background: ${COLOR_ACCENT_BLUE_SHADOW};
          }

          /* image */
          .preview-grid-image {
            transition: all ${TRANSITION_TIME_0035} ease;
            padding: 0;
            margin: 0;
            border: none;
            width: calc(100% - 14px);
            height: calc(100% - 14px);
          }

          .preview-grid-image-overlay:hover ~ .preview-grid-image,
          div.selected > .preview-grid-image {
            width: calc(100% - 8px);
            height: calc(100% - 8px);
          }

          .preview-grid-image-infobox {
            transition: all ${TRANSITION_TIME_0035} ease;
            transition-property: height, background;
            height: 15px;
            width: ${containerLength}px;
            margin: 0;
            padding: 0;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${COLOR_ACCENT_BLUE_SHADOW};
            opacity: 0;
            font-size: 14px;
            font-weight: bold;
          }

          .preview-grid-image-overlay {
            transition: background ${TRANSITION_TIME_0020} ease;
            position: absolute;
            height: ${containerLength}px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background: ${COLOR_BLACK_15};
          }

          /* overlay:hover, select */
          .preview-grid-image-overlay:hover,
          .selected > .preview-grid-image-overlay {
            background: ${COLOR_BLACK_0};
          }

          /* info-box:selected */
          .preview-grid-image-overlay:hover > .preview-grid-image-infobox,
          div.selected
            > div.preview-grid-image-overlay
            div.preview-grid-image-infobox {
            opacity: 1;
            height: 25px;
          }

          /* border-color:selected*/
          .selected {
            background: ${COLOR_ACCENT_BLUE};
          }

          /* border-color:selected*/
          div.selected
            > div.preview-grid-image-overlay
            div.preview-grid-image-infobox {
            background: ${COLOR_ACCENT_BLUE};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default class PreviewGrid extends React.Component {
  state = {
    selection: [],
    imagesPerRow: 9,
    innerWidth: window.innerWidth,
    containerLength: 0
  };

  resize = () => this.forceUpdate();

  componentDidMount = () => {
    window.addEventListener("resize", this.resize);
    this.setState({
      selection: Array.from(
        { length: this.props.metaData.length },
        (x, i) => false
      ),
      containerLength: Math.floor(window.innerWidth / this.state.imagesPerRow),
      innerWidth: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  componentDidUpdate() {
    if (window.innerWidth !== this.state.innerWidth) {
      this.setState({
        containerLength: Math.floor(
          window.innerWidth / this.state.imagesPerRow
        ),
        innerWidth: window.innerWidth
      });
    }
  }

  handleClick = index => {
    const modifiedArray = this.state.selection;
    modifiedArray[index] = !modifiedArray[index];
    this.setState({ selection: modifiedArray });
  };

  render() {
    const { metaData } = this.props;
    const { imagesPerRow, containerLength } = this.state;

    return (
      <React.Fragment>
        <div className="preview-grid">
          {metaData.map((metaItem, i) => (
            <PreviewContainer
              data={metaItem}
              selected={this.state.selection[i]}
              key={i}
              onClick={() => this.handleClick(i)}
              imagesPerRow={imagesPerRow}
              containerLength={containerLength}
            />
          ))}
        </div>
        <style jsx>{`
          .preview-grid {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
