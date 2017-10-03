import React from 'react';
import PropTypes from 'prop-types';

const Col = (props) => {
  function getClassName() {
      return (props.xs ? " col-xs-" + props.xs : "") +
             (props.sm ? " col-sm-" + props.sm : "") +
             (props.md ? " col-md-" + props.md : "") +
             (props.lg ? " col-lg-" + props.lg : "") +
             (props.xsOffset ? " col-xs-offset-" + props.xsOffset : "") +
             (props.smOffset ? " col-sm-offset-" + props.smOffset : "") +
             (props.mdOffset ? " col-md-offset-" + props.mdOffset : "") +
             (props.lgOffset ? " col-lg-offset-" + props.lgOffset : "") +
             (props.mbXs ? " mb-xs-" + props.mbXs : "") +
             (props.someClass ? " " + props.someClass : "");
  }

  return (
    <div className={getClassName()}>
      {props.children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  someClass: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  mbXs: PropTypes.number
};

export default Col;
