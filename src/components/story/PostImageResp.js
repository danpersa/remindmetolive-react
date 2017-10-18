import React from 'react';
import OneImage from './OneImage';
import buildSrcResp from './buildSrcResp';
import PropTypes from 'prop-types';

const PostImageResp = (props) => {

  return (
    <OneImage src={buildSrcResp(props.dirPath, "M", "image", props.number)}
              alt={props.alt}/>
  );
};

PostImageResp.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default PostImageResp;
