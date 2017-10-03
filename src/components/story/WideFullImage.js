import React from 'react';
import FullImage from './FullImage';
import PropTypes from 'prop-types';

const WideFullImage = (props) => {
  return (
    <FullImage prefix="wide"
               dirPath={props.dirPath}
               number={props.number} />
  );
};

WideFullImage.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default WideFullImage;
