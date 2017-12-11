import React from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';
import PropTypes from 'prop-types';

const StoryIntro = (props) => {

  return (
    <Container pt={24} ptXs={0} pb={24} pbXs={0}>
      <Row mb={0} mbXs={0}>
        <Col md={8} mdOffset={2} sm={10} smOffset={1}>
          <div className="lead">{props.children}</div>
        </Col>
      </Row>
    </Container>
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
