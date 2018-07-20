import React from 'react';
import {
  COLOR_ACCENT_BLUE,
  COLOR_ACCENT_BLUE_SHADOW,
  COLOR_BLACK_0,
  COLOR_BLACK_35,
  COLOR_GRAY_3,
  TRANSITION_TIME_0035,
  TRANSITION_TIME_0025,
  TRANSITION_TIME_0020
} from '../themes/dark';
import { MQ_VIEW_MEDIUM, MQ_VIEW_SMALL } from '../themes/mediaQueries';

const Category = ({ tag }) => (
  <React.Fragment>
    <div />
  </React.Fragment>
);

class Categories extends React.Component {
  render() {
    const { tags } = this.props;

    return (
      <React.Fragment>
        <div />
      </React.Fragment>
    );
  }
}

export class CategoryOverview extends React.Component {
  render() {
    const { tags } = this.props;

    return (
      <React.Fragment>
        <Categories tags={tags} />
      </React.Fragment>
    );
  }
}
