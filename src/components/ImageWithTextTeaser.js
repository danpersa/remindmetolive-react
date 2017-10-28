import React from 'react';
import PropTypes from 'prop-types';
import { imageHost } from '../isomorphicVars';

const ImageWithTextTeaser = (props) => {
  return (
    <div className="image-tile inner-title title-center text-center">
      <img alt="Teaser" src={imageHost + props.src} />
      <div className="title">
          <h1 className="uppercase mb0">{props.text}</h1>
      </div>
    </div>
  );
};

ImageWithTextTeaser.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ImageWithTextTeaser;
