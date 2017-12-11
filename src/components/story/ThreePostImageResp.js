import React from 'react';
import ThreeImages from './ThreeImages';
import buildSrcResp from './buildSrcResp';
import PropTypes from 'prop-types';

const ThreePostImageResp = (props) => {
  return (
    <ThreeImages src1={buildSrcResp(props.dirPath, "M", "image", props.number1)}
                 src2={buildSrcResp(props.dirPath, "M", "image", props.number2)}
                 src3={buildSrcResp(props.dirPath, "M", "image", props.number3)} />
  );
};

ThreePostImageResp.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number1: PropTypes.string.isRequired,
  number2: PropTypes.string.isRequired,
  number3: PropTypes.string.isRequired
};

export default ThreePostImageResp;
