import React from "react";
import "./style.css";

class PreviewContainer extends React.Component {
  render() {
    const { data, selected, onClick } = this.props;

    return (
      <div className={`preview-grid-container ${selected && "selected"}`}>
        <div className="preview-grid-image-overlay" onClick={onClick}>
          <div className="preview-grid-image-infobox">{data.name}</div>
          <div className="preview-grid-image-infobox">{`[ ${data.x} x ${
            data.y
          } @ ${data.depth} bit ] ${data.channels}`}</div>
        </div>
        <img
          className="preview-grid-image"
          src="https://uploads.codesandbox.io/uploads/user/a6d53d72-2d38-4a85-a5b1-d13b3f47fda5/gItd-floor.jpg"
          alt={data.name}
        />
      </div>
    );
  }
}

export default class PreviewGrid extends React.Component {
  state = { selection: [] };

  componentDidMount = () => {
    this.setState({
      selection: Array.from(
        { length: this.props.metaData.length },
        (x, i) => false
      )
    });
  };

  handleClick = index => {
    console.log(index);
    const modifiedArray = this.state.selection;
    modifiedArray[index] = !modifiedArray[index];
    this.setState({ selection: modifiedArray });
  };

  render() {
    const { metaData } = this.props;

    return (
      <div className="preview-grid">
        {metaData.map((metaItem, i) => (
          <PreviewContainer
            data={metaItem}
            selected={this.state.selection[i]}
            key={i}
            onClick={() => this.handleClick(i)}
          />
        ))}
      </div>
    );
  }
}
