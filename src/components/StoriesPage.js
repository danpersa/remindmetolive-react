import React from 'react';
import Container from './base/Container';
import Row from './base/Row';
import Col from './base/Col';
import StoryIntro from './story/StoryIntro';
import StoryHover from './stories/StoryHover';

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
        <StoryHover title="Midsummer in Helsinki"
                    href="/stories/midsummer-in-helsinki.html"
                    src="/images/stories/2017-08-20-midsummer-in-helsinki/teaser-02-800.jpg" />

        <StoryHover title="Summer in Amsterdam"
                    href="/stories/summer-in-amsterdam.html"
                    src="/images/stories/2017-06-17-summer-in-amsterdam/teaser-03-800.jpg" />

        <StoryHover title="Lisbon, A Charming City"
                    href="/stories/lisbon-a-charming-city.html"
                    src="/images/stories/2017-06-05-lisbon-a-charming-city/teaser-01-800.jpg" />

        <StoryHover title="Florence‚ The Theme Park Of Renaissance"
                    href="/stories/florence-theme-park-of-renaissance.html"
                    src="/images/stories/2017-01-15-florence-theme-park-of-renaissance/teaser-01-1200.jpg" />

        <StoryHover title="Irina & Lucian Maternity Photos"
                    href="/stories/irina-and-lucian-maternity-photo-session.html"
                    src="/images/stories/2016-11-20-irina-and-lucian-maternity-photo-session/teaser-03-800.jpg" />

        <StoryHover title="Siena, The Tuscan Beauty"
                    href="/stories/siena-the-tuscan-beauty.html"
                    src="/images/stories/2016-11-12-siena-the-tuscan-beauty/teaser-03-800.jpg" />

        <StoryHover title="Pisa Afterglow"
                    href="/stories/pisa-afterglow.html"
                    src="/images/stories/2016-10-08-pisa-afterglow/teaser-02-800.jpg" />

        <StoryHover title="London After Brexit"
                    href="/stories/london-after-brexit.html"
                    src="/images/stories/2016-09-10-london-after-brexit/teaser-01-800.jpg" />

        <StoryHover title="Bridges of Florence"
                    href="/stories/bridges-of-florence.html"
                    src="/images/stories/2016-06-30-bridges-of-florence/teaser-02-800.jpg" />

        <StoryHover title="Tenerife, Land Of Eternal Spring"
                    href="/stories/tenerife-the-land-of-eternal-spring.html"
                    src="/images/stories/2016-06-11-tenerife-the-land-of-eternal-spring/teaser-01-800.jpg" />

        <StoryHover title="Lanzarote-Beaches"
                    href="/stories/lanzarote-beaches.html"
                    src="/images/stories/2016-05-17-lanzarote-beaches/teaser-01-800.jpg" />

        <StoryHover title="Winter Fairy Tale in Salzburg"
                    href="/stories/winter-fairy-tale-in-salzburg.html"
                    src="/images/stories/2016-01-06-winter-fairy-tale-in-salzburg/teaser-01-800.jpg" />

        <StoryHover title="The Casino Of Constanta"
                    href="/stories/the-casino-of-constanta.html"
                    src="/images/stories/2015-10-15-the-casino-of-constanta/teaser-01-800.jpg" />

        <StoryHover title="Love at the Gardens Of The World"
                    href="/stories/love-at-the-gardens-of-the-world.html"
                    src="/images/stories/2015-09-30-love-at-the-gardens-of-the-world/teaser-01-800.jpg" />

        <StoryHover title="Lunar Landscapes of Lanzarote"
                    href="/stories/lunar-landscapes-of-lanzarote.html"
                    src="/images/stories/2015-09-29-lunar-landscapes-of-lanzarote/teaser-01-800.jpg" />
      </section>
    );
  }
}

export default StoriesPage;
