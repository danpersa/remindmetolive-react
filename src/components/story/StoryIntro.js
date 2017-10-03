import React from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';
import PropTypes from 'prop-types';

const StoryIntro = (props) => {

  return (
    <section className="pt24 pb24">
      <Container>
          <Row mb={0} mbXs={0}>
            <Col md={8} mdOffset={2} sm={10} smOffset={1}>
              <h6 className="lead">{props.children}</h6>
            </Col>
          </Row>
      </Container>
    </section>
  );
};

StoryIntro.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

export default StoryIntro;
