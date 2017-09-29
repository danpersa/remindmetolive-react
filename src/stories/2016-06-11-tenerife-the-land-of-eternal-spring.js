import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2016-06-11-tenerife-the-land-of-eternal-spring/";

class TenerifeTheLandOfEternalSpringStory extends React.Component {

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "07", "2048")}
                 title="Tenerife, The Land Of Eternal Spring"
                 author="Dan & Ade"
                 location="Tenerife, Spain"
                 tags="travel, Tenerife, Spain">

        <StoryIntro>
          This is a story about the largest and captivating island in the Canaries,
          "the land of eternal spring", Tenerife. From 2300m altitude to the sea
          level, from the desert and volcanic landscapes to the subtropical forests,
          beaches with black sand with spectacular cliffs, all living together.
          The “blessed isles” indeed!
        </StoryIntro>

        <StoryTextBlock>
          In March, winter is still present in the northern hemisphere and it's
          that time of the year when you eagerly want to see the sun. We definitely
          felt that way. This time we had an extra incentive: to celebrate our dear
          friend and sister in law, Adela's 30th birthday. It's hard to imagine a better
          place to be during the long winter in Europe than Tenerife, with its lunar
          landscapes, desert areas and subtropical forests. I will let you enjoy the
          great variety of unique and uneven landscapes, by starting out story with
          wonderful beaches and finish it at high altitude.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="02"
                         number2="03" />
          <PostImage dirPath={imgDirPath} number="04" />
          <PostImage dirPath={imgDirPath} number="05" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="06"
                         number2="07" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="08"
                         number2="09" />
          <PostImage dirPath={imgDirPath} number="10" />
          <PostImage dirPath={imgDirPath} number="11" />
          <PostImage dirPath={imgDirPath} number="12" />
          <PostImage dirPath={imgDirPath} number="13" />
          <PostImage dirPath={imgDirPath} number="14" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <PostImage dirPath={imgDirPath} number="17" />
          <PostImage dirPath={imgDirPath} number="18" />
          <PostImage dirPath={imgDirPath} number="19" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="20"
                         number2="21" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="22"
                         number2="23" />
          <PostImage dirPath={imgDirPath} number="24" />
        </StoryImages>

        <StoryTextBlock title="Teide National Park & Lunar Landscape">
          Created after massive volcanic explosions, parts of the island’s landscape
          are often described as "lunar". This is especially obvious in the centre
          of the island, dominated by The Teide National Park, a Unesco World Heritage
          site containing volcanic craters. Is the largest National Park of Canary
          Islands, and it's a definitely a must see.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="25" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="26"
                         number2="27" />
          <PostImage dirPath={imgDirPath} number="28" />
          <PostImage dirPath={imgDirPath} number="29" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="30"
                         number2="31" />
          <PostImage dirPath={imgDirPath} number="32" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="33"
                         number2="34" />
          <TwoPostImages dirPath={imgDirPath}
                        number1="35"
                        number2="36" />
          <PostImage dirPath={imgDirPath} number="37" />
        </StoryImages>

        <StoryTextBlock title="Los Gigantes and La Masca">
          Tenerife is not only about beautiful beaches and volcanic craters, it
          also has spectacular cliffs and mountain landscape. One of the most
          picturesque villages in Tenerife is set in a superb mountainous
          location, called La Masca. Reaching it could be an adventure, because
          it’s definitely exhilarating to drive: the road is full of twisting turns.
          To be honest I was bit scared of the road, but there's no
          need really, because ironically, the road to La Masca is actually one of
          the safest roads on Tenerife where accidents are a rarity, and that’s
          because everyone is driving so slowly.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="39" />
          <PostImage dirPath={imgDirPath} number="40" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="41"
                         number2="42" />
          <PostImage dirPath={imgDirPath} number="43" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="44"
                         number2="45" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="46"
                         number2="47" />
          <PostImage dirPath={imgDirPath} number="48" />
        </StoryImages>
      </StoryPage>);
  }
}

export default TenerifeTheLandOfEternalSpringStory;
