import React, {PropTypes} from 'react';

const WideFullImage = (props) => {

  const buildSrc = (number, width) => {
    return `${props.dirPath}wide-${number}-${width}.jpg`;
  };

  const buildSrcSet = (number) => {
    return `${buildSrc(number, 1200)} 1200w, ${buildSrc(number, 1600)} 1600w, ${buildSrc(number, 2048)} 2048w, ${buildSrc(number, 4096)} 4096w`;
  };

  return (
    <section className="pt24 pb48">
        <img alt="Feature Image"
             className="col-xs-12 p0 border-top-bottom"
             src={buildSrc(props.number, 1600)}
             srcSet={buildSrcSet(props.number)}
             />
    </section>
  );
};

WideFullImage.propTypes = {
  dirPath: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default WideFullImage;
