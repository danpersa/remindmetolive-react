import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
// import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import CasinoOfConstantaStory from './stories/CasinoOfConstantaStory.js';
import PisaPage from './components/PisaPage.js';
import FlorenceStory from './stories/FlorenceStory.js';
import BridgesOfFlorenceStory from './stories/BridgesOfFlorenceStory.js';
import StoriesPage from './components/StoriesPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="stories" component={StoriesPage}/>
    <Route path="pisa" component={PisaPage}/>
    <Route path="florence" component={FlorenceStory}/>
    <Route path="bridges-of-florence" component={BridgesOfFlorenceStory}/>
    <Route path="the-casino-of-constanta" component={CasinoOfConstantaStory}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
