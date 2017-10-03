import React from 'react';
import PropTypes from 'prop-types';

const FullImage = (props) => {

  const buildSrc = (number, width) => {
    return `${props.dirPath}${props.prefix}-${number}-${width}.jpg`;
  };

  const buildSrcSet = (number) => {
    return `${buildSrc(number, 1200)} 1200w, ${buildSrc(number, 1600)} 1600w, ${buildSrc(number, 2048)} 2048w, ${buildSrc(number, 4096)} 4096w`;
  };

  return (
    <section className="pt24 pb48">
        <img alt={props.alt}
             className="col-xs-12 p0 border-top-bottom"
             src={buildSrc(props.number, 1600)}
             srcSet={buildSrcSet(props.number)} />
    </section>
  );
};

FullImage.propTypes = {
  dirPath: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default FullImage;
