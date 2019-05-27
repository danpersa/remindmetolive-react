import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ScrollToTop from './ScrollToTop';
import App from './App';
import GoogleAnalytics from './GoogleAnalytics';

export default class Root extends Component {

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTop location={location}>
            <GoogleAnalytics location={location}>
              <App history={history}/>
            </GoogleAnalytics>
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
