import React from 'react';
import { Parallax } from 'react-parallax';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ParallaxTeaser = (props) => {
  return (
    <Parallax bgImage={props.img}
              strength={200}
              blur={1}>
      <div className="parallax-image">
        <div className="parallax-image-description text-center image-bg">
            <h2>{props.title}</h2>
            <Link className="btn btn-white btn-lg" to={props.href}>{props.button}</Link>
        </div>
      </div>
    </Parallax>
  );
};

ParallaxTeaser.propTypes = {
  img: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default ParallaxTeaser;
