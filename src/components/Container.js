import React, {PropTypes} from 'react';

const Container = (props) => {

  return (
    <div className="container">
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.element
  ]),
};

export default Container;
