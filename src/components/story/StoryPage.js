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
      <FullImage src={this.props.logo}/>
      <section>
        <Container>
          <Row>
            <Col sm={8} smOffset={2} someClass="text-center">
              <h1 className="uppercase mb64 mb-xs-32">{this.props.title}</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt0 pb40">
        <Container>
          <Row>
            <Col sm={3} xs={6} mbXs={24}>
                <span>Tags:</span>
                <h6 className="uppercase mb0">{this.props.tags}</h6>
            </Col>
            <Col sm={3} xs={6} mbXs={24}>
                <span>Location:</span>
                <h6 className="uppercase mb0">{this.props.location}</h6>
            </Col>
            <Col sm={3} xs={6} mbXs={24}>
                <span>Author:</span>
                <h6 className="uppercase mb0">{this.props.author}</h6>
            </Col>
          </Row>
        </Container>
      </section>

      {this.props.children}

      <section className="pt0 pb40 text-center" >
        <Container>
          <Row>
            <Col>
              <img src="images/cocos.png" />
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
};

export default StoryPage;
