import React, {PropTypes} from 'react';

const FullImage = (props) => {
  return (
    <section className="pt0 pb0">
        <img alt="Feature Image" className="col-xs-12 p0" src={props.src} />
    </section>
  );
};

FullImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default FullImage;
