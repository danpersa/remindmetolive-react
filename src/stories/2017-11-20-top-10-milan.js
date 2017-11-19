import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2017-11-20-top-10-milan";

class SummerInAmsterdamStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath, "L", "wide", "04")}
                 altLogo="The Milan Dome"
                 title="Top 10 Milan"
                 author="Dan"
                 location="Milan, Italy"
                 tags="travel, city, Italy">

        <StoryIntro>
           I usually need a few days to take a few good photos in a new city. I took
           me 3 hours to take the ones in Amsterdam. That says a lot! The weather was
           great, the sky was blue and perfect—with mushy clouds—and the light was nice.
           In the summer, the sun stays up on the sky until late and as the city center
           is round, there are always a few sunny streets, with good light!
           You only have to search for them!
        </StoryIntro>

        <StoryTextBlock title="The Milan Cathedral">
          Amsterdam is in continuous movement! Tourists and locals are swarming the
          small streets of Netherlands' capital. At every corner there is something
          happening. Here is a nice square, with people resting in the sun and here
          is another one, where somebody is entertaining the toursits with a show!
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01"
                         alt="The Milan Cathedral"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="02"
                         alt1="The Milan Dome"
                         number2="03"
                         alt2="The Milan Cathedral Square" />
        </StoryImages>
        <StoryTextBlock title="Galleria Vittorio Emanuele II">
          Amsterdam is in continuous movement! Tourists and locals are swarming the
          small streets of Netherlands' capital. At every corner there is something
          happening. Here is a nice square, with people resting in the sun and here
          is another one, where somebody is entertaining the toursits with a show!
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="01"
                       alt="The Milan Cathedral Queue" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="05"
                         alt="Galleria Vittorio Emanuele II entrance"/>
          <PostImageResp dirPath={imgDirPath} number="06"
                         alt="Galleria Vittorio Emanuele II interior"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="07"
                         alt1="Galleria Vittorio Emanuele II"
                         number2="08"
                         alt2="Basilica of Sant'Eustorgio" />
        </StoryImages>

        <StoryTextBlock title="Basilica of Sant'Eustorgio">
          It's no surprise that Amsterdam has lots of <a target="blank" href="https://en.wikipedia.org/wiki/Canals_of_Amsterdam">canals</a>.
          There are kilometers of canals, about 90 islands and 1,500 bridges here.
          Plenty of space for the tourists to do cruises around the city. Considering
          how many canals there are, boats can be a good option for getting
          from one part of the city to another. Or to throw a boat party!
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="09" alt="Basilica of Sant'Eustorgio, Milan" />
        </StoryImages>

        <StoryTextBlock title="Basilica di San Lorenzo">
          It's no surprise that Amsterdam has lots of <a target="blank" href="https://en.wikipedia.org/wiki/Canals_of_Amsterdam">canals</a>.
          There are kilometers of canals, about 90 islands and 1,500 bridges here.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="02"
                       alt="Basilica di San Lorenzo, Milan" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="11" alt="Basilica di San Lorenzo, Milan" />
          <PostImageResp dirPath={imgDirPath} number="12" alt="Basilica di San Lorenzo and columns, Milan" />
        </StoryImages>

        <StoryTextBlock title="Sforza Castle">
          Amsterdam is the most bicycle friendly capital of Europe.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="13" alt="Sforza Castle, Milan"/>
          <PostImageResp dirPath={imgDirPath} number="14" alt="Sforza Castle Fountain, Milan"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="15"
                         alt1="Sforza Castle arches, Milan"
                         number2="16"
                         alt2="Sforza Castle arches, Milan" />

          <PostImageResp dirPath={imgDirPath} number="17" alt="Sforza Castle inner yard, Milan"/>
          <PostImageResp dirPath={imgDirPath} number="18" alt="Parco Sempione, Milan"/>
        </StoryImages>

        <StoryTextBlock title="Porta Sempione">
          When it comes to architecture, Amsterdam is full of surprises. You can find
          small houses from the 17th century as well as large museums, palaces or cathedrals.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="03"
                       alt="Porta Sempione" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="20" alt="Porta Sempione" />
        </StoryImages>

        <StoryTextBlock title="Porta Ticinese">
          When it comes to architecture, Amsterdam is full of surprises. You can find
          small houses from the 17th century as well as large museums, palaces or cathedrals.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="21" alt="Porta Ticinese, Milan" />
        </StoryImages>

        <StoryTextBlock title="San Bernardino alle Ossa">
          When it comes to architecture, Amsterdam is full of surprises. You can find
          small houses from the 17th century as well as large museums, palaces or cathedrals.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="22" alt="San Bernardino alle Ossa, Milan" />
        </StoryImages>

        <StoryTextBlock title="Santa Maria delle Grazie">
          When it comes to architecture, Amsterdam is full of surprises. You can find
          small houses from the 17th century as well as large museums, palaces or cathedrals.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="23" alt="Santa Maria delle Grazie, Milan" />
        </StoryImages>

        <StoryTextBlock title="The Patterns">
          When it comes to architecture, Amsterdam is full of surprises. You can find
          small houses from the 17th century as well as large museums, palaces or cathedrals.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="24"
                       alt="Milan windows" />


        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="25" alt="Milan arches" />
          <PostImageResp dirPath={imgDirPath} number="26" alt="Milan round arches" />
          <PostImageResp dirPath={imgDirPath} number="27" alt="Milan windows and bikes" />

          <TwoPostImageResp dirPath={imgDirPath}
                         number1="28"
                         alt1="Milan building facade"
                         number2="29"
                         alt2="Milan wall, trees and windows"/>
          <PostImageResp dirPath={imgDirPath} number="30" alt="Sforza Castle inner yard with lake, Milan" />
        </StoryImages>
      </StoryPage>);
  }
}

export default SummerInAmsterdamStory;
