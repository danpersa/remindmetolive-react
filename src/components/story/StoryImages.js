import React from 'react';
import Container from '../base/Container';
import PropTypes from 'prop-types';

const StoryImages = (props) => {
  return (
    <Container pt={0} pb={0}>{props.children}</Container>
  );
};

StoryImages.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
};

export default StoryImages;
