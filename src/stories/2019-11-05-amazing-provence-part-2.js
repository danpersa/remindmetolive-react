import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';
import FullImageResp from '../components/story/FullImageResp';
import { Link } from 'react-router-dom';

const imgDirPath = "stories/2019-11-05-amazing-provence";

class AmazingProvencePart2Story extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath + "/nimes", "H", "image", "01")}
                 altLogo="The Nimes Arena"
                 title="Amazing Provence"
                 author="Dan"
                 location="Provence, France"
                 tags="travel, town">

        <StoryIntro>
          This is the second part of our story.
          Read the first part of the story <Link to="/stories/amazing-provence-part-1.html">here</Link>.
          Let's start in Nimes.
        </StoryIntro>
        <StoryTextBlock title="Nimes">
          The most iconic landmark in Nimes is the arena of Nimes and the statue
          of the bull fighter in front of the arena. The arena is best preserved
          Roman amphitheatre in the world.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/nimes"} number="02"
                         alt="Nimes Arena"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath + "/nimes"}
                       prefix="image"
                       number="11"
                       alt="Nimes Cathedral" />
        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath + "/nimes"}
                           number1="08"
                           alt1="Columns"
                           number2="09"
                           alt2="Diana's temple in Nimes" />
          <PostImageResp dirPath={imgDirPath + "/nimes"} number="10"
                         alt="Gardens in Nimes"/>
          <TwoPostImageResp dirPath={imgDirPath + "/nimes"}
                           number1="12"
                           alt1="Tower in Nimes"
                           number2="13"
                           alt2="Nimes Park" />
          <PostImageResp dirPath={imgDirPath + "/nimes"} number="14"
                         alt="Nimes Cathedral"/>
          <PostImageResp dirPath={imgDirPath + "/nimes"} number="03"
                        alt="The bullfigher in Nimes"/>
        </StoryImages>
        <StoryTextBlock title="Montpellier">
          We've spent a couple of days in Montpellier as well. The small town has
          an impressive amount of landmarks. The architecture is both classic and
          modern. Seems like a town of contrasts.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath + "/montpellier"}
                       prefix="image"
                       number="10"
                       alt="Porte du Peyrou, Montpellier" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="05"
                         alt="Square in Montpellier"/>

          <TwoPostImageResp dirPath={imgDirPath + "/montpellier"}
                            number1="06"
                            alt1="Statue in Montpellier"
                            number2="07"
                            alt2="Montpellier architecture" />
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="01"
                         alt="Montpellier Cathedral"/>
          <TwoPostImageResp dirPath={imgDirPath + "/montpellier"}
                            number1="02"
                            alt1="Montpellier Cathedral"
                            number2="08"
                            alt2="Montpellier Cathedral" />
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="04"
                         alt="Montpellier Cathedral"/>
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="09"
                         alt="architecture in Montpellier"/>
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="13"
                         alt="Montpellier Arch"/>
          <TwoPostImageResp dirPath={imgDirPath + "/montpellier"}
                            number1="12"
                            alt1="Park in Montpellier"
                            number2="11"
                            alt2="Montpellier gardens" />
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="14"
                          alt="Montpellier aqueduct"/>
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="15"
                         alt="Montpellier Jesus statue"/>
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="16"
                          alt="Montpellier modern architecture"/>
          <PostImageResp dirPath={imgDirPath + "/montpellier"} number="17"
                          alt="Porte du Peyrou, Montpellier"/>
        </StoryImages>


        <StoryTextBlock title="Arles">
          Arles is a small town, mainly known for its association with Vincent van Gogh,
          who produced some of his most famous paintings here.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath + "/arles"}
                       prefix="image"
                       number="10"
                       alt="Arles ruins" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/arles"} number="01"
                         alt="Arles amphitheatre"/>
          <TwoPostImageResp dirPath={imgDirPath + "/arles"}
                            number1="12"
                            alt1="Inside of church"
                            number2="04"
                            alt2="Church in Arles" />
         <PostImageResp dirPath={imgDirPath + "/arles"} number="02"
                        alt="Arles Square with Obelisk"/>
          <PostImageResp dirPath={imgDirPath + "/arles"} number="03"
                         alt="Old theather in Arles"/>
          <TwoPostImageResp dirPath={imgDirPath + "/arles"}
                            number1="06"
                            alt1="Building in Arles"
                            number2="07"
                            alt2="Arles architecture" />

          <TwoPostImageResp dirPath={imgDirPath + "/arles"}
                            number1="05"
                            alt1="Art museum in Arles"
                            number2="08"
                            alt2="Arles park" />
          <PostImageResp dirPath={imgDirPath + "/arles"} number="11"
                         alt="Portrait in Arles"/>
          <TwoPostImageResp dirPath={imgDirPath + "/arles"}
                            number1="13"
                            alt1="Arles Cathedral details"
                            number2="14"
                            alt2="Arles Cathedral details" />
          <PostImageResp dirPath={imgDirPath + "/arles"} number="15"
                         alt="Tomb in Arles"/>
          <PostImageResp dirPath={imgDirPath + "/arles"} number="16"
                         alt="Tomb Raider, Arles"/>
          <PostImageResp dirPath={imgDirPath + "/arles"} number="17"
                         alt="Arles arena"/>
        </StoryImages>
        <StoryTextBlock title="Avignon">
          Avignon is a nice fortress town. Lots of walls and great architecture.
          Read the third (and last) part of the story <Link to="/stories/amazing-provence-part-3.html">here</Link>.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath + "/avignon"}
                       prefix="image"
                       number="03"
                       alt="Avignon Fortress" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/avignon"} number="01"
                         alt="Avignon bridge"/>
          <TwoPostImageResp dirPath={imgDirPath + "/avignon"}
                           number1="04"
                           alt1="Avignon architecture"
                           number2="05"
                           alt2="Avignon Cathedral" />
          <PostImageResp dirPath={imgDirPath + "/avignon"} number="02"
                         alt="Arches in Avignon"/>
          <PostImageResp dirPath={imgDirPath + "/avignon"} number="06"
                         alt="Walls in Avignon"/>
        </StoryImages>

      </StoryPage>);
  }
}

export default AmazingProvencePart2Story;
