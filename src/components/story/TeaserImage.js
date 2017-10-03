import React from 'react';
import PropTypes from 'prop-types';

const TeaserImage = (props) => {
  return (
    <section className="pt0 pb48">
        <img alt="Feature Image" className="col-xs-12 p0 border-bottom" src={props.src} />
    </section>
  );
};

TeaserImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default TeaserImage;
