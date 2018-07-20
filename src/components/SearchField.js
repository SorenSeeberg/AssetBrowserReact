import React from "react";
import { COLOR_GRAY_4, COLOR_GRAY_6 } from "../themes/dark";

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
        <style jsx>{`
          .search-field {
            margin: 10px;
            padding-left: 5px;
            outline: 0;
            transition: all 0.2s ease;
            background: ${COLOR_GRAY_4};
            color: white;
            border: none;
            border-radius: 4px;
            line-height: 30px;
            font-size: 22px;
            width: 180px;
          }

          .search-field:focus,
          .search-field:hover {
            width: 300px;
          }

          .search-field::placeholder {
            color: ${COLOR_GRAY_6};
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}
