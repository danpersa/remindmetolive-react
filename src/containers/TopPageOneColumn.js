import React from 'react';
import PropTypes from 'prop-types';
import Container from '../components/base/Container';
import TopPage from './TopPage';
import SocialList from '../components/SocialList';

class TopPageOneColumn extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <TopPage teaser={this.props.teaser}
               title={this.props.title}>
        <section className="pt32 mt32 mt-xs-16 pb0 mb0 mb-xs-0">
          <Container>
            {this.props.children}
          </Container>
        </section>
        <section className="pt32 pb48 text-center" >
          <SocialList/>
        </section>
      </TopPage>
    );
  }
}

TopPageOneColumn.propTypes = {
  children: PropTypes.object.isRequired,
  teaser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopPageOneColumn;
