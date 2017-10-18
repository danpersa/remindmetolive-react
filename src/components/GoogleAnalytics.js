import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-000000-01', {
      debug: true
    });
  }

  componentDidUpdate(prevProps) {
    const thisUrl = this.props.location.pathname + this.props.location.search;
    const prevUrl = prevProps.location.pathname + prevProps.location.search;
    if (thisUrl !== prevUrl) {
      ReactGA.set({ page: thisUrl });
      ReactGA.pageview(thisUrl);
    }
  }

  render() {
    return this.props.children;
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default withRouter(GoogleAnalytics);
