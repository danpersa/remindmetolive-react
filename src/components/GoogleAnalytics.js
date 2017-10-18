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
    if (this.props.location !== prevProps.location) {
      ReactGA.set({ page: window.location.pathname + window.location.search });
      ReactGA.pageview(window.location.pathname + window.location.search);
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
