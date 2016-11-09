import React from 'react';
import {Link} from 'react-router';
import SampleGallery from './SampleGallery.js';

const HomePage = () => {
  return (
    <section className="pt0 pb0">
      <SampleGallery className="pt0" />
      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </section>
  );
};

export default HomePage;
