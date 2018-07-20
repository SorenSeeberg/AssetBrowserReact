import React from "react";
import { COLOR_GRAY_3, COLOR_GRAY_6 } from "../themes/dark";

export default class TopBar extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div className="top-bar">{children}</div>{" "}
        <div className="top-bar-placeholder" />
        <style jsx>{`
          .top-bar {
            position: fixed;
            display: flex;
            flex-direction: row;
            height: 50px;
            width: 100%;
            background: ${COLOR_GRAY_3};
            align-items: center;
            justify-content: left;
            z-index: 100;
          }

          .top-bar-placeholder {
            height: 50px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export const TopBarTitle = ({ text }) => (
  <div className="top-bar-title">
    {text}
    <style jsx>{`
      .top-bar-title {
        font-size: 20px;
        padding-left: 10px;
      }
    `}</style>
  </div>
);
