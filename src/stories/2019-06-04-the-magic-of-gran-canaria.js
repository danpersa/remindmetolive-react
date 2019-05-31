import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2019-06-04-the-magic-of-gran-canaria";

class TheMagicOfGranCanaria extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath, "H", "image", "08")}
                 altLogo="The Magic of Gran Canaria"
                 title="The Magic of Gran Canaria"
                 author="Dan"
                 location="Gran Canaria, Spain"
                 tags="travel, island, Gran Canaria, beaches">

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
          <TwoPostImageResp dirPath={imgDirPath}
                       number1="02"
                       alt1="Desert and sand"
                       number2="03"
                       alt2="Dunes of Maspalomas" />
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="04"
                       alt="Dunes of Maspalomas" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="05"
                         alt="Maspalomas sunset"/>
          <PostImageResp dirPath={imgDirPath} number="06"
                         alt="Sunset in Maspalomas"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="07"
                       alt="Palmtrees in Maspalomas during sunset" />

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
          <PostImageResp dirPath={imgDirPath} number="12"
                         alt="Las Palmas monument house"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="14"
                       alt="Hills in Gran Canaria" />

        <StoryTextBlock title="The Mountains">
          The middle of the island is the wilder part. There is no highway, so
          getting there even by car is, if you take the wrong route, not easy.
          Pico de las Nieves is one of the higher locations we enjoyed.
          <br/><br/>
          Tejada is small town in the mountains we visited twice, because in the
          first day we were to early to watch the sunset. When the sun starts to set,
          the colors here become amazing.
        </StoryTextBlock>

        <StoryImages>
         <PostImageResp dirPath={imgDirPath} number="13"
                        alt="Pico de las Nieves"/>
         <PostImageResp dirPath={imgDirPath} number="15"
                        alt="Pico de las Nieves portrait"/>
         <PostImageResp dirPath={imgDirPath} number="16"
                        alt="Pico de las Nieves"/>
         <PostImageResp dirPath={imgDirPath} number="17"
                        alt="Pico de las Nieves"/>
         <TwoPostImageResp dirPath={imgDirPath}
                           number1="18"
                           alt1="Tejeda panorama"
                           number2="19"
                           alt2="View from Tejeda" />
        <PostImageResp dirPath={imgDirPath} number="21"
                      alt="Portrait in Arte-Gaia"/>
       </StoryImages>

       <FullImageResp dirPath={imgDirPath}
                      prefix="image"
                      number="20"
                      alt="Sunset in Arte-Gaia" />

       <FullImageResp dirPath={imgDirPath}
                      prefix="image"
                      number="22"
                      alt="Sunset in Arte-Gaia" />
      <FullImageResp dirPath={imgDirPath}
                     prefix="image"
                     number="23"
                     alt="Artenara sunset" />

      <FullImageResp dirPath={imgDirPath}
                     prefix="image"
                     number="25"
                     alt="Sunset in Gran Canaria" />
       <StoryImages>
         <PostImageResp dirPath={imgDirPath} number="39"
                        alt="Playa de Amadores Sunset" />
         <PostImageResp dirPath={imgDirPath} number="24"
                        alt="El Bufadero"/>

         <TwoPostImageResp dirPath={imgDirPath}
                          number1="26"
                          alt1="Portrait in Gran Canaria"
                          number2="27"
                          alt2="Portrait in Gran Canaria" />
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
          <PostImageResp dirPath={imgDirPath} number="33"
                         alt="Taurito Beach"/>
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="34"
                            alt1=""
                            number2="35"
                            alt2="" />
          <PostImageResp dirPath={imgDirPath} number="44" alt="Beach" />
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="36"
                       alt="Gran Canaria east coast" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="37"
                         alt="Playa de la Laja" />
          <PostImageResp dirPath={imgDirPath} number="38"
                         alt="Las Palmas panorama"/>

          <PostImageResp dirPath={imgDirPath} number="45" alt="Seascape sunset" />
          <TwoPostImageResp dirPath={imgDirPath}
                            number1="40"
                            alt1="Rocks, see and mountains"
                            number2="41"
                            alt2="Fisherman jumping" />


          <PostImageResp dirPath={imgDirPath} number="42" alt="Portrait in Gran Canaria" />
          <PostImageResp dirPath={imgDirPath} number="43" alt="Gran Canaria beauty" />
          <PostImageResp dirPath={imgDirPath} number="28" alt="Sunset and boat"/>
        </StoryImages>

      </StoryPage>);
  }
}

export default TheMagicOfGranCanaria;
