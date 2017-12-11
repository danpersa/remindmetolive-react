import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { isDevelopment } from '../isomorphicVars';

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    if (isDevelopment) {
      return;
    }

    ReactGA.initialize('UA-65302999-1', {
      debug: true
    });
    const thisUrl = this.props.location.pathname + this.props.location.search;
    ReactGA.set({ page: thisUrl });
    ReactGA.pageview(thisUrl);
  }

  componentDidUpdate(prevProps) {
    if (isDevelopment) {
      return;
    }

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
