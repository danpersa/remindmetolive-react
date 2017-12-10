import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2016-09-10-london-after-brexit/";

class LondonAfterBrexitStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "02", "2048")}
                 title="London After Brexit"
                 author="Dan"
                 location="London, UK"
                 tags="travel, city, London, UK, monuments">

        <StoryIntro>
           We visited London the weekend after Brexit. Because of that we were
           able to catch some historic moments. Of course, we were there as tourists,
           so most of the photos are about the amazing London city and landmarks.
        </StoryIntro>

        <StoryTextBlock title="Big Ben and London Eye" />

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <PostImage dirPath={imgDirPath} number="02" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="03"
                         number2="05" />
          <PostImage dirPath={imgDirPath} number="06" />
          <PostImage dirPath={imgDirPath} number="07" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="08"
                         number2="09" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="11" />
        </StoryImages>

        <StoryTextBlock title="The Brexit Protests">
          In front of Westminster Abbey there was a crowd of people protesting
          against the BREXIT. They had banners stating that "Unity is strength".
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="12"
                         number2="13" />
          <PostImage dirPath={imgDirPath} number="14" />
        </StoryImages>

        <StoryTextBlock title="Westminster Abbey" />

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="17"
                         number2="18" />
        </StoryImages>

        <StoryTextBlock title="Buckingham Palace" />

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="19"
                         number2="20" />
          <PostImage dirPath={imgDirPath} number="21" />
          <PostImage dirPath={imgDirPath} number="22" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="23"
                         number2="24" />
        </StoryImages>

        <StoryTextBlock title="Pride in London">
          In a different part of the city people were happy because of the Pride Parade.
          This attracted a higher number of participants compared to the BREXIT protesters.
          The <a href="http://prideinlondon.org/">Pride Festival</a> took place from 10-26 June,
          with the main weekend on 25-26 June.
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="25"
                         number2="26" />
          <PostImage dirPath={imgDirPath} number="27" />
          <PostImage dirPath={imgDirPath} number="28" />
          <PostImage dirPath={imgDirPath} number="29" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="30"
                         number2="31" />
        </StoryImages>

        <StoryTextBlock title="London Emblems">
          The most emblematic things for London are the taxis and red double deckers.
          I got photos of both.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="32" />
          <PostImage dirPath={imgDirPath} number="33" />
        </StoryImages>

        <StoryTextBlock title="St. Paul's Cathedral" />

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="34"
                         number2="35" />
          <PostImage dirPath={imgDirPath} number="04" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="36"
                         number2="37" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="38"
                         number2="39" />
          <PostImage dirPath={imgDirPath} number="40" />
        </StoryImages>

        <StoryTextBlock title="London Bridge">
          The famous landmark, at the golden hour. What can be more beautiful?
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="41" />
          <PostImage dirPath={imgDirPath} number="42" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="43"
                         number2="44" />
        </StoryImages>

        <StoryTextBlock title="National Gallery and Trafalgar Square">
          Lots of fun in the Trafalgar Square. Everybody is happy here and there
          is always something happening
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImages dirPath={imgDirPath}
                         number1="45"
                         number2="46" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="47"
                         number2="48" />
          <PostImage dirPath={imgDirPath} number="49" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="50"
                         number2="51" />
          <PostImage dirPath={imgDirPath} number="51" />
          <PostImage dirPath={imgDirPath} number="53" />
        </StoryImages>
      </StoryPage>);
  }
}

export default LondonAfterBrexitStory;
