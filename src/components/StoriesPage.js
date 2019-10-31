import React from 'react';
import Container from './base/Container';
import Row from './base/Row';
import Col from './base/Col';
import StoryIntro from './story/StoryIntro';
import StoryHover from './stories/StoryHover';
import SubscribeForm from './SubscribeForm';

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
          Discover <strong>stories</strong> about love, travel, people, and our
          lives and culture through <strong>photography</strong>. Let the stories
          flow in your veins!
        </StoryIntro>

        <section className="pb0">
          <StoryHover title="Amazing Provence - Part 3"
                      href="/stories/amazing-provence-part-3.html"
                      src="/images/M/stories/2019-11-05-amazing-provence/abbaye-notre-dame-de-senanque/image-01.jpg" />

          <StoryHover title="Amazing Provence - Part 2"
                      href="/stories/amazing-provence-part-2.html"
                      src="/images/M/stories/2019-11-05-amazing-provence/nimes/image-03.jpg" />

          <StoryHover title="Amazing Provence - Part 1"
                      href="/stories/amazing-provence-part-1.html"
                      src="/images/M/stories/2019-11-05-amazing-provence/toulouse/image-01.jpg" />

          <StoryHover title="Fuerteventura – The Paradise Island"
                      href="/stories/fuerteventura-the-paradise-island.html"
                      src="/images/M/stories/2019-08-17-fuerteventura-the-paradise-island/image-03.jpg" />

          <StoryHover title="The Magic Of Gran Canaria"
                      href="/stories/the-magic-of-gran-canaria.html"
                      src="/images/M/stories/2019-06-04-the-magic-of-gran-canaria/image-05.jpg" />

          <StoryHover title="Trendy Stockholm"
                      href="/stories/trendy-stockholm.html"
                      src="/images/M/stories/2018-09-05-trendy-stockholm/image-01.jpg" />

          <StoryHover title="Cretan Sunsets"
                      href="/stories/cretan-sunsets.html"
                      src="/images/M/stories/2017-12-15-cretan-sunsets/image-09.jpg" />

          <StoryHover title="Top 10 Milan"
                      href="/stories/top-10-milan.html"
                      src="/images/M/stories/2017-11-20-top-10-milan/image-01.jpg" />

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
        <SubscribeForm />
      </section>
    );
  }
}

export default StoriesPage;
