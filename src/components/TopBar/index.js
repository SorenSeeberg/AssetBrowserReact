import React from "react";
import "./style.css";

export default class TopBar extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div className="top-bar">{children}</div>{" "}
        <div className="top-bar-placeholder" />
      </React.Fragment>
    );
  }
}

export const TopBarTitle = ({ text }) => (
  <div className="top-bar-title">{text}</div>
);
