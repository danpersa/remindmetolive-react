import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2016-11-12-siena-the-tuscan-beauty/";

class SienaTheTuscanBeautyStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "01", "2048")}
                 title="Siena, The Tuscan Beauty"
                 author="Dan & Ade"
                 location="Siena, Italy"
                 tags="travel, Siena, Italy, monuments, medieval">

        <StoryIntro>
          <a href="https://en.wikipedia.org/wiki/Siena">Siena</a> is a
          gloriously beautiful medieval town built upon three hills
          in the heart of scenic Tuscany. It is a city full of churches,
          museums, and great views over the surrounding countryside.
          <br/><br/>
          In the center of the town, you will
          find <a href="https://en.wikipedia.org/wiki/Piazza_del_Campo">Piazza del Campo</a>,
          a spectacular shell-shaped piazza that is simply mesmerizing.
          It is famous for
          the <a href="https://en.wikipedia.org/wiki/Palio_di_Siena">Palio</a>,
          which is a horse race running here twice a year,
          in the summer time. These races put the 17 different neighborhoods of
          Siena against each other.
          You can’t go anywhere in Siena without hearing about the Palio, it is
          what unites, but at the same time divides the Sienese more than anything else.
        </StoryIntro>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="03" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="02"
                         number2="04" />
          <PostImage dirPath={imgDirPath} number="05" />
          <PostImage dirPath={imgDirPath} number="06" />
          <PostImage dirPath={imgDirPath} number="07" />
          <PostImage dirPath={imgDirPath} number="08" />
        </StoryImages>

        <StoryTextBlock title="Climb up the Tower">
          The uniquely round-shaped Piazza del Campo is overlooked by the
          majestic <a href="https://en.wikipedia.org/wiki/Torre_del_Mangia">Torre del Mangia</a>.
          Dare to climb the 400 steps to reach the top of the tower because the
          views over the city are absolutely incredible.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="09" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="11" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="12"
                         number2="13" />
          <PostImage dirPath={imgDirPath} number="14" />
          <PostImage dirPath={imgDirPath} number="15" />
        </StoryImages>

        <StoryTextBlock title="The Cathedral">
          Another sight for the eyes is the
          beautiful <a href="https://en.wikipedia.org/wiki/Siena_Cathedral">Siena Cathedral</a>.
          The facade of the cathedral is intricate and full of detail. The
          whole cathedral was painted, sculpted, and decorated by the most celebrated
          Italian artists of that time. It is just beautiful and I’m afraid
          these words and photos just don’t give it justice.
          <br/><br/>
          The interior is absolutely jaw dropping, yet another marvel in itself.
          It is like a museum, with its black and white marble pillars, marble
          floor panels, beautiful renaissance frescos, a huge bronze dome, a
          sculpture of St. Peter by Michelangelo. It definitely gives the cathedral
          a luxurious feel, with no expense spared in displaying the historical
          wealth of Siena.
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="16"
                         number2="17" />
          <PostImage dirPath={imgDirPath} number="18" />
          <PostImage dirPath={imgDirPath} number="19" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="20"
                         number2="21" />
          <PostImage dirPath={imgDirPath} number="22" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="23"
                         number2="24" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="25"
                         number2="26" />
        </StoryImages>

        <StoryTextBlock title="What is it that makes Siena so extraordinary?">
          Siena is definitely more than a postcard city stepped in history.
          After spending a day wondering the city and soaking it all in, you can
          easily imagine what life must have been in medieval times.
          It's a city full of color and wonderful people. I can tell you more
          about what makes Siena extraordinary, but I think it is better
          to pay it a visit, because each one's experience is unique.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="27" />
          <PostImage dirPath={imgDirPath} number="28" />
        </StoryImages>
      </StoryPage>);
  }
}

export default SienaTheTuscanBeautyStory;
