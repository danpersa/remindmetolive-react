import React from 'react';
import Container from '../base/Container';
import PropTypes from 'prop-types';

const StoryImages = (props) => {
  return (
    <section className="pt0 pb0">
      <Container>{props.children}</Container>
    </section>
  );
};

StoryImages.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default StoryImages;
