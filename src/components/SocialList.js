import React from 'react';

const SocialList = () => {
  return (
    <div>
      <h6 className="uppercase">Discover More</h6>
      <ul className="social-list list-inline">
        <li>
          <a href="https://www.twitter.com/remindmetolive" target="_blank">
            <i className="ti-twitter-alt icon icon-sm" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/remindmetolive" target="_blank">
            <i className="ti-facebook icon icon-sm" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/remindmetolive/" target="_blank">
            <i className="ti-instagram icon icon-sm" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
