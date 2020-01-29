import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2018-09-05-trendy-stockholm";

class TrendyStockholmStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logoDirPath={imgDirPath}
                 logoPrefix="wide"
                 logoNumber="01"
                 altLogo="Trendy Stockholm"
                 title="Trendy Stockholm"
                 author="Dan"
                 location="Stockholm, Sweden"
                 tags="travel, city, Sweden">

        <StoryIntro>
          Stockholm impressed us last summer when we visited it, because of the
          great architecture, the big number of trendy cafes and restaurants
          but also because of its great parks and nature.
          <br/><br/>
          We recommend everybody not only to visit the old city and the museums,
          but also relax on a boat trip or organize a picnic.
        </StoryIntro>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01"
                         alt="Stockholm cityscape"/>
          <PostImageResp dirPath={imgDirPath} number="03"
                         alt="Railroads in Stockholm"/>
          <PostImageResp dirPath={imgDirPath} number="04"
                         alt="Stockholm panorama"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="02"
                       alt="Buildings in Stockholm" />
        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="05"
                         alt1="Stockholm wide seascape"
                         number2="06"
                         alt2="Stockholm coast" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="07"
                         alt1="Cranes in Stockholm"
                         number2="08"
                         alt2="Military parade in Stockholm" />
          <PostImageResp dirPath={imgDirPath} number="09"
                         alt="Stockholm riverside"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="03"
                       alt="Stockholm harbour" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="11"
                         alt="Stockholm amusement park"/>
          <PostImageResp dirPath={imgDirPath} number="12"
                         alt="Stockholm panorama"/>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="14"
                            alt1="Gröna Lund's Amusement Park"
                            number2="15"
                            alt2="German Church, Stockholm" />
          <PostImageResp dirPath={imgDirPath} number="16"
                         alt="Stockholm City Hall"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="04"
                       alt="Riddarholmen, Stockholm" />

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="05"
                       alt="Stockholm house panorama" />

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="20"
                       alt="Stockholm houses on cliffs" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="17"
                         alt="Walk around Stockholm"/>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="18"
                            alt1="Stockholm guard"
                            number2="19"
                            alt2="Guard in Stockholm" />

          <PostImageResp dirPath={imgDirPath} number="22"
                         alt="Relax on the river side"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="07"
                       alt="Factory in Stockholm" />

        <StoryTextBlock title="Vasa Museum">
          Vasa is a ship which has sunk many years ago, soon after it was launched to water,
          after sailing only around a kilometer—big fail I guess.
          It was salvaged in 1961, almost intact and a museum was built around this ship.
          We visited this musem and were impresses by how big the ship is!
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="24"
                         alt="Vasa Museum, Stockholm"/>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="25"
                            alt1="Vasa Museum, Stockholm"
                            number2="26"
                            alt2="Vasa Ship, Stockholm" />
        </StoryImages>

        <StoryTextBlock title="Stockholm Nature">
          Everywhere around there are places where you can train your sailing
          skills. There are sailboats all around!

          Stockholm has many parks not far from the old city. There is lots of
          green around and when our visit took place, we were lucky to see
          swanlings and ducklings swarming around.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="wide"
                       number="08"
                       alt="Sailboats on Stockholm river" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="31" alt="Sailboat on water" />
          <PostImageResp dirPath={imgDirPath} number="21"
                         alt="Sailboat in Stockholm"/>

          <TwoPostImageResp dirPath={imgDirPath}
                            number1="28"
                            alt1="Duck"
                            number2="29"
                            alt2="Three swanlings" />

          <PostImageResp dirPath={imgDirPath} number="30" alt="Swan with its swanlings" />

          <PostImageResp dirPath={imgDirPath} number="32" alt="Swan" />

          <PostImageResp dirPath={imgDirPath} number="33" alt="Ducks swimming" />
          <PostImageResp dirPath={imgDirPath} number="34" alt="Swan" />
        </StoryImages>
      </StoryPage>);
  }
}

export default TrendyStockholmStory;
