import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import MainMenu from './MainMenu';


const App = (props) => {
  return (
    <div>
      <MainMenu />
      {props.children}

      <div className="main-container">
        <div>
          <IndexLink to="/">Home</IndexLink>
          {' | '}
          <Link to="/fuel-savings">Demo App</Link>
          {' | '}
          <Link to="/about">About</Link>
          {' | '}
          <Link to="/casino">Casino</Link>
          <br/>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
