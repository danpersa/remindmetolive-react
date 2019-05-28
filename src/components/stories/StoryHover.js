import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { imageHost } from '../../isomorphicVars';

const StoryHover = (props) => {

  return (
    <div className="col-sm-6">
      <div className="image-tile inner-title title-center text-center">
        <Link to={props.href}>
            <img alt={props.title} className="background-image" src={imageHost + props.src} />
            <div className="title">
              <h3 className="uppercase" style={{cursor: 'pointer'}}>{props.title}</h3>
              <h6 className="uppercase" style={{cursor: 'pointer'}}>Read the story</h6>
            </div>
        </Link>
      </div>
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
