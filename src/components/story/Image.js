import React from 'react';
import PropTypes from 'prop-types';
import buildSrcResp from './buildSrcResp';

const ImageResp = (props) => {

  const buildSrc = (number, size) => {
    return buildSrcResp(props.dirPath, size, props.prefix, number);
  };

  const buildSrcSet = (number) => {
    return `${buildSrc(number, "M")} 1200w, ${buildSrc(number, "N")} 1600w, ${buildSrc(number, "L")} 1920w, ${buildSrc(number, "H")} 4096w`;
  };

  const getClassName = () => {
      return (props.someClass ? props.someClass : "")
  }

  return (
    <img alt={props.alt}
         className={getClassName()}
         src={buildSrc(props.number, "L")}
         srcSet={buildSrcSet(props.number)}
         sizes="100vw" />
  );
};

ImageResp.propTypes = {
  dirPath: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  alt: PropTypes.string,
  someClass: PropTypes.string
};

export default ImageResp;
