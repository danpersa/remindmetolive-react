import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2017-12-15-cretan-sunsets";

class CretanSunsetsStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath, "H", "image", "40")}
                 altLogo="Sunset in Crete"
                 title="Cretan Sunsets"
                 author="Dan"
                 location="Crete, Greece"
                 tags="travel, island, Greece">

        <StoryIntro>
           xxx
        </StoryIntro>

        <StoryTextBlock title="Chania">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01"
                         alt="Sunset, Lighthouse in Chania"/>
          <PostImageResp dirPath={imgDirPath} number="02"
                         alt="Chania Port"/>
          <PostImageResp dirPath={imgDirPath} number="03"
                         alt="Buildings in Chania"/>
          <PostImageResp dirPath={imgDirPath} number="04"
                         alt="Chania Pier and Lighthouse"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="05"
                         alt1="Chania Horse Carrige"
                         number2="06"
                         alt2="Old Man in Crete" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="07"
                         alt1="Cretan Painter"
                         number2="08"
                         alt2="Cretan Painter" />
          <PostImageResp dirPath={imgDirPath} number="09"
                         alt="Watching the Chania sunset"/>
        </StoryImages>
        <StoryTextBlock title="Heraklion">
          xxx
        </StoryTextBlock>
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="10"
                         alt="Knossos Palace"/>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="11"
                         alt1="Knossos Palace"
                         number2="12"
                         alt2="Knossos Palace" />
          <PostImageResp dirPath={imgDirPath} number="13"
                         alt="Koules Fortress"/>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="14"
                            alt1="Saint Minas Cathedral, Heraklion"
                            number2="15"
                            alt2="Church of Saint Titus, Heraklion" />
        </StoryImages>

        <StoryTextBlock title="Rethimno">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="16"
                         alt="Rethimno Lighthouse, Crete"/>
        </StoryImages>

        <StoryTextBlock title="Agia Galini">
           xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="17"
                         alt="Agia Galini, Crete"/>
        </StoryImages>

        <StoryTextBlock title="Seitan Limania Beach">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="18"
                         alt="Mountains in Crete"/>
          <PostImageResp dirPath={imgDirPath} number="19"
                         alt="The Road to Seitan Limania Beach"/>
          <PostImageResp dirPath={imgDirPath} number="20"
                         alt="Seitan Limania Beach, Crete"/>
          <PostImageResp dirPath={imgDirPath} number="21"
                         alt="Seitan Limania Beach, Crete"/>
          <PostImageResp dirPath={imgDirPath} number="22"
                         alt="Cretan Goat"/>
        </StoryImages>

        <StoryTextBlock title="Matala Beach">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="23"
                         alt="Matala Beach, Crete"/>
        </StoryImages>

        <StoryTextBlock title="Praveli Beach">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="24"
                         alt="Preveli Beach, Crete"/>
        </StoryImages>

        <StoryTextBlock title="Balos Beach">
          xxxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="25" alt="Rocky Landscape, Crete" />
          <PostImageResp dirPath={imgDirPath} number="26" alt="Balos Beach, Crete" />
          <PostImageResp dirPath={imgDirPath} number="27" alt="Balos Beach, Crete" />
        </StoryImages>

        <StoryTextBlock title="Other Beaches">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="28" alt="Cretan Beach" />
          <PostImageResp dirPath={imgDirPath} number="29" alt="Royal Blue Resort Beach, Crete" />
          <PostImageResp dirPath={imgDirPath} number="30" alt="Cretan Beach" />
          <PostImageResp dirPath={imgDirPath} number="31" alt="Rocky Cretan Beach" />
          <PostImageResp dirPath={imgDirPath} number="32" alt="Cretan Beach and Mountains" />
        </StoryImages>

        <StoryTextBlock title="The Mountains">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="33" alt="Crete Sea and Mountains" />
          <PostImageResp dirPath={imgDirPath} number="34" alt="Mountains in Crete" />
          <PostImageResp dirPath={imgDirPath} number="35" alt="Cretan Mountains" />
          <PostImageResp dirPath={imgDirPath} number="36" alt="Sunset in Cretan Mountains" />
        </StoryImages>

        <StoryTextBlock title="The Sunsets">
          xxx
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="37" alt="Sunset, Crete" />
          <PostImageResp dirPath={imgDirPath} number="38" alt="Cretan sunset" />
          <PostImageResp dirPath={imgDirPath} number="39" alt="Fortezza Castle, Rethimno" />
          <PostImageResp dirPath={imgDirPath} number="40" alt="Santa Maria delle Grazie, Milan" />
        </StoryImages>
      </StoryPage>);
  }
}

export default CretanSunsetsStory;
