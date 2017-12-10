import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import WideFullImage from '../components/story/WideFullImage';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2017-06-05-lisbon-a-charming-city/";

class LisbonACharmingCityStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "02", "2048")}
                 title="Lisbon, A Charming City"
                 author="Dan & Ade"
                 location="Lisbon, Portugal"
                 tags="travel, Lisbon, Portugal">

        <StoryIntro>
         The world’s most well-respected travel magazine, Condé Nast Traveller
         describes Lisbon as the coolest city in Europe. The editor of the magazine,
         Steve King says that Lisbon’s character is unique, and that you’ll find
         none of “Berlin’s angst or Paris’s hauteur or Rome’s braggadocio” in the city.
         Expect instead to find “a modesty that borders on reticence, a wistful humor
         tinged with melancholy”. We found Lisbon a charming city and we will invite
         you to see it through our eyes.
        </StoryIntro>

        <StoryTextBlock title="The Seven Hills of Lisbon">
          Lisbon is located in a mountainous region of Portugal. It is claimed
          to be the city of seven hills (you can observe the similarities with
            Rome). They are peppered across the cityscape offering stupendous
            horizons for the curious traveler. What it is fascinating is that
            the city had a tram systems consisted of 27 tram lines, being one
            of the most complex tram networks in Europe. Now, the only lines
            that are preserved are the ones in the Old Town. No wonder they
            are a splash among tourists.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />

          <PostImage dirPath={imgDirPath} number="02" />

          <PostImage dirPath={imgDirPath} number="03" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="04"
                         number2="05" />

          <PostImage dirPath={imgDirPath} number="06" />
        </StoryImages>

        <WideFullImage dirPath={imgDirPath} number="02" />

        <StoryTextBlock title="The Trams">
          One advantage of the hilliness of the city is that it is one of the
          quietest capital in Europe. Another one, if you can call it like that,
          is that you will end up being really fit, as wherever you set out to walk,
          you will end up in stairs or walking up and down. As it is such a
          beautiful city, it is definitely worth it.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="07" />
          <PostImage dirPath={imgDirPath} number="09" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="11" />

          <PostImage dirPath={imgDirPath} number="12" />
        </StoryImages>

        <StoryTextBlock title="Glimpse of the city">
          One advantage of the hilliness of the city is that it is one of the
          quietest capital in Europe. Another one, if you can call it like that,
          is that you will end up being really fit, as wherever you set out to walk,
          you will end up in stairs or walking up and down. As it is such a
          beautiful city, it is definitely worth it.
        </StoryTextBlock>

        <StoryImages>

          <TwoPostImages dirPath={imgDirPath}
                         number1="13"
                         number2="14" />

          <PostImage dirPath={imgDirPath} number="15" />

          <PostImage dirPath={imgDirPath} number="16" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="17"
                         number2="18" />

          <PostImage dirPath={imgDirPath} number="19" />
          <PostImage dirPath={imgDirPath} number="20" />

        </StoryImages>

        <WideFullImage dirPath={imgDirPath} number="08" />

        <StoryTextBlock title="Belem District">
          Belem is a picturesque district to the west of Lisbon, which is the
          location of many of the city's attractions. For example, the famous
          Belem tower with its breathtaking design. This is no ordinary tower,
          but an icon of Portuguese maritime discoveries. Because its significance
          the Belem Tower is a UNESCO World Heritage monument.
          Another important piece of the Belem district is The Mosteiro dos
          Jeronimos, one of the most ornamented churches of Portugal.
          The monastery was historically associated with the early sailors as
          explorers, as it was from here that Vasco da Gama spent his last night
          before his voyage to the Far East.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="22" />
          <PostImage dirPath={imgDirPath} number="23" />
          <PostImage dirPath={imgDirPath} number="24" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="25"
                         number2="26" />

          <PostImage dirPath={imgDirPath} number="27" />
          <PostImage dirPath={imgDirPath} number="28" />
          <PostImage dirPath={imgDirPath} number="29" />
          <PostImage dirPath={imgDirPath} number="30" />

          <TwoPostImages dirPath={imgDirPath}
                         number1="31"
                         number2="32" />

          <PostImage dirPath={imgDirPath} number="33" />
          <PostImage dirPath={imgDirPath} number="34" />

        </StoryImages>
      </StoryPage>);
  }
}

export default LisbonACharmingCityStory;
