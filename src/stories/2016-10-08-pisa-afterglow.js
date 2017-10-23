import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import FullImageResp from '../components/story/FullImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';

const imgDirPath = "stories/2016-10-08-pisa-afterglow";

class PisaAfterglowStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath, "L", "image", "01")}
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
          <PostImageResp dirPath={imgDirPath} number="01" />
        </StoryImages>

        <FullImageResp dirPath={imgDirPath} prefix="wide" number="01" />

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="03"
                         number2="04" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="05"
                         number2="06" />
          <PostImageResp dirPath={imgDirPath} number="07" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="08"
                         number2="09" />
          <TwoPostImageResp dirPath={imgDirPath}
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
          <PostImageResp dirPath={imgDirPath} number="12" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="13"
                         number2="14" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <PostImageResp dirPath={imgDirPath} number="17" />
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
          <PostImageResp dirPath={imgDirPath} number="18" />
          <PostImageResp dirPath={imgDirPath} number="19" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="20"
                         number2="21" />
          <PostImageResp dirPath={imgDirPath} number="22" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="23"
                         number2="24" />
          <PostImageResp dirPath={imgDirPath} number="25" />
        </StoryImages>
      </StoryPage>);
  }
}

export default PisaAfterglowStory;
