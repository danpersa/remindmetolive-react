import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {

  function getClassName() {
      return "container" +
             (props.someClass !== null ? " " + props.someClass : "") +
             (props.mb !== null ? " mb" + props.mb : "") +
             (props.mbXs !== null ? " mb-xs-" + props.mbXs : "") +
             (props.pb !== null? " pb" + props.pb : "") +
             (props.pt !== null ? " pt" + props.pt : "") +
             (props.ptXs !== null ? " pt-xs-" + props.ptXs : "") +
             (props.pbXs !== null ? " pb-xs-" + props.pbXs : "");
  }

  return (
    <div className={getClassName()}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  someClass: PropTypes.string,
  mb: PropTypes.number,
  mbXs: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  ptXs: PropTypes.number,
  pbXs: PropTypes.number
};

export default Container;
