import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2019-08-17-fuerteventura-the-paradise-island";

class FuerteventuraTheParadiseIsland extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath, "H", "image", "01")}
                 altLogo="Fuerteventura – The Paradise Island"
                 title="Fuerteventura – The Paradise Island"
                 author="Dan"
                 location="Fuerteventura, Spain"
                 tags="travel, island, Fuerteventura, beaches">

        <StoryIntro>
          Gran Canaria is a small paradise: there is sun, there are beaches, there are
          mountains, wild places but also touristic zones.
          <br/><br/>
          The first location which impressed us are the Dunes of Maspalomas: here,
          although really close to civilization, towns and beaches, you feel
          like in the desert. You can walk for a long time (and walking through
          the hot sand is not easy), without seeing anything but the dunes.
          The sunsets we watched here were amazing!
        </StoryIntro>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="02"
                         alt="Maspalomas sunset"/>
          <PostImageResp dirPath={imgDirPath} number="03"
                         alt="Sunset in Maspalomas"/>
          <PostImageResp dirPath={imgDirPath} number="04"
                         alt="Sunset in Maspalomas"/>
          <PostImageResp dirPath={imgDirPath} number="05"
                         alt="Sunset in Maspalomas"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="06"
                       alt="Palmtrees in Maspalomas during sunset" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="07"
                         alt="Sunset in Maspalomas"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="08"
                       alt="Las Palmas, Gran Canaria" />
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="09"
                       alt="Las Palmas, Gran Canaria" />
        <StoryTextBlock title="Las Palmas">
          Las Palmas is the capital of Gran Canaria. Here are lots of really
          nice restaurants, cafes and monuments. The Cathedral is really impressive.
          We recommend higher locations, like the Mirador Cuatro Cañones, where
          you can see how impressive the city is.
        </StoryTextBlock>
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="10"
                         alt="Las Palmas panorama"/>
          <PostImageResp dirPath={imgDirPath} number="11"
                         alt="Cathedral of Las Palmas"/>
          <TwoPostImageResp dirPath={imgDirPath}
                           number1="12"
                           alt1="Portrait in Gran Canaria"
                           number2="14"
                           alt2="Portrait in Gran Canaria" />
          <PostImageResp dirPath={imgDirPath} number="13"
                         alt="Las Palmas monument house"/>
        </StoryImages>

        <StoryTextBlock title="The Mountains">
          The middle of the island is the wilder part. There is no highway, so
          getting there even by car is, if you take the wrong route, not easy.
          Pico de las Nieves is one of the higher locations we enjoyed.
          <br/><br/>
          Tejada is small town in the mountains we visited twice, because in the
          first day we were to early to watch the sunset. When the sun starts to set,
          the colors here become amazing.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="15"
                       alt="Artenara sunset" />
        <StoryImages>
         <PostImageResp dirPath={imgDirPath} number="16"
                        alt="Pico de las Nieves"/>
         <PostImageResp dirPath={imgDirPath} number="17"
                        alt="Pico de las Nieves"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="19"
                       alt="Artenara sunset" />
        <StoryImages>
         <PostImageResp dirPath={imgDirPath} number="18"
                        alt="Pico de las Nieves"/>
        <PostImageResp dirPath={imgDirPath} number="20"
                       alt="Portrait in Arte-Gaia"/>
        <PostImageResp dirPath={imgDirPath} number="21"
                       alt="Portrait in Arte-Gaia"/>
        <PostImageResp dirPath={imgDirPath} number="22"
                       alt="Portrait in Arte-Gaia"/>
        <PostImageResp dirPath={imgDirPath} number="23"
                       alt="Portrait in Arte-Gaia"/>
       </StoryImages>

       <StoryImages>

         <PostImageResp dirPath={imgDirPath} number="24"
                        alt="Portrait in Arte-Gaia"/>
         <PostImageResp dirPath={imgDirPath} number="25"
                        alt="Portrait in Arte-Gaia"/>
         <TwoPostImageResp dirPath={imgDirPath}
                          number1="26"
                          alt1="Portrait in Gran Canaria"
                          number2="27"
                          alt2="Portrait in Gran Canaria" />
         <PostImageResp dirPath={imgDirPath} number="28"
                        alt="Portrait in Arte-Gaia"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="29"
                       alt="Beach in Gran Canaria" />

        <StoryTextBlock title="The Beaches in Gran Canaria">
          Our favorite beach was Taurito. It was slightly less crowded and there
          was a nice bar where we could enjoy some sangria or cocktails. But we
          visited many others as well.
          <br/><br/>
          Don&apos;t forget to visit &quot;El Bufadero&quot;, the water goes up and down through
          some rocks creating an amazing effect.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="30"
                         alt="Beach in Gran Canaria"/>
          <PostImageResp dirPath={imgDirPath} number="31"
                         alt="Taurito Beach"/>
          <PostImageResp dirPath={imgDirPath} number="32"
                         alt="Port in Gran Canaria"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="33"
                       alt="Beach in Gran Canaria" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="34"
                         alt="Taurito Beach"/>
          <PostImageResp dirPath={imgDirPath} number="35"
                         alt="Taurito Beach"/>
          <PostImageResp dirPath={imgDirPath} number="36" alt="Beach" />
        </StoryImages>
      </StoryPage>);
  }
}

export default FuerteventuraTheParadiseIsland;
