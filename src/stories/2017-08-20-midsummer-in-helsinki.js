import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2017-08-20-midsummer-in-helsinki/";

class MidsummerInHelsinkiStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "02", "2048")}
                 title="Midsummer in Helsinki"
                 author="Dan"
                 location="Helsinki, Finland"
                 tags="Helsinki, city, travel, Finland">

        <StoryIntro>
          I visited Helsinki on the Midsummer Day. Midsummer is a special holiday in Finland.
          Most of the Finns don't spend it in the city, but in waterside cottages, in the countryside,
          where they can relax, swim and party. Bonfires are something common for this day. It's an
          old tradition that continues today.
        </StoryIntro>

        <StoryTextBlock title="The Landmarks of Helsinki">
          Because during the Midsummer weekend the city it not so populate, there was a good
          chance for me to take nice photos of the main landmarks. The cityscape is dominated
          by the <a href="https://en.wikipedia.org/wiki/Helsinki_Cathedral">Helsinki Cathedral</a>,
          built in the neoclassical style. In front of the cathedral there is a nice square.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="02"
                         number2="03" />
          <PostImage dirPath={imgDirPath} number="04" />
          <PostImage dirPath={imgDirPath} number="05" />
          <PostImage dirPath={imgDirPath} number="06" />
          <PostImage dirPath={imgDirPath} number="07" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="08"
                         number2="09" />
          <PostImage dirPath={imgDirPath} number="10" />
          <PostImage dirPath={imgDirPath} number="11" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="12"
                         number2="13" />
        </StoryImages>

        <StoryTextBlock title="The Way to Suomenlinna">
          One of the nice places to spend Midsummer is Suomenlinna. Suomenlinna is an
          inhabited sea fortress built on six islands. So I took the boat to visit it.
          I slowly left Helsinki behind and on the way I took photos of some small,
          picturesque islands.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="14" />
          <PostImage dirPath={imgDirPath} number="15" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="16"
                         number2="17" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="18"
                         number2="19" />
        </StoryImages>

        <StoryTextBlock title="Suomenlinna">
          If you love nature, you'll love <a href="https://en.wikipedia.org/wiki/Suomenlinna">Suomenlinna</a>.
          It's part of the UNESCO’s World Heritage List together with the Great Wall of
          China and the Grand Canyon. The fortress here served in the defense of three countries:
          Sweden, Russia and Finland.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="20" />
          <PostImage dirPath={imgDirPath} number="21" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="22"
                         number2="23" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="24"
                         number2="25" />
          <PostImage dirPath={imgDirPath} number="26" />
          <PostImage dirPath={imgDirPath} number="27" />
          <PostImage dirPath={imgDirPath} number="28" />
          <PostImage dirPath={imgDirPath} number="29" />
          <PostImage dirPath={imgDirPath} number="30" />
          <PostImage dirPath={imgDirPath} number="31" />
        </StoryImages>

        <StoryTextBlock title="The Longest Day">
          On the midsummer day, the sun almost doesn't set. I had to wait until 1AM
          to take some night shoots of the Helsinki Cathedral. And even that late,
          it wasn't perfectly dark.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="32" />
          <PostImage dirPath={imgDirPath} number="33" />
          <PostImage dirPath={imgDirPath} number="34" />
          <PostImage dirPath={imgDirPath} number="35" />
        </StoryImages>
      </StoryPage>);
  }
}

export default MidsummerInHelsinkiStory;
