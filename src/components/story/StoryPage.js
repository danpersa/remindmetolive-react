import React, {PropTypes} from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';
import FullImage from './FullImage';

class StoryPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div className="main-container">
      <section className="page-title page-title-4">
          <Container>
              <Row>
                  <Col md={6}>
                      <h3 className="uppercase mb0">{this.props.title}</h3>
                  </Col>
                  <Col md={6} someClass="text-right">
                      <ol className="breadcrumb breadcrumb-2">
                          <li>
                              <a href="index.html">Home</a>
                          </li>
                          <li>
                              <a href="#">Stories</a>
                          </li>
                          <li className="active">Project Title</li>
                      </ol>
                  </Col>
              </Row>
          </Container>
      </section>
      <section className="pt0 pb40">
          <Container>
              <Row>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Date:</span>
                      <h6 className="uppercase mb0">Oct 15</h6>
                  </Col>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Tags:</span>
                      <h6 className="uppercase mb0">seaside, casino, ruin</h6>
                  </Col>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Location:</span>
                      <h6 className="uppercase mb0">Constanta, Romania</h6>
                  </Col>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Author:</span>
                      <h6 className="uppercase mb0">Dan</h6>
                  </Col>
              </Row>
          </Container>
      </section>

      <FullImage src={this.props.logo}/>
      {this.props.children}

      <section className="pt0 pb40 text-center" >
        <Container>
          <Row>
            <Col>
              <img src="http://www.remindmetolive.com/assets/cocos.png" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>);
  }
}

StoryPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default StoryPage;
