import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2016-05-17-lanzarote-beaches/";

class LanzaroteBeachesStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "02", "1600")}
                 title="Lanzarote—Beaches"
                 author="Dan & Ade"
                 location="Lanzarote, Spain"
                 tags="travel, Lanzarote, beach, Spain">

        <StoryIntro>
          After spending a day driving around the island and being mesmerized by
          the <a href="/stories/lunar-landscapes-of-lanzarote.html">volcanic landscape</a> we
          were totally in full holiday mode.
          No wonder next day the question that popped was: what sort of beach do we fancy today?
          When you are on holiday in Lanzarote, this is the sort of problem you need to solve!
        </StoryIntro>

        <StoryTextBlock title="The Papagayo Beach">
          On top of our list was Papagayo, the most well known of all the beaches around
          Playa Blanca—The White Beach.
          The beach is hidden away in an area of volcanic hills, therefore the road to
          the beach was full of adventure.
          We were lost a couple of times and ended up taking a rather bumpy dirt road.
          It was certainly worth it, because when we arrived at the beach we understood
          why it was so hard to reach.
          Papagayo, with its fine, pale golden sand and crystal-clear waters, sheltered
          by cliffs, is considered to be the most beautiful beach in Lanzarote.
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
          <TwoPostImages dirPath={imgDirPath}
                         number1="07"
                         number2="08" />
          <PostImage dirPath={imgDirPath} number="09" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="11" />
        </StoryImages>

        <StoryTextBlock title="The Famara Beach">
          On the northwest coast of the island, away from the resorts, there is
          Famara beach, a 3 km long stretch of sand and dunes.
          It’s a beautiful and unique landscape because it borders with a mountain
          on one side.
          Pedro Almodóvar chose this dramatic setting to shoot some key scenes of
          his last film, Broken Embraces.
          It's also the perfect playground for surfers or kiters. It’s hard not to
          mark this place as your favorite.
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="12"
                         number2="13" />
          <PostImage dirPath={imgDirPath} number="14" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <PostImage dirPath={imgDirPath} number="17" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="18"
                         number2="19" />
        </StoryImages>

        <StoryTextBlock title="Black Sand Beaches">
          Lanzarote emerged from the sea as a result of volcanic activity,
          but only a few of its beaches have black sand. Here are some of them:
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="20" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="21"
                         number2="22" />
          <PostImage dirPath={imgDirPath} number="23" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="24"
                         number2="25" />
          <PostImage dirPath={imgDirPath} number="26" />
        </StoryImages>
      </StoryPage>);
  }
}

export default LanzaroteBeachesStory;
