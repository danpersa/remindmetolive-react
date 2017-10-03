import React from 'react';
import PropTypes from 'prop-types';
import Row from '../components/base/Row';
import Col from '../components/base/Col';
import Container from '../components/base/Container';
import TopPage from './TopPage';
import SocialList from '../components/SocialList';

class TopPageTwoColumns extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <TopPage teaser={this.props.teaser}
               title={this.props.title}>
        <section className="pt32 mt32 mt-xs-16 pb0 mb0 mb-xs-0">
          <Container>
            <Row>
              <Col sm={6} md={5} mdOffset={1}>
                {this.props.children[0]}
              </Col>
              <Col sm={6} md={5} mdOffset={1}>
                {this.props.children[1]}
               </Col>
            </Row>
          </Container>
        </section>
        <section className="pt32 pb48 text-center" >
          <SocialList/>
        </section>
      </TopPage>
    );
  }
}

TopPageTwoColumns.propTypes = {
  children: PropTypes.array.isRequired,
  teaser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopPageTwoColumns;
