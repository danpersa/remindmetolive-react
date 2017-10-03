import React from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import PropTypes from 'prop-types';

const OneImage = (props) => {
  return (
    <Row mb={40} mbXs={24}>
      <Col sm={12} someClass="text-center">
        <img className="border" alt="Project Image" src={props.src} />
      </Col>
    </Row>
  );
};

OneImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default OneImage;
