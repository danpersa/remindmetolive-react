import React from 'react';
import PropTypes from 'prop-types';
import Row from '../base/Row';

const TeaserImage = (props) => {
  return (
    <Row>
      <img alt={props.alt} className="col-xs-12 p0 border-bottom" src={props.src} />
    </Row>
  );
};

TeaserImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default TeaserImage;
