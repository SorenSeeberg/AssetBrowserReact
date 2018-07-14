import React from "react";
import "./style.css";

export default class SearchField extends React.Component {
  state = {};

  render() {
    const { placeholder = "Search . . .", name = "search" } = this.props;
    return (
      <div>
        <input
          className="search-field"
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
