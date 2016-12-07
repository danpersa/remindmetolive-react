import React from 'react';
import TwoImages from './story/TwoImages';
import OneImage from './story/OneImage';
import FullImage from './story/FullImage';
import StoryPage from './story/StoryPage';
import StoryTextBlock from './story/StoryTextBlock';
import StoryImages from './story/StoryImages';
import StoryIntro from './story/StoryIntro';

class PisaPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo="images/wide-01-2048.jpg"
                 title="Flornce Rulz">

        <StoryIntro>
         When I close my eyes and visualize our time in Italy, I see everything in slow-motion. It's definitely a place that I am in love with. Falling in love with a place it's a unique feeling, it is a constant desire for more, more of the beautiful skylines, sunrises, sunsets, delicious food, different culture and new adventures. And the more you take in, the deeper you fall and the more you wish to see. It all started with Rome, continued with Venice, then mesmarizing Tuscany. Now it is time for Pisa, a small and enchanting city in Tuscany.
        </StoryIntro>

        <StoryTextBlock>
          Yes, the Leaning Tower is spectacular — even more so in person than in pictures and has made Pisa famous all over the world, but there’s much more to Pisa than that. The medieval city boasts of 11th century gorgeous art, like the elaborate Baptistery and other beautiful palaces. Most of them are in the famous Square of Miracles (Piazza dei Miracoli). The square is surrounded by a beautiful green lawn where tourists lie down and relax admiring the amazing setting.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-01-1200.jpg" />

          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-02-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-03-1200.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-04-1200.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-05-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-06-800.jpg"/>

          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-07-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-08-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-09-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-10-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-11-800.jpg"/>
        </StoryImages>

        <StoryTextBlock title="Climb up the Tower">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>

        <FullImage src="images/wide-02-2048.jpg"/>

        <StoryImages>
          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-13-1200.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-14-1200.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-15-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-16-800.jpg"/>

          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-17-1200.jpg" />
        </StoryImages>

        <StoryTextBlock title="Much more than the Tower">
          The Leaning Tower has made Pisa famous all over the world, but in addition to the amazing Square of Miracles, the city offers many other beautiful places to see. Here are some for inspiration.
        </StoryTextBlock>

        <FullImage src="images/wide-03-2048.jpg"/>

        <StoryImages>
          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-19-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-20-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-21-800.jpg"/>

          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-22-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-25-1200.jpg"
            src2="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-24-1200.jpg"/>

          <OneImage src="http://static.remindmetolive.com/images/stories/2016-10-08-pisa-afterglow/image-23-1200.jpg" />
        </StoryImages>
      </StoryPage>);
  }
}

export default PisaPage;
