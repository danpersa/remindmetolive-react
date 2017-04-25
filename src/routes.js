import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import CasinoOfConstantaStory from './stories/CasinoOfConstantaStory';
import PisaAfterglowStory from './stories/PisaAfterglowStory';
import FlorenceStory from './stories/FlorenceStory';
import BridgesOfFlorenceStory from './stories/BridgesOfFlorenceStory';
import LunarLandscapesOfLanzaroteStory from './stories/LunarLandscapesOfLanzaroteStory';
import LisbonStory from './stories/LisbonStory';
import StoriesPage from './components/StoriesPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App} onChange={(prevState, nextState) => {
      if (nextState.location.action !== "POP") {
        window.scrollTo(0, 0);
      }
    }}>
    <IndexRoute component={HomePage}/>
    <Route path="stories" component={StoriesPage}/>
    <Route path="stories/pisa-afterglow.html" component={PisaAfterglowStory}/>
    <Route path="stories/florence-theme-park-of-renaissance.html" component={FlorenceStory}/>
    <Route path="stories/bridges-of-florence.html" component={BridgesOfFlorenceStory}/>
    <Route path="stories/the-casino-of-constanta.html" component={CasinoOfConstantaStory}/>
    <Route path="stories/lisbon.html" component={LisbonStory}/>
    <Route path="stories/lunar-landscapes-of-lanzarote.html" component={LunarLandscapesOfLanzaroteStory}/>
    <Route path="about" component={AboutPage}/>
    <Route path="contact" component={ContactPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
