import React from 'react';
import TwoImages from '../components/story/TwoImages';
import OneImage from '../components/story/OneImage';
import ThreeImages from '../components/story/ThreeImages';
import WideFullImage from '../components/story/WideFullImage';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';

const imgDirPath = "/images/stories/2017-01-15-florence-theme-park-of-renaissance/";

class FlorenceStory extends React.Component {

  constructor() {
    super();
  }

  image(number) {
    return imgDirPath + "image-" + number + "-1200.jpg";
  }

  wide(number) {
    return `${imgDirPath}"wide-${number}-2048.jpg`;
  }

  render() {
    return (
      <StoryPage logo={this.wide("10")}
                 title="Flornce Rulz"
                 author="Dan & Ade"
                 location="Florence, Italy"
                 tags="travel, Florence, Italy">

        <StoryIntro>
         When I close my eyes and visualize our time in Italy, I see everything in slow-motion. It's definitely a place that I am in love with. Falling in love with a place it's a unique feeling, it is a constant desire for more, more of the beautiful skylines, sunrises, sunsets, delicious food, different culture and new adventures. And the more you take in, the deeper you fall and the more you wish to see. It all started with Rome, continued with Venice, then mesmarizing Tuscany. Now it is time for Pisa, a small and enchanting city in Tuscany.
        </StoryIntro>

        <StoryTextBlock>
          Yes, the Leaning Tower is spectacular — even more so in person than in pictures and has made Pisa famous all over the world, but there’s much more to Pisa than that. The medieval city boasts of 11th century gorgeous art, like the elaborate Baptistery and other beautiful palaces. Most of them are in the famous Square of Miracles (Piazza dei Miracoli). The square is surrounded by a beautiful green lawn where tourists lie down and relax admiring the amazing setting.
        </StoryTextBlock>

        <StoryImages>

          <OneImage src={this.image("02")} />

          <ThreeImages
            src1={this.image("03")}
            src2={this.image("04")}
            src3={this.image("05")}/>

          <TwoImages
            src1={this.image("06")}
            src2={this.image("07")}/>

          <OneImage src={this.image("08")} />

          <ThreeImages
            src1={this.image("09")}
            src2={this.image("10")}
            src3={this.image("11")}/>

          <TwoImages
            src1={this.image("12")}
            src2={this.image("13")}/>

        </StoryImages>

        <WideFullImage dirPath={imgDirPath} number="02" />

        <StoryImages>

          <OneImage src={this.image("15")} />

          <TwoImages
            src1={this.image("16")}
            src2={this.image("17")}/>

          <OneImage src={this.image("18")} />

          <TwoImages
            src1={this.image("19")}
            src2={this.image("20")}/>

          <TwoImages
            src1={this.image("21")}
            src2={this.image("22")}/>
        </StoryImages>
        <StoryTextBlock title="Bridges of Florence">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>

        <WideFullImage dirPath={imgDirPath} number="03" />

        <StoryImages>

          <TwoImages
            src1={this.image("24")}
            src2={this.image("25")}/>

          <TwoImages
            src1={this.image("26")}
            src2={this.image("27")}/>

        </StoryImages>
        <StoryTextBlock title="Climb up the Tower">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>

        <WideFullImage dirPath={imgDirPath} number="04" />

        <StoryImages>

          <TwoImages
            src1={this.image("29")}
            src2={this.image("30")}/>

          <OneImage src={this.image("31")} />
        </StoryImages>

        <StoryTextBlock title="Michelangelo Square">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>

        <WideFullImage dirPath={imgDirPath} number="11" />

        <StoryImages>
          <OneImage src={this.image("33")} />
        </StoryImages>

        <StoryTextBlock title="Climb up the Tower">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime opportunity that I highly encourage you to experience. You will enjoy both the incredible climb as well as the amazing views from the top.
        </StoryTextBlock>

        <WideFullImage dirPath={imgDirPath} number="05" />

        <StoryImages>
          <TwoImages
            src1={this.image("35")}
            src2={this.image("36")}/>
          <OneImage src={this.image("37")} />
          <OneImage src={this.image("38")} />
          <OneImage src={this.image("39")} />
          <TwoImages
            src1={this.image("40")}
            src2={this.image("41")}/>

        </StoryImages>

        <WideFullImage dirPath={imgDirPath} number="08" />

        <StoryImages>
          <TwoImages
            src1={this.image("43")}
            src2={this.image("44")}/>
          <OneImage src={this.image("45")} />
          <OneImage src={this.image("46")} />
        </StoryImages>

      </StoryPage>);
  }
}

export default FlorenceStory;
