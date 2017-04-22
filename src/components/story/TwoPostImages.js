import React, {PropTypes} from 'react';
import TwoImages from './TwoImages';
import buildSrc from './buildSrc';

const TwoPostImages = (props) => {
  return (
    <TwoImages src1={buildSrc(props.dirPath, "image", props.number1, "1200")}
               src2={buildSrc(props.dirPath, "image", props.number2, "1200")} />
  );
};

TwoPostImages.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number1: PropTypes.string.isRequired,
  number2: PropTypes.string.isRequired
};

export default TwoPostImages;
