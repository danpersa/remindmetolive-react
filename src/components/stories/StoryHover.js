import React, {PropTypes} from 'react';

import {Link} from 'react-router';

const StoryHover = (props) => {

  return (
    <div className="col-sm-6 text-center p8">
      <Link to={props.href}>
        <div className="image-tile hover-tile text-center mb24 border">
          <img alt="image" className="background-image" src={props.src} />
          <div className="hover-state">
            <h3 className="uppercase mb8">{props.title}</h3>
            <h6 className="uppercase">Read the story</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

StoryHover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default StoryHover;
