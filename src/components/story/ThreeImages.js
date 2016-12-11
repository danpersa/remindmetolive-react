import React, {PropTypes} from 'react';
import Row from '../base/Row';
import Col from '../base/Col';

const ThreeImages = (props) => {
  return (
    <Row mb={40} mbXs={24}>
      <Col xs={12} sm={4} md={4} lg={4} mbXs={16}>
        <img className="border" alt="Project Image" src={props.src1} />
      </Col>
      <Col xs={12} sm={4} md={4} lg={4} mbXs={16}>
        <img className="border" alt="Project Image" src={props.src2} />
      </Col>
      <Col xs={12} sm={4} md={4} lg={4}>
        <img className="border" alt="Project Image" src={props.src3} />
      </Col>
    </Row>
  );
};

ThreeImages.propTypes = {
  src1: PropTypes.string.isRequired,
  src2: PropTypes.string.isRequired,
  src3: PropTypes.string.isRequired
};

export default ThreeImages;
