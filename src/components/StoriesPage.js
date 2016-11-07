import React from 'react';

import Container from './base/Container.js';
import Row from './base/Row.js';
import Col from './base/Col.js';
import StoryIntro from './story/StoryIntro.js';

class StoriesPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="pt48 pb0">
        <Container>
          <Row>
            <Col sm={8} smOffset={2} someClass="text-center">
              <h1 className="uppercase mb8 mb-xs-8">Stories</h1>
            </Col>
          </Row>
        </Container>

        <StoryIntro>
          Discover stories about love, travel, people, and our lives and culture through photography. Let the stories flow in your veins!
        </StoryIntro>

        <div className="col-sm-6 text-center p8">
          <div className="image-tile hover-tile text-center mb24 border">
            <img alt="image" className="background-image" src="http://static.remindmetolive.com/images/stories/2016-06-30-bridges-of-florence/teaser-02-800.jpg" />
            <div className="hover-state">
              <a href="#">
                <h3 className="uppercase mb8">Bridges of Florence</h3>
                <h6 className="uppercase">Read the story</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-center p8">
          <div className="image-tile hover-tile text-center mb24 border">
            <img alt="image" className="background-image" src="http://static.remindmetolive.com/images/stories/2016-06-11-tenerife-the-land-of-eternal-spring/teaser-01-800.jpg" />
            <div className="hover-state">
              <a href="#">
                <h3 className="uppercase mb8">Tenerife, Land Of Eternal Spring</h3>
                <h6 className="uppercase">Read the story</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-center p8">
          <div className="image-tile hover-tile text-center mb24 border">
            <img alt="image" className="background-image" src="http://static.remindmetolive.com/images/stories/2016-05-17-lanzarote-beaches/teaser-01-800.jpg" />
            <div className="hover-state">
              <a href="#">
                <h3 className="uppercase mb8">Lanzarote - Beaches</h3>
                <h6 className="uppercase">Read the story</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-center p8">
          <div className="image-tile hover-tile text-center mb24 border">
            <img alt="image" className="background-image" src="http://static.remindmetolive.com/images/stories/2016-01-06-winter-fairy-tale-in-salzburg/teaser-01-800.jpg" />
            <div className="hover-state">
              <a href="#">
                <h3 className="uppercase mb8">Winter Fairy Tale in Salzburg</h3>
                <h6 className="uppercase">Read the story</h6>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StoriesPage;
