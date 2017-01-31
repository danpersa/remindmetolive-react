import React, {PropTypes} from 'react';
import Row from '../base/Row';
import Col from '../base/Col';
import Container from '../base/Container';
import TeaserImage from './TeaserImage';

class StoryPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div className="main-container">
      <TeaserImage src={this.props.logo}/>
      <section className="pt0 pb0 mb32 mb-xs-32 mt32 mt-xs-16 text-center">
        <Container>
          <Row>
            <Col sm={8} smOffset={2} someClass="text-center">
              <h1 className="uppercase">{this.props.title}</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt0 pb0 text-center">
        <Container>
          <ul className="post-meta">
            <li>
              <i className="ti-user"/>
              <span>Author: {this.props.author}</span>
            </li>
            <li>
              <i className="ti-tag"/>
              <span>Tags: {this.props.tags}</span>
            </li>
            <li>
              <i className="ti-map"/>
              <span>Location: {this.props.location}</span>
            </li>
          </ul>
        </Container>
      </section>

      {this.props.children}

      <section className="pt0 pb40 text-center" >
        <Container>
          <Row>
            <Col>
              <img src="/images/cocos.png" />
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
