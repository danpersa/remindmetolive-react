import React from 'react';
import {Link} from 'react-router';

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
                <div className="module right">
                    <a className="btn btn-sm hidden-xs hidden-sm hidden-md" href="variant/builder.html">Try Builder</a>
                    <a className="btn btn-sm btn-filled" href="http://themeforest.net/item/foundry-multipurpose-html-variant-page-builder/11562108?ref=medium_rare">Buy Now</a>
                </div>
            </div>
            <div className="nav-bar">
                <div className="module left">
                    <a href="index.html">
                        <img className="logo logo-light" alt="Foundry" src="http://www.remindmetolive.com/assets/logo-100.png" />
                        <img className="logo logo-dark" alt="Foundry" src="http://www.remindmetolive.com/assets/logo-100.png" />
                    </a>
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
                                <a href="/">
                                    Streets of Berlin
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Cats
                                </a>
                            </li>
                            <li>
                              <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a href="/">
                                    Contact
                                </a>
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
