import React from 'react';
import TopPageTwoColumns from './TopPageTwoColumns';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <TopPageTwoColumns teaser="/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-02-2048.jpg"
                         title="About Us">
        <div>
          <h2>Who we are</h2>
          <h6 className="lead">
            Hiya Friends,
            <p />
            We are Adelina and Dan, a couple passionate about photography and
            stories. <strong>Remindmetolive</strong> is a project we started working on,
            in the summer of 2015. This is the way we contribute to the large,
            funny and poignant human story.
            <p />
            Through our photography and narratives we are sharing a view of the world
            and remind you that living is not just about being alive,
            it's about experiencing life through all the little ups and downs that
            makes it worth living.
            <p />
            Have a look around, check out the stories and be a part of our journey.
            Thank you for supporting us and believing in what we are doing!
          </h6>
        </div>
        <div>
          <h2>What we do</h2>
          <h6 className="lead">
            We started the <strong>remindmetolive</strong> project to share stories
            of people and places through photography.
            <p />
            We believe that photography is a really powerful form of art, in the
            sense that it has the ability to transmit emotions, mood, ideas and
            messages—all of which are also important elements of story telling.
            <p />
            Each and every one of us has a story to tell and by sharing it we can
            make the world a better place, as it can inspire other people living now,
            or the generations to come. No joke, it's been scientifically proven.
            <p />
            Let us help you shape and <strong>share your story</strong> with the world.
          </h6>
        </div>
      </TopPageTwoColumns>
    );
  }
}

export default AboutPage;
