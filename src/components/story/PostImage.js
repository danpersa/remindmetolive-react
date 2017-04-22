import React, {PropTypes} from 'react';
import OneImage from './OneImage';
import buildSrc from './buildSrc';

const PostImage = (props) => {

  return (
    <OneImage src={buildSrc(props.dirPath, "image", props.number, "1200")} />
  );
};

PostImage.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default PostImage;
