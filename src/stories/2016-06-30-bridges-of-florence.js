import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';
import {Link} from 'react-router';

const imgDirPath = "/images/stories/2016-06-30-bridges-of-florence/";

class BridgesOfFlorenceStory extends React.Component {

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "05", "2048")}
                 title="Bridges of Florence"
                 author="Dan & Ade"
                 location="Florence, Italy"
                 tags="travel, Florence, Italy">

        <StoryIntro>
          The <a href="https://en.wikipedia.org/wiki/Arno_River">Arno River</a> naturally
          splits <Link to="/stories/florence-theme-park-of-renaissance.html">Florence</Link> in
          two sides. It's now surprise that the two sides of the city are linked
          through bridges. What's interesting is how beautiful most of the bridges
          are and the way they dominate Florence's cityscape.
        </StoryIntro>

        <StoryTextBlock>
          I took the next photo from the Michelangelo Square. From here you can
          have a nice overview of the bridges. The colorful Ponte Vecchio is the
          first in line, followed by the others.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
        </StoryImages>

        <StoryTextBlock title="Ponte Vecchio">
          The most iconic bridge in Florence is Ponte Vecchio, the Old Bridge.
          This bridge is always really crowded, from far away looks like there is perpetual party.
          What's really happening is that the mass of tourists wants to take selfies
          with the river and the next bridges. There is also a market on the bridge,
          where you can buy luxury goods, like jewelry and expensive watches.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="02" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="03"
                         number2="04" />

          <PostImage dirPath={imgDirPath} number="05" />
        </StoryImages>

        <StoryTextBlock title="Ponte Santa Trinita">
          The Ponte Santa Trìnita (The Holy Trinity Bridge) is the oldest elliptic
          arch bridge in the world, the three flattened ellipses giving the structure
          its celebrated elegant appearance. This bridge is the most central one.
          We stopped here many times to eat ice cream and admire the river and the other
          bridges.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="06" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="07"
                         number2="08" />
          <PostImage dirPath={imgDirPath} number="09" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="11" />
        </StoryImages>

        <StoryTextBlock title="Ponte alla Carraia">
          The Ponte alla Carraia is a five-arched bridge spanning the River Arno
          and linking the district of Oltrarno to the rest of the city of Florence.
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
        <StoryTextBlock title="Ponte Amerigo Vespucci">
          It seems that drivers prefer this bridge, as there are always lots of
          cars using it to cross the river.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="18" />
        </StoryImages>

        <StoryTextBlock title="Ponte alle Grazie" />
        <StoryImages>
          <PostImage dirPath={imgDirPath} number="19" />
          <PostImage dirPath={imgDirPath} number="20" />
        </StoryImages>

        <StoryTextBlock title="Other Bridges">
          Ponte San Niccolo Small is a smaller, one arch bridge. Florence has other
          bridges for which I wasn't able to find the names.
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="21"
                         number2="22" />
        </StoryImages>

        <StoryTextBlock title="Overview">
          I'll end the story with an overview photo to show how beautifully
          everything fits together and how the bridges bring more personality
          to the city. Florence is for sure a city worth visiting, an architectural
          beauty! Read more about Florence <Link to="/stories/florence-theme-park-of-renaissance.html">here</Link>.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="23" />
        </StoryImages>
      </StoryPage>);
  }
}

export default BridgesOfFlorenceStory;
