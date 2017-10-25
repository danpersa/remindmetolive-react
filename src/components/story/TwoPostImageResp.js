import React from 'react';
import TwoImages from './TwoImages';
import buildSrcResp from './buildSrcResp';
import PropTypes from 'prop-types';

const TwoPostImageResp = (props) => {
  return (
    <TwoImages src1={buildSrcResp(props.dirPath, "SW", "image", props.number1)}
               src2={buildSrcResp(props.dirPath, "SW", "image", props.number2)} />
  );
};

TwoPostImageResp.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number1: PropTypes.string.isRequired,
  number2: PropTypes.string.isRequired
};

export default TwoPostImageResp;
