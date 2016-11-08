import React, {PropTypes} from 'react';

const Container = (props) => {

  return (
    <div className="container">
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

export default Container;
