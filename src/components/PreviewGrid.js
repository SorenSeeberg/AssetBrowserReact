import React from 'react';
import { PreviewContext } from '../index';
import PreviewContainer from './PreviewContainer';

const previewSize = length => {
  let newClass = '';
  if (length < 160) {
    newClass = 'small';
  } else if (length < 200) {
    newClass = 'medium';
  } else if (length < 250) {
    newClass = 'normal';
  } else if (length < 320) {
    newClass = 'large';
  } else {
    newClass = 'xlarge';
  }
  return newClass;
};

const SCROLLBAR_WIDTH = 20;

export default class PreviewGrid extends React.Component {
  state = {
    selection: [],
    imagesPerRow: 3,
    innerWidth: document.body.clientWidth,
    containerLength: 0,
    previewSize: 'small'
  };

  resize = () => this.forceUpdate();

  handlePreviewSizeChange = length => {
    const size = previewSize(length);
    if (size !== this.state.previewSize) {
      this.setState({ previewSize: size });
    }
  };

  documentWidth = () => {
    return document.body.clientWidth - SCROLLBAR_WIDTH;
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.resize);
    this.setState({
      selection: Array.from(
        { length: this.props.previewCount },
        (x, i) => false
      ),
      containerLength: Math.floor(
        this.documentWidth() / this.state.imagesPerRow
      ),
      innerWidth: this.documentWidth()
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    if (this.documentWidth() !== this.state.innerWidth) {
      const newLength = Math.floor(
        this.documentWidth() / this.state.imagesPerRow
      );
      this.setState({
        containerLength: newLength,
        innerWidth: this.documentWidth()
      });
      this.handlePreviewSizeChange(newLength);
    }
  }

  handleClick = index => {
    const modifiedArray = this.state.selection;
    modifiedArray[index] = !modifiedArray[index];
    this.setState({ selection: modifiedArray });
  };

  render() {
    const { imagesPerRow, containerLength } = this.state;

    return (
      <React.Fragment>
        <PreviewContext.Consumer>
          {context => (
            <div className="preview-grid">
              {context.metaData.map((metaItem, i) => (
                <PreviewContainer
                  data={metaItem}
                  selected={this.state.selection[i]}
                  key={i}
                  onClick={() => this.handleClick(i)}
                  imagesPerRow={imagesPerRow}
                  length={containerLength}
                  previewSize={this.state.previewSize}
                />
              ))}
            </div>
          )}
        </PreviewContext.Consumer>
        <style jsx>{`
          .preview-grid {
            display: flex;
            flex-wrap: wrap;
            overflow-y: auto;
            height: calc(100vh - 80px);
          }
        `}</style>
      </React.Fragment>
    );
  }
}
