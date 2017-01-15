import React from 'react';
import {Link, IndexLink} from 'react-router';

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
                    <IndexLink to="/">
                        <img className="logo logo-light" alt="remindmetolive" src="images/logo.svg" />
                        <img className="logo logo-dark" alt="remindmetolive" src="images/logo.svg" />
                    </IndexLink>
                </div>
                <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                    <i className="ti-menu" />
                </div>
                <div className="module-group right">
                    <div className="module left">
                        <ul className="menu">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/stories">Stories</Link>
                            </li>
                            <li>
                              <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default MainMenu;
