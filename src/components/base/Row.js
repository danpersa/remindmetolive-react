import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => {
  function getClassName() {
      return "row" +
             (props.someClass ? " " + props.someClass : "") +
             (props.mb ? " mb" + props.mb : "") +
             (props.mbXs ? " mb-xs-" + props.mbXs : "");
  }

  return (
    <div className={getClassName()}>
      {props.children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  someClass: PropTypes.string,
  mb: PropTypes.number,
  mbXs: PropTypes.number
};

export default Row;
