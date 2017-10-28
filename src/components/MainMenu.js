import { imageHost } from '../isomorphicVars';
import React from 'react';
import {Link} from 'react-router-dom';
import MainMenuLinks from './MainMenuLinks';

const MainMenu = () => {
  return (
    <div className="nav-container">
      <a id="top" />
      <nav>
        <div className="nav-bar">
          <div className="module left">
            <Link to="/">
              <img className="logo logo-dark" alt="remindmetolive" src={`${imageHost}/images/logo.svg`} />
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
