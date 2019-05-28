import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import ScrollToTop from './ScrollToTop';
import App from './App';
import GoogleAnalytics from './GoogleAnalytics';
import { Router } from 'react-router-dom';

export default class Root extends Component {

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={this.props.history}>
          <ScrollToTop location={location}>
            <GoogleAnalytics location={location}>
              <App history={history}/>
            </GoogleAnalytics>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
