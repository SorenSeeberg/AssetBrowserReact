import React from 'react';

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
