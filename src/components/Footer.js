import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer-1 bg-dark">
      <div className="container">
          <div className="row">
              <div className="col-md-3 col-sm-6">
                  <img alt="Logo" className="logo" src="images/logo-white.png" />
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="widget">
                      <h6 className="title">Recent Stories</h6>
                      <hr />
                      <ul className="link-list recent-posts">
                          <li>
                              <Link to="/florence">Florence Rulz</Link>
                              <span className="date">September
                                  <span className="number">14, 2016</span>
                              </span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="widget">
                      <h6 className="title">Latest Stories</h6>
                      <hr />
                      <div className="twitter-feed">
                          <div className="tweets-feed" data-feed-name="mrareweb"/>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 col-sm-6">
                  <div className="widget">
                      <h6 className="title">Instagram</h6>
                      <hr />
                      <div className="instafeed" data-user-name="mrareweb">
                          <ul/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-sm-6">
                  <span className="sub">&copy; Copyright 2017 - Remindmetolive</span>
              </div>
              <div className="col-sm-6 text-right">
                  <ul className="list-inline social-list">
                      <li>
                          <a href="http://www.twitter.com/remindmetolive" target="_blank">
                              <i className="ti-twitter-alt" />
                          </a>
                      </li>
                      <li>
                          <a href="http://www.facebook.com/remindmetolive" target="_blank">
                              <i className="ti-facebook" />
                          </a>
                      </li>
                      <li>
                          <a href="http://www.instagram.com/remindmetolive" target="_blank">
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
