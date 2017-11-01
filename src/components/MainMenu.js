import { imageHost } from '../isomorphicVars';
import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import MainMenuLinks from './MainMenuLinks';
import PropTypes from 'prop-types';

class MainMenu extends PureComponent {
  render() {
    return (
      <div style={{ ...this.props.style, 'z-index': '6'}}>
        <nav>
          <div className="nav-bar">
            <div className="module left">
              <Link to="/">
                <img className="logo logo-dark" alt="remindmetolive" src={`${imageHost}/images/logo.svg`} />
              </Link>
            </div>
            <div className="module-group right">
              <div className="module right">
                <MainMenuLinks />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

MainMenu.propTypes = {
  style: PropTypes.string.isRequired
};

export default MainMenu;
