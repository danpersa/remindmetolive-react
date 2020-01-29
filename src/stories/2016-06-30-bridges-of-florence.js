import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import FullImageResp from '../components/story/FullImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import { Link } from 'react-router-dom';

const imgDirPath = "stories/2016-06-30-bridges-of-florence";

class BridgesOfFlorenceStory extends React.Component {

  render() {
    return (
      <StoryPage logoDirPath={imgDirPath}
                 logoPrefix="wide"
                 logoNumber="02"
                 altLogo="Santa Trinita Bridge in Florence"
                 title="Bridges of Florence"
                 author="Dan & Ade"
                 location="Florence, Italy"
                 tags="travel, Florence, Italy">

        <StoryIntro>
          The <a href="https://en.wikipedia.org/wiki/Arno_River">Arno River</a> naturally
          splits <Link to="/stories/florence-theme-park-of-renaissance.html">Florence</Link> in
          two sides. It&apos;s now surprise that the two sides of the city are linked
          through bridges. What&apos;s interesting is how beautiful most of the bridges
          are and the way they dominate Florence&apos;s cityscape.
        </StoryIntro>

        <StoryTextBlock title="">
          I took the next photo from the Michelangelo Square. From here you can
          have a nice overview of the bridges. The colorful Ponte Vecchio is the
          first in line, followed by the others.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01" alt="Florence bridges panorama from above" />
        </StoryImages>

        <StoryTextBlock title="Ponte Vecchio">
          The most iconic bridge in Florence is Ponte Vecchio, the Old Bridge.
          This bridge is always really crowded, from far away looks like there is perpetual party.
          What&apos;s really happening is that the mass of tourists wants to take selfies
          with the river and the next bridges. There is also a market on the bridge,
          where you can buy luxury goods, like jewelry and expensive watches.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath} prefix="wide" number="01" alt="Ponte Vecchio, Florence"/>

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="03"
                         alt1="Ponte Vecchio arch"
                         number2="04"
                         alt2="Ponte Vecchio detail" />

          <PostImageResp dirPath={imgDirPath} number="05" alt="Uomo comune, Florence" />
        </StoryImages>

        <StoryTextBlock title="Ponte Santa Trinita">
          The Ponte Santa Trìnita (The Holy Trinity Bridge) is the oldest elliptic
          arch bridge in the world, the three flattened ellipses giving the structure
          its celebrated elegant appearance. This bridge is the most central one.
          We stopped here many times to eat ice cream and admire the river and the other
          bridges.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="06" alt="The Holy Trinity bridge, Florence" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="07"
                         alt1="Portrait at the Ponte Santa Trinita, Florence"
                         number2="08"
                         alt2="Portrait at the Ponte Santa Trinita, Florence" />
        </StoryImages>

        <FullImageResp dirPath={imgDirPath} prefix="wide" number="03" alt="Ponte Santa Trinita, Florence"/>

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="10"
                         alt1="Ponta Santa Trinita arch"
                         number2="11"
                         alt2="The Holy Trinity bridge detail" />
        </StoryImages>

        <StoryTextBlock title="Ponte alla Carraia">
          The Ponte alla Carraia is a five-arched bridge spanning the River Arno
          and linking the district of Oltrarno to the rest of the city of Florence.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="12" alt="Ponte alla Carraia, Florence" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="13"
                         alt1="Ponte alla Carraia, Florence"
                         number2="14"
                         alt2="Ponte alla Carraia, Florence" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="15"
                         alt1="Ponte alla Carraia with clouds, Florence"
                         number2="16"
                         alt2="Portrait at the Ponte alla Carraia" />
          <PostImageResp dirPath={imgDirPath} number="17" alt="Ponte alla Carraia with clouds" />
        </StoryImages>

        <StoryTextBlock title="Ponte Amerigo Vespucci">
          It seems that drivers prefer this bridge, as there are always lots of
          cars using it to cross the river.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="18" alt="Ponte Amerigo Vespucci, Florence" />
        </StoryImages>

        <StoryTextBlock title="Ponte alle Grazie">Another great bridge</StoryTextBlock>
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="19" alt="Ponte alle Grazie, Florence" />
          <PostImageResp dirPath={imgDirPath} number="20" alt="Ponte alle Grazie, Florence" />
        </StoryImages>

        <StoryTextBlock title="Other Bridges">
          Ponte San Niccolo Small is a smaller, one arch bridge. Florence has other
          bridges for which I wasn&apos;t able to find the names.
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="21"
                         alt1="Florence bridge"
                         number2="22"
                         alt2="Bridge in Florence" />
        </StoryImages>

        <StoryTextBlock title="Overview">
          I&apos;ll end the story with an overview photo to show how beautifully
          everything fits together and how the bridges bring more personality
          to the city. Florence is for sure a city worth visiting, an architectural
          beauty! Read more about Florence <Link to="/stories/florence-theme-park-of-renaissance.html">here</Link>.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="23" alt="All Florence bridges" />
        </StoryImages>
      </StoryPage>);
  }
}

export default BridgesOfFlorenceStory;
