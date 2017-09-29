import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2016-10-08-pisa-afterglow/";

class PisaAfterglowStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "02", "2048")}
                 title="Pisa Afterglow"
                 author="Dan & Ade"
                 location="Pisa, Italy"
                 tags="travel, Pisa, Italy, monuments">

        <StoryIntro>
          When I close my eyes and visualize our time in Italy, I see everything in slow-motion.
          It's definitely a place that I am in love with. Falling in love with a place it's a unique
          feeling, it is a constant desire for more, more of the beautiful skylines, sunrises,
          sunsets, delicious food, different culture and new adventures. And the more you take in,
          the deeper you fall and the more you wish to see. It all started with Rome, continued with
          Venice, then mesmarizing <a href="https://en.wikipedia.org/wiki/Tuscany">Tuscany</a>. Now
          it is time for <a href="https://en.wikipedia.org/wiki/Pisa">Pisa</a>, a small and enchanting
          city in <a href="https://en.wikipedia.org/wiki/Tuscany">Tuscany</a>.
        </StoryIntro>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <PostImage dirPath={imgDirPath} number="02" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="03"
                         number2="04" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="05"
                         number2="06" />
          <PostImage dirPath={imgDirPath} number="07" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="08"
                         number2="09" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="11" />
        </StoryImages>

        <StoryTextBlock>
          Yes, the <a href="https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa">Leaning Tower</a> is
          spectacular — even more so in person than in pictures and has made
          <a href="https://en.wikipedia.org/wiki/Pisa">Pisa</a> famous all over the world, but
          there’s much more to Pisa than that. The medieval city boasts of 11th century gorgeous
          art, like the elaborate <a href="https://en.wikipedia.org/wiki/Pisa_Baptistery">Baptistery</a>
          and other beautiful palaces. Most of them are in the famous
          <a href="https://en.wikipedia.org/wiki/Piazza_dei_Miracoli">Square of Miracles (Piazza dei
          Miracoli)</a>. The square is surrounded by a beautiful green lawn where tourists lie down
          and relax admiring the amazing setting.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="12" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="13"
                         number2="14" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <PostImage dirPath={imgDirPath} number="17" />
        </StoryImages>

        <StoryTextBlock title="Climb up the Tower">
          Don’t just admire the square from below: the climb up the tower is a once in a lifetime
          opportunity that I highly encourage you to experience. You will enjoy both the incredible
          climb as well as the amazing views from the top.
        </StoryTextBlock>


        <StoryTextBlock title="Much more than the Tower">
          The Leaning Tower has made Pisa famous all over the world, but in addition
          to the amazing Square of Miracles, the city offers many other beautiful
          places to see. Here are some for inspiration.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="18" />
          <PostImage dirPath={imgDirPath} number="19" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="20"
                         number2="21" />
          <PostImage dirPath={imgDirPath} number="22" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="25"
                         number2="24" />
          <PostImage dirPath={imgDirPath} number="23" />
        </StoryImages>
      </StoryPage>);
  }
}

export default PisaAfterglowStory;
