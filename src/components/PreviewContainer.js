import React from 'react';
import { darken, tint } from '../util/color';
import {
  COLOR_ACCENT_BLUE,
  COLOR_ACCENT_BLUE_SHADOW,
  COLOR_BLACK_0,
  COLOR_BLACK_35,
  COLOR_GRAY_3,
  COLOR_GRAY_4,
  COLOR_GRAY_6,
  COLOR_GRAY_9,
  TRANSITION_TIME_0035,
  TRANSITION_TIME_0025,
  TRANSITION_TIME_0020
} from '../themes/dark';

const size = {
  small: { fontSize: '8px', height: '10px', barHeight: '2px' },
  medium: { fontSize: '10px', height: '12px', barHeight: '3px' },
  normal: { fontSize: '12px', height: '15px', barHeight: '4px' },
  large: { fontSize: '14px', height: '18px', barHeight: '5px' },
  xlarge: { fontSize: '20px', height: '24px', barHeight: '6px' }
};

const typeColors = {
  texture: COLOR_ACCENT_BLUE_SHADOW
};

export default class PreviewContainer extends React.Component {
  render() {
    const {
      data,
      selected,
      onClick,
      length,
      previewSize = 'small',
      imagesPerRow
    } = this.props;

    return (
      <React.Fragment>
        <div
          className={`container ${selected && 'selected'}`}
          onClick={onClick}
        >
          <div className={`infobox`}>{data.name}</div>
          <img
            className="image"
            src="https://uploads.codesandbox.io/uploads/user/a6d53d72-2d38-4a85-a5b1-d13b3f47fda5/gItd-floor.jpg"
            alt={data.name}
          />
          <div className={`infobox bar`}>{`[ ${data.x} x ${data.y} @ ${
            data.depth
          }-bit ${data.channels} ]`}</div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 0 0 ${100 / imagesPerRow}%;
            background: black;
            height: calc(${length}px + (2 * ${size[previewSize].height}) + ${
          size[previewSize].barHeight
        });
          }
          
          .infobox {
            display: flex;
            transition: all ${TRANSITION_TIME_0035} ease;
            transition-property: height, background, color, border;
            align-items: center;
            justify-content: center;
            background: ${COLOR_GRAY_3};
            height: ${size[previewSize].height};
            width: ${length}px;
            color: ${tint(darken(typeColors[data.type], 10), 30)};
            font-size: ${size[previewSize].fontSize};
            font-weight: bold;
          }

          .bar {
            border-bottom: ${size[previewSize].barHeight} solid black;
          }

          .image {
            transition: opacity ${TRANSITION_TIME_0035} ease;
            opacity: 0.65;
            height: ${length}px;
          }

          /* HOVER */

          .container:hover:not(.selected) > .bar {
            border-color: ${darken(typeColors[data.type], 10)};
          }

          .container:hover:not(.selected) > .infobox{
            color: ${tint(typeColors[data.type], 60)};
            background: ${darken(typeColors[data.type], 18)};
          }

          .container:hover:not(.selected) > .image{
            opacity: 0.9;
          }

          /* SELECTED */

          .selected > .bar {
            border-color: ${typeColors[data.type]};
          }

          .selected > .infobox {
            color: white;
            background: ${tint(darken(typeColors[data.type], 17), 6)};
          }

          .selected > .image {
            opacity: 1;
          }

        `}</style>
      </React.Fragment>
    );
  }
}
