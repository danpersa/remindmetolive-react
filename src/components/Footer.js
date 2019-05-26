import React from 'react';
import { imageHost } from '../isomorphicVars';

const Footer = () => {
  return (
    <footer className="footer-1 bg-dark mt0">
      <div className="container">
        <div className="row">
            <div className="col-sm-12 text-center">
                <img alt="remindmetolive logo" className="mrare mb24" src={`${imageHost}/images/logo-white.png`} />
                <h5 className="mb0 sub">&copy; Copyright 2017 - remindmetolive</h5>
            </div>
            <div className="col-sm-12 text-center">
              <ul className="list-inline social-list">
                <li>
                  <a href="http://www.twitter.com/remindmetolive" target="_blank" rel="noopener noreferrer">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
                <li>
                  <a href="http://www.facebook.com/remindmetolive" target="_blank" rel="noopener noreferrer">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="http://www.instagram.com/remindmetolive" target="_blank" rel="noopener noreferrer">
                    <i className="ti-instagram" />
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <a className="btn btn-sm fade-half back-to-top inner-link" href="#top">Top</a>
    </footer>
  );
};

export default Footer;
