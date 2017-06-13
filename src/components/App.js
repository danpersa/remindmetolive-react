import React, { PropTypes } from 'react';
import MainMenu from './MainMenu';
import Footer from './Footer';

const App = (props) => {
  return (
    <div>
      <MainMenu />
      {props.children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
