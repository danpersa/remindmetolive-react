import React, {PropTypes} from 'react';
import Container from '../base/Container';

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
