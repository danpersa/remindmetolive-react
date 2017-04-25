import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import WideFullImage from '../components/story/WideFullImage';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2015-09-29-lunar-landscapes-of-lanzarote/";

class LunarLandscapesOfLanzaroteStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "01", "1600")}
                 title="The Lunar Landscapes of Lanzarote"
                 author="Dan & Ade"
                 location="Lanzarote, Spain"
                 tags="travel, Lanzarote, Spain">

        <StoryIntro>
          This is a story about a captivating place, approximately 125 km off
          the coast of Africa. A place you would choose to see for various reasons:
          its arid volcanic landscapes, the wild and stunning beaches, the taste
          of a wine with a bit of an ash flavour, the small white villages washed
          by the Atlantic Ocean. It's the story of Lanzarote, an amazing island
          in the Canaries.
        </StoryIntro>

        <StoryTextBlock>
          For his 30th birthday, Dan wanted to escape the chilly winter weather
          and to go in the Canaries. It seemed the perfect destination for us:
          sunny and warm summer days at the beginning of March, only a couple of
          hours away from Berlin, majestic landscapes, lying on the beach and
          listen to the sound of splashing waves. From the seven different and
          unique islands we choose Lanzarote.
        </StoryTextBlock>

        <StoryTextBlock title="Los Hervideros, a spectacle of nature">
          Lanzarote welcomed us with a jaw-dropping spectacle of nature:
          the ocean waves dramatically whipping the bizarre-shaped cliffs forcing
          water into the labyrinth of caves. This is “Los Hervideros”, a breathtaking
          place you will instantly fall in love. It is our favourite place from
          the island and words are not enough to describe it.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="02"
                         number2="03" />

          <PostImage dirPath={imgDirPath} number="04" />
          <PostImage dirPath={imgDirPath} number="05" />
        </StoryImages>

        <StoryTextBlock title="El Golfo & Lago Verde">
          After driving a short distance along the south-western coastline from
          Los Hervideros we encountered a great canvas of Nature, “El Golfo & Lago Verde”:
          inside of a closed volcano cone, there was a striking green lagoon filled with
          volcanic minerals and a beach of black pebbles washed by the blue waters of the
          Atlantic Ocean. The contrast between the green color (due to phytoplankton
          that lives beneath the surface ) of the lagoon and the blue water of the
          ocean is simply amazing! I will let you judge it by yourself, but I think
          Iulia with her beautiful smile agrees with me.
        </StoryTextBlock>


        <StoryImages>
          <PostImage dirPath={imgDirPath} number="06" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="07"
                         number2="08" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="09"
                         number2="10" />

          <PostImage dirPath={imgDirPath} number="11" />
        </StoryImages>

        <StoryTextBlock title="Lunar landscape in Timanfaya National Park">
          In Timanfaya National Park you become speechless in front of the arid landscape.
          Here, the clock stops and the silence reigns; lairs of the devils seems
          to be build into the rivers of lava. Here is what the French author,
          Michel Houellebecq wrote about these bizarre lunar landscapes:
          "In front of us a huge fissure, several metres wide, snaked as far as
          the horizon, cutting through the grey surface of the earth's crust.
          The silence was absolute. This, I thought, is what the world will look
          like when it dies." Words can hardly describe the view here. You have to
          be there and experience it for yourself! And when you do, don’t forget
          to stop to salute the camels and eat an icecream.
        </StoryTextBlock>

        <StoryImages>

          <PostImage dirPath={imgDirPath} number="12" />

          <PostImage dirPath={imgDirPath} number="13" />

          <PostImage dirPath={imgDirPath} number="14" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="15"
                         number2="16" />

          <PostImage dirPath={imgDirPath} number="17" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="18"
                         number2="19" />

          <PostImage dirPath={imgDirPath} number="20" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="21"
                         number2="22" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="23"
                         number2="24" />

          <PostImage dirPath={imgDirPath} number="25" />
        </StoryImages>

        <StoryTextBlock title="The Vineyards">
          After kilometers of arid landscape we didn’t expect expect to see vineyards.
          No, I am not hallucinating. In Lanzarote, there are plenty of vineyards.
        </StoryTextBlock>

        <StoryTextBlock>
          After we left Timanfaya National Park we drove around the centre of
          the island and in front of us it appeared a truly unique landscape.
          We stopped and started wondering of the sight of it: are they really
          growing the vines in this manner, in these black pits surrounded by
          stone walls? It seems that they do, and they have award winning wines
          grown this way. Each vine is individually grown in a sunken pit, about
          four to five meters wide. As in the island can be windy they add a dry
          semi-circular rock wall. The vines are planted directly in the soil, covered
          and protected by small black lava stones. It creates an extraordinary view.
        </StoryTextBlock>

        <StoryTextBlock>
          Do not expect to pop down to your local shop to pick up a bottle of Lanzarote
          wine to try it. You can only find it here, in Lanzarote or in one of
          the other Canary islands. In case you do find it somewhere else,
          please do tell us. We loved it!
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="26" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="27"
                         number2="28" />
        </StoryImages>

        <StoryTextBlock title="The end of a beatiful day">
          As it was still Dan’s birthday we ended it by listening to the sound
          of the ocean and having a nice dinner with our dear friends.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="29" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="30"
                         number2="31" />
        </StoryImages>
      </StoryPage>);
  }
}

export default LunarLandscapesOfLanzaroteStory;
