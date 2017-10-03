import React from 'react';
import ThreeImages from './ThreeImages';
import buildSrc from './buildSrc';
import PropTypes from 'prop-types';

const TwoPostImages = (props) => {

  return (
    <ThreeImages src1={buildSrc(props.dirPath, "image", props.number1, "1200")}
                 src2={buildSrc(props.dirPath, "image", props.number2, "1200")}
                 src3={buildSrc(props.dirPath, "image", props.number3, "1200")} />
  );
};

TwoPostImages.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number1: PropTypes.string.isRequired,
  number2: PropTypes.string.isRequired,
  number3: PropTypes.string.isRequired
};

export default TwoPostImages;
