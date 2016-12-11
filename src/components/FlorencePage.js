import React from 'react';
import TwoImages from './story/TwoImages';
import OneImage from './story/OneImage';
import ThreeImages from './story/ThreeImages';
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
      <StoryPage logo="images/wide-10-2048.jpg"
                 title="Flornce Rulz">

        <StoryIntro>
         When I close my eyes and visualize our time in Italy, I see everything in slow-motion. It's definitely a place that I am in love with. Falling in love with a place it's a unique feeling, it is a constant desire for more, more of the beautiful skylines, sunrises, sunsets, delicious food, different culture and new adventures. And the more you take in, the deeper you fall and the more you wish to see. It all started with Rome, continued with Venice, then mesmarizing Tuscany. Now it is time for Pisa, a small and enchanting city in Tuscany.
        </StoryIntro>

        <StoryTextBlock>
          Yes, the Leaning Tower is spectacular — even more so in person than in pictures and has made Pisa famous all over the world, but there’s much more to Pisa than that. The medieval city boasts of 11th century gorgeous art, like the elaborate Baptistery and other beautiful palaces. Most of them are in the famous Square of Miracles (Piazza dei Miracoli). The square is surrounded by a beautiful green lawn where tourists lie down and relax admiring the amazing setting.
        </StoryTextBlock>

        <StoryImages>

          <OneImage src="images/image-02-1200.jpg" />

          <ThreeImages
            src1="images/image-03-1200.jpg"
            src2="images/image-04-1200.jpg"
            src3="images/image-05-1200.jpg"/>

          <TwoImages
            src1="images/image-06-1200.jpg"
            src2="images/image-07-1200.jpg"/>

          <OneImage src="images/image-08-1200.jpg" />

          <ThreeImages
            src1="images/image-09-1200.jpg"
            src2="images/image-10-1200.jpg"
            src3="images/image-11-1200.jpg"/>

          <TwoImages
            src1="images/image-12-1200.jpg"
            src2="images/image-13-1200.jpg"/>

        </StoryImages>
        <FullImage src="images/wide-02-2048.jpg"/>
        <StoryImages>

          <OneImage src="images/image-15-1200.jpg" />

          <TwoImages
            src1="images/image-16-1200.jpg"
            src2="images/image-17-1200.jpg"/>

          <OneImage src="images/image-18-1200.jpg" />

          <TwoImages
            src1="images/image-19-1200.jpg"
            src2="images/image-20-1200.jpg"/>

          <TwoImages
            src1="images/image-21-1200.jpg"
            src2="images/image-22-1200.jpg"/>
        </StoryImages>
        <StoryTextBlock title="Bridges of Florence">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>
        <FullImage src="images/wide-03-2048.jpg"/>
        <StoryImages>

          <TwoImages
            src1="images/image-24-1200.jpg"
            src2="images/image-25-1200.jpg"/>

          <TwoImages
            src1="images/image-26-1200.jpg"
            src2="images/image-27-1200.jpg"/>

        </StoryImages>
        <StoryTextBlock title="Climb up the Tower">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>
        <FullImage src="images/wide-04-2048.jpg"/>
        <StoryImages>

          <TwoImages
            src1="images/image-29-1200.jpg"
            src2="images/image-30-1200.jpg"/>

          <OneImage src="images/image-31-1200.jpg" />
        </StoryImages>

        <StoryTextBlock title="Michelangelo Square">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>
        <FullImage src="images/wide-11-2048.jpg"/>

        <StoryImages>
          <OneImage src="images/image-33-1200.jpg" />
        </StoryImages>

        <StoryTextBlock title="Climb up the Tower">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>
        <FullImage src="images/wide-05-2048.jpg"/>

        <StoryImages>
          <TwoImages
            src1="images/image-35-1200.jpg"
            src2="images/image-36-1200.jpg"/>
          <OneImage src="images/image-37-1200.jpg" />
          <OneImage src="images/image-38-1200.jpg" />
          <OneImage src="images/image-39-1200.jpg" />
          <TwoImages
            src1="images/image-40-1200.jpg"
            src2="images/image-41-1200.jpg"/>

        </StoryImages>
        <FullImage src="images/wide-08-2048.jpg"/>
        <StoryImages>
          <TwoImages
            src1="images/image-43-1200.jpg"
            src2="images/image-44-1200.jpg"/>
          <OneImage src="images/image-45-1200.jpg" />
          <OneImage src="images/image-46-1200.jpg" />
        </StoryImages>

      </StoryPage>);
  }
}

export default PisaPage;
