import React from 'react';
import PropTypes from 'prop-types';
import buildSrcResp from './buildSrcResp';

const FullImageResp = (props) => {

  const buildSrc = (number, size) => {
    return buildSrcResp(props.dirPath, size, props.prefix, number);
  };

  const buildSrcSet = (number) => {
    return `${buildSrc(number, "M")} 1200w, ${buildSrc(number, "N")} 1600w, ${buildSrc(number, "L")} 1920w, ${buildSrc(number, "H")} 4096w`;
  };

  return (
    <section className="pt24 pb48">
        <img alt={props.alt}
             className="col-xs-12 p0 border-top-bottom"
             src={buildSrc(props.number, "M")}
             srcSet={buildSrcSet(props.number)} />
    </section>
  );
};

FullImageResp.propTypes = {
  dirPath: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default FullImageResp;
