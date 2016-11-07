import React from 'react';
import TwoImages from './story/TwoImages';
import OneImage from './story/OneImage';
import FullImage from './story/FullImage';
import StoryPage from './story/StoryPage';
import StoryImages from './story/StoryImages';
import StoryIntro from './story/StoryIntro';
import StoryTextBlock from './story/StoryTextBlock';

class CasinoPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/teaser-01-2048.jpg"
                 title="The Casino Of Constanta">
        <StoryIntro>
          The Casino, the landmark of my hometown, Constanta, once an animated building hosting joyful events and gamblers from all over the world, is now a ruin.
        </StoryIntro>

        <StoryTextBlock title="1910">
          Today is the Casino's inauguration day. It should've been finished 3 years ago but different problems delayed the project. The liberal government allocated a lots of money earlier this year to see it finished. The costs were one third bigger then initially estimated (some say it was even more expensive).
        </StoryTextBlock>

        <StoryTextBlock>
          It is built in the Art Nouveau style after three tries - after the Conservator Party won the elections, they stopped the project, hired a new architect and tried to build the Casino in a pure Romanian style. Now that everything is done some papers still characterize it as "a giant perked up with all sorts of gewgaws".
        </StoryTextBlock>

        <StoryImages>
          <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-01-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-05-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-03-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-04-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-08-800.jpg"/>
        </StoryImages>

        <StoryTextBlock title="1913">
          The Casino is a high class, luxurious place. Only the rich people are able participate and the dress code is mandatory. The Casino is attracting gamblers from all over Europe. It is considered a building of perdition, as many people lose their fortunes here and end up with a bullet in their head later, in a hotel room.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-23-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-10-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-07-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-17-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-06-800.jpg"/>
        </StoryImages>

        <StoryTextBlock title="2002">
          I'm 17 and together with a colleague we are skipping classes. After getting the traditional Giant Shaorma from the Tomis Port, we are heading towards the Casino. The building doesn't look that pretty, but we don't care. We are young and the only thing that matters is that the Casino has a pool table. We make the effort to walk such a huge distance because this the cheapest place in town where we can play pool. We are getting inside the left wing of the Casino and the first thing I notice is the smell of smoke emanating from the walls. We are the only clients here. There is a bar with lots of alchohol bottles, but we don't drink. The pool table is really old, the cues are old as well and we are barely able to play. After half an hour we get pissed and leave.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-09-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-11-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-12-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-13-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-14-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-18-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-16-800.jpg"/>
        </StoryImages>

        <StoryTextBlock title="2015">
          I'm back in my hometown for a few days and now I'm heading towards the old Casino. I already know that it's a ruin and I want to take some pictures of it before they renovate it. This is of course, a joke, as nobody has any plan to do it. They promised many years in a row to renovate it, but nobody did anything.
        </StoryTextBlock>

        <StoryTextBlock>
          Getting closer and closer to the seafront, I'm starting to notice the smell, strong and salty like always! It finally feels like home! The Casino is indeed a ruin, lots of people are walking around it, many taking pictures and selfies. There is no orchestra, like in the glorious days, 100 years ago. Instead an accordionist together with his cat is trying to cheer up everybody who passes by. A nostalgic feeling fills my heart.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-19-1200.jpg" />

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-20-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-24-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-29-1200.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-22-1200.jpg"/>
        </StoryImages>

        <FullImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-32-1200.jpg"/>

        <StoryImages>
          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-25-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-27-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-28-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-26-800.jpg"/>

          <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-34-1200.jpg" />
        </StoryImages>
      </StoryPage>);
  }
}

export default CasinoPage;
