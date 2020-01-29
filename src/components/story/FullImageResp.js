import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const FullImageResp = (props) => {
  return (
    <div className="row pt24 pb48">
      <Image someClass="col-xs-12 p0 border-top-bottom"
             dirPath={props.dirPath}
             prefix={props.prefix}
             number={props.number}
             alt={props.dirPath} />
    </div>
  );
};

FullImageResp.propTypes = {
  dirPath: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default FullImageResp;
