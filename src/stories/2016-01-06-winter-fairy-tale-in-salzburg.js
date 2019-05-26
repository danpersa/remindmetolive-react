import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2016-01-06-winter-fairy-tale-in-salzburg/";

class WinterFairyTaleInSalzburgStory extends React.Component {

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "01", "2048")}
                 title="Winter Fairy Tale in Salzburg"
                 author="Dan & Ade"
                 location="Salzburg, Austria"
                 tags="Salzburg, winter, snow, Austria">

        <StoryIntro>
          Salzburg deeply covered in snow is a unique backdrop for any Christmas
          or New Year celebration. And I say this because the days we spent last
          winter in Salzburg felt like stepping into a fairy tale. After all, it
          is the home of Wolfgang Amadeus Mozart as well as The Sound of Music—one
          of my favorite musicals of all times. So you can imagine the excitement
          to discover the romantic city, the streets, as well as the hills, the
          places where we were all introduced to Fraulein Maria and the von
          Trapp family, to hear Mozart’s music.
        </StoryIntro>

        <StoryTextBlock>
          On the first morning in Salzburg I rushed out of bed and went outside to
          discover the city and meet our friends. It was still snowing and big
          snowflakes were dancing everywhere, similar to the night we arrived.
          This was too good to be true: the streets of the Old Town looked like
          they&apos;re covered with sugar icing and alive with the sound of Mozart, the
          remaining Christmas markets full of merry shoppers, Glühwein, gingerbread
          and glitter.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="02"
                         number2="03" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="04"
                         number2="05" />
          <PostImage dirPath={imgDirPath} number="06" />
          <PostImage dirPath={imgDirPath} number="07" />
          <PostImage dirPath={imgDirPath} number="08" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="09"
                         number2="10" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="11"
                         number2="12" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="13"
                         number2="14" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <PostImage dirPath={imgDirPath} number="17" />
        </StoryImages>

        <StoryTextBlock title="Disovering buildings in Salzburg">
          And so we started discovering Salzburg with its grey stone buildings and
          dark river. We walked through Mozart Square, along The Getreidegasse—Salzburg&apos;s
          most famous shopping street and then Residence Square, a magnificent
          forecourt between the two residential palaces of the archbishops of
          Salzburg. The square is bordered by a Catholic Cathedral, also known
          as the Salzburger Dom.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="18" />
          <PostImage dirPath={imgDirPath} number="19" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="20"
                         number2="21" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="22"
                         number2="23" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="24"
                         number2="25" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="26"
                         number2="27" />
          <PostImage dirPath={imgDirPath} number="28" />
        </StoryImages>

        <StoryTextBlock title="The Alps and Hohensalzburg Fortress">
          On top of the Festungsberg—a hill in the middle of the city, sitting
          majestically high up above the city, surrounded by the breathtaking Alps,
          there is the Hohensalzburg Fortress, Salzburg’s best known landmark, the
          largest completely preserved medieval fortress in Central Europe, dating
          back to the 11th Century. It still has the charm of the ages gone by.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="29" />
          <PostImage dirPath={imgDirPath} number="30" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="31"
                         number2="32" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="33"
                         number2="34" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="35"
                         number2="36" />
          <PostImage dirPath={imgDirPath} number="37" />
          <PostImage dirPath={imgDirPath} number="38" />
        </StoryImages>

        <StoryTextBlock title="Happy New Year!">
          With an amazing firework display from the Hohensalzburg Fortress, highlighting
          the picturesque, splendid Baroque buildings in sparkling colors, Salzburg
          welcomes the New Year with style. We went for the countdown with the countless
          merry revealers on ‘Staatsbrücke’ bridge where we got a fantastic view of the
          New Year’s spectacle. Ten, nine, eight … Happy New Year!
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="39" />
        </StoryImages>
      </StoryPage>);
  }
}

export default WinterFairyTaleInSalzburgStory;
