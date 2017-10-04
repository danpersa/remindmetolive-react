import React from 'react';
import {Link} from 'react-router-dom';
import MainMenuLinks from './MainMenuLinks';

const MainMenu = () => {
  return (
    <div className="nav-container">
      <a id="top" />
      <nav>
        <div className="nav-utility">
          <div className="module left">
            <i className="ti-email">&nbsp;</i>
            <span className="sub">contact@remindmetolive.com</span>
          </div>
        </div>
        <div className="nav-bar">
            <div className="module left">
              <Link to="/">
                <img className="logo logo-light" alt="remindmetolive" src="/images/logo.svg" />
                <img className="logo logo-dark" alt="remindmetolive" src="/images/logo.svg" />
              </Link>
            </div>
            <div className="module-group right hidden-xs">
              <div className="module left">
                <MainMenuLinks />
              </div>
            </div>
        </div>
        <div className="nav-bar visible-xs">
          <div className="module-group">
            <div className="module left">
              <MainMenuLinks />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
