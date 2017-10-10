import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2015-09-30-love-at-the-gardens-of-the-world/";

class LoveAtTheGardensOfTheWorldStory extends React.Component {

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "02", "1600")}
                 title="Celebrating Love at the Gardens of the World"
                 author="Dan & Ade"
                 location="Berlin, Germany"
                 tags="Berlin, photo-session, portraits, love, couple">

        <StoryIntro>
          Who doesn’t like a love story? This is a story about Adela and Cristi
          on a recent trip to Berlin when the cherry trees where just flowering.
          Every time we are around them they show a lot of emotion and candid feelings.
          Therefore we wanted to give them a present, a photo session to capture those
          real moments, the ones that kids or grandkids could look back on later and
          say, wow, they REALLY love each other!
        </StoryIntro>
        <StoryTextBlock>
          After many long months of waiting... cherry trees announced their peak
          bloom time in April. The best place to capture this moment in Berlin
          is at the <a href="https://en.wikipedia.org/wiki/Erholungspark_Marzahn">Gardens
          of the World</a>. No, we are  not talking about the Audrey
          Hepburn <a href="https://en.wikipedia.org/wiki/Gardens_of_the_World_with_Audrey_Hepburn">documentary</a>,
          but about one of the greenest places in Berlin, with traditional theme
          gardens from Asia, Europe and the Orient.
          <br/><br/>
          We were planning to go there for a while but never found the time for it.
          But that was about to change, because the perfect moment arrived soon:
          Adela and Cristi came to Berlin exactly when cherry trees were flowering.
          We went there together, walked through beautiful Chinese, Balinese, Oriental
          and Italian gardens, celebrated the promise of spring and witnessed love,
          happiness, playing, harmony and unity. See and judge for yourself.
        </StoryTextBlock>
        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="02"
                         number2="03" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="04"
                         number2="05" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="06"
                         number2="07" />
          <PostImage dirPath={imgDirPath} number="08" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="09"
                         number2="10" />

          <PostImage dirPath={imgDirPath} number="11" />
          <PostImage dirPath={imgDirPath} number="12" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="13"
                         number2="14" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <PostImage dirPath={imgDirPath} number="17" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="18"
                         number2="19" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="20"
                         number2="21" />
          <PostImage dirPath={imgDirPath} number="22" />
          <PostImage dirPath={imgDirPath} number="23" />
          <PostImage dirPath={imgDirPath} number="24" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="25"
                         number2="26" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="27"
                         number2="28" />
          <PostImage dirPath={imgDirPath} number="29" />
        </StoryImages>
      </StoryPage>);
  }
}
export default LoveAtTheGardensOfTheWorldStory;
