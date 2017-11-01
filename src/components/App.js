/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import MainMenu from './MainMenu';
import Footer from './Footer';
import { StickyContainer, Sticky } from 'react-sticky';

import HomePage from '../containers/HomePage';
import AboutPage from '../containers/AboutPage';
import ContactPage from '../containers/ContactPage';
import StoriesPage from '../components/StoriesPage';
import NotFoundPage from '../components/NotFoundPage';

import MidsummerInHelsinkiStory from '../stories/2017-08-20-midsummer-in-helsinki';
import SummerInAmsterdamStory from '../stories/2017-06-17-summer-in-amsterdam';
import LisbonACharmingCityStory from '../stories/2017-06-05-lisbon-a-charming-city';
import FlorenceStory from '../stories/2017-01-15-florence-theme-park-of-renaissance';
import IrinaAndLucianMaternityPhotoSessionStory from '../stories/2016-11-20-irina-and-lucian-maternity-photo-session';
import SienaTheTuscanBeautyStory from '../stories/2016-11-12-siena-the-tuscan-beauty';
import PisaAfterglowStory from '../stories/2016-10-08-pisa-afterglow';
import LondonAfterBrexitStory from '../stories/2016-09-10-london-after-brexit';
import BridgesOfFlorenceStory from '../stories/2016-06-30-bridges-of-florence';
import TenerifeTheLandOfEternalSpringStory from '../stories/2016-06-11-tenerife-the-land-of-eternal-spring';
import LanzaroteBeachesStory from '../stories/2016-05-17-lanzarote-beaches';
import WinterFairyTaleInSalzburgStory from '../stories/2016-01-06-winter-fairy-tale-in-salzburg';
import CasinoOfConstantaStory from '../stories/2015-10-15-the-casino-of-constanta';
import LoveAtTheGardensOfTheWorldStory from '../stories/2015-09-30-love-at-the-gardens-of-the-world';
import LunarLandscapesOfLanzaroteStory from '../stories/2015-09-29-lunar-landscapes-of-lanzarote';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  redirect(to) {
    return ({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 302;
      }
      return <Redirect to={to} />;
    };
  }

  render() {
    return (
      <StickyContainer>
        <Sticky>
          {
            ({ style }) => {
              return (
                <MainMenu style={style} />
              );
            }
          }
        </Sticky>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} timeout={500} classNames="fade">
            <Switch location={this.props.location}>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/stories/" component={StoriesPage}/>
              <Route exact path="/stories/midsummer-in-helsinki.html" component={MidsummerInHelsinkiStory}/>
              <Route exact path="/stories/summer-in-amsterdam.html" component={SummerInAmsterdamStory}/>
              <Route exact path="/stories/lisbon-a-charming-city.html" component={LisbonACharmingCityStory}/>
              <Route exact path="/stories/florence-theme-park-of-renaissance.html" component={FlorenceStory}/>
              <Route exact path="/stories/irina-and-lucian-maternity-photo-session.html" component={IrinaAndLucianMaternityPhotoSessionStory}/>
              <Route exact path="/stories/siena-the-tuscan-beauty.html" component={SienaTheTuscanBeautyStory}/>
              <Route exact path="/stories/pisa-afterglow.html" component={PisaAfterglowStory}/>
              <Route exact path="/stories/london-after-brexit.html" component={LondonAfterBrexitStory}/>
              <Route exact path="/stories/bridges-of-florence.html" component={BridgesOfFlorenceStory}/>
              <Route exact path="/stories/tenerife-the-land-of-eternal-spring.html" component={TenerifeTheLandOfEternalSpringStory}/>
              <Route exact path="/stories/lanzarote-beaches.html" component={LanzaroteBeachesStory}/>
              <Route exact path="/stories/winter-fairy-tale-in-salzburg.html" component={WinterFairyTaleInSalzburgStory}/>
              <Route exact path="/stories/the-casino-of-constanta.html" component={CasinoOfConstantaStory}/>
              <Route exact path="/stories/love-at-the-gardens-of-the-world.html" component={LoveAtTheGardensOfTheWorldStory}/>
              <Route exact path="/stories/lunar-landscapes-of-lanzarote.html" component={LunarLandscapesOfLanzaroteStory}/>

              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/contact" component={ContactPage}/>
              <Route exact path="/cats/" render={this.redirect("/stories/")}/>
              <Route exact path="/cats/christmas-cat.html" render={this.redirect("/stories/")}/>
              <Route exact path="/cats/whitey.html" render={this.redirect("/stories/")}/>
              <Route exact path="/cats/shumy-is-one-year-old.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/lady-in-red-with-white-dog.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/teufelsberg.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/charlottenburg-bridge-in-autumn.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/resting-in-mauerpark.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/surprised-in-the-park.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/snow-and-kids.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/bike-parked-by-fence.html" render={this.redirect("/stories/")}/>
              <Route exact path="/streets-of-berlin/gendarmenmarkt.html" render={this.redirect("/stories/")}/>
              <Route path="*" component={NotFoundPage}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </StickyContainer>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default withRouter(App);
