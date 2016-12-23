import React from 'react';
import TwoImages from '../components/story/TwoImages';
import OneImage from '../components/story/OneImage';
import FullImage from '../components/story/FullImage';
import StoryPage from '../components/story/StoryPage';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import StoryTextBlock from '../components/story/StoryTextBlock';

const imgDir = "images/stories/2015-10-15-the-casino-of-constanta/";

class CasinoOfConstantaStory extends React.Component {

  constructor() {
    super();
  }

  image(number) {
    return imgDir + "image-" + number + "-1200.jpg";
  }

  teaser(number) {
    return imgDir + "teaser-" + number + "-2048.jpg";
  }

  render() {
    return (
      <StoryPage logo={this.teaser("01")}
                 title="The Casino Of Constanta"
                 author="Dan"
                 location="Constanta, Romania"
                 tags="seaside, casino, ruin">

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
          <OneImage src={this.image("01")} />

          <TwoImages
            src1={this.image("05")}
            src2={this.image("03")}/>

          <TwoImages
            src1={this.image("04")}
            src2={this.image("08")}/>

        </StoryImages>

        <StoryTextBlock title="1913">
          The Casino is a high class, luxurious place. Only the rich people are able participate and the dress code is mandatory. The Casino is attracting gamblers from all over Europe. It is considered a building of perdition, as many people lose their fortunes here and end up with a bullet in their head later, in a hotel room.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src={this.image("23")} />
          <TwoImages
            src1={this.image("10")}
            src2={this.image("07")}/>
          <TwoImages
            src1={this.image("17")}
            src2={this.image("06")}/>
        </StoryImages>

        <StoryTextBlock title="2002">
          I'm 17 and together with a colleague we are skipping classes. After getting the traditional Giant Shaorma from the Tomis Port, we are heading towards the Casino. The building doesn't look that pretty, but we don't care. We are young and the only thing that matters is that the Casino has a pool table. We make the effort to walk such a huge distance because this the cheapest place in town where we can play pool. We are getting inside the left wing of the Casino and the first thing I notice is the smell of smoke emanating from the walls. We are the only clients here. There is a bar with lots of alchohol bottles, but we don't drink. The pool table is really old, the cues are old as well and we are barely able to play. After half an hour we get pissed and leave.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src={this.image("09")} />
          <TwoImages
            src1={this.image("11")}
            src2={this.image("12")}/>
          <TwoImages
            src1={this.image("13")}
            src2={this.image("14")}/>
          <TwoImages
            src1={this.image("18")}
            src2={this.image("16")}/>
        </StoryImages>

        <StoryTextBlock title="2015">
          I'm back in my hometown for a few days and now I'm heading towards the old Casino. I already know that it's a ruin and I want to take some pictures of it before they renovate it. This is of course, a joke, as nobody has any plan to do it. They promised many years in a row to renovate it, but nobody did anything.
        </StoryTextBlock>

        <StoryTextBlock>
          Getting closer and closer to the seafront, I'm starting to notice the smell, strong and salty like always! It finally feels like home! The Casino is indeed a ruin, lots of people are walking around it, many taking pictures and selfies. There is no orchestra, like in the glorious days, 100 years ago. Instead an accordionist together with his cat is trying to cheer up everybody who passes by. A nostalgic feeling fills my heart.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src={this.image("19")} />
          <TwoImages
            src1={this.image("20")}
            src2={this.image("24")}/>
          <TwoImages
            src1={this.image("29")}
            src2={this.image("22")}/>
        </StoryImages>

        <FullImage src={this.image("32")}/>

        <StoryImages>
          <TwoImages
            src1={this.image("25")}
            src2={this.image("27")}/>
          <TwoImages
            src1={this.image("28")}
            src2={this.image("26")}/>
          <OneImage src={this.image("34")} />
        </StoryImages>
      </StoryPage>);
  }
}

export default CasinoOfConstantaStory;
