import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrcResp from '../components/story/buildSrcResp';
import FullImageResp from '../components/story/FullImageResp';

const imgDirPath = "stories/2017-06-17-summer-in-amsterdam";

class SummerInAmsterdamStory extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logo={buildSrcResp(imgDirPath, "L", "image", "36")}
                 title="Summer In Amsterdam"
                 author="Dan"
                 location="Amsterdam, Netherlands"
                 tags="travel, city, Amsterdam, Netherlands">

        <StoryIntro>
           I usually need a few days to take a few good photos in a new city. I took
           me 3 hours to take the ones in Amsterdam. That says a lot! The weather was
           great, the sky was blue and perfect—with mushy clouds—and the light was nice.
           In the summer, the sun stays up on the sky until late and as the city center
           is round, there are always a few sunny streets, with good light!
           You only have to search for them!
        </StoryIntro>

        <StoryTextBlock title="Amsterdam—A Lively City">
          Amsterdam is in continuous movement! Tourists and locals are swarming the
          small streets of Netherlands' capital. At every corner there is something
          happening. Here is a nice square, with people resting in the sun and here
          is another one, where somebody is entertaining the toursits with a show!
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="01" />
          <PostImageResp dirPath={imgDirPath} number="02" />
          <PostImageResp dirPath={imgDirPath} number="03" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="04"
                         number2="05" />
          <PostImageResp dirPath={imgDirPath} number="06" />
        </StoryImages>

        <StoryTextBlock title="Canals of Amsterdam">
          It's no surprise that Amsterdam has lots of <a target="blank" href="https://en.wikipedia.org/wiki/Canals_of_Amsterdam">canals</a>.
          There are kilometers of canals, about 90 islands and 1,500 bridges here.
          Plenty of space for the tourists to do cruises around the city. Considering
          how many canals there are, boats can be a good option for getting
          from one part of the city to another. Or to throw a boat party!
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="07"
                       alt="Amsterdam Canals" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="07" />
          <PostImageResp dirPath={imgDirPath} number="08" />
          <PostImageResp dirPath={imgDirPath} number="09" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="10"
                         number2="11" />
          <PostImageResp dirPath={imgDirPath} number="12" />
        </StoryImages>

        <StoryTextBlock title="The Bicyles in Amsterdam">
          Amsterdam is the most bicycle friendly capital of Europe.
          There are bikes everywhere around you. Some people are talking on the phone while
          riding, others are writing phone messages, eating or even checking Facebook.
          As a tourist, you have to always be careful, to see from which direction is the
          next person riding a bike coming from! They are also fast! As a matter of fact,
          while I was watching the streets, I was almost sure that every biker is millimetrically
          avoiding the others. I've never seen any collision, but keeping in mind how
          close they were, I was expecting one anytime!
        </StoryTextBlock>

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="13"
                         number2="14" />
          <PostImageResp dirPath={imgDirPath} number="15" />
          <PostImageResp dirPath={imgDirPath} number="16" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="17"
                         number2="18" />
          <PostImageResp dirPath={imgDirPath} number="19" />
          <PostImageResp dirPath={imgDirPath} number="20" />
        </StoryImages>

        <StoryTextBlock title="The Architecture">
          When it comes to architecture, Amsterdam is full of surprises. You can find
          small houses from the 17th century as well as large museums, palaces or cathedrals.
          The typical houses in the center have are made out of bricks and have big windows.
          Each of them has a hook on top, so that the people leaving there are able to
          carry their furniture in. Sometimes the houses are not perfectly aligned—this
          makes them look funny.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="21" />

        <StoryImages>
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="22"
                         number2="23" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="24"
                         number2="25" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="26"
                         number2="27" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="28"
                         number2="29" />
          <PostImageResp dirPath={imgDirPath} number="30" />
          <TwoPostImageResp dirPath={imgDirPath}
                         number1="31"
                         number2="32" />
        </StoryImages>

        <StoryTextBlock title="Enjoying Amsterdam">
          Did I miss anything? "Yes, sure, you did't say anything about the nightlife!"—someone
          screams from the back. And I immediately answer: "I don't have any photos of that, as
          what happens in Amsterdam... you know... But trust me, it's great!"
        </StoryTextBlock>

        <StoryTextBlock>
          I can only share that during the day, you can enjoy the good weather on one of the banks
          of one of the may canals, together with somebody you love. Relax and let the sun do its job!
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="33" />
          <PostImageResp dirPath={imgDirPath} number="34" />
          <PostImageResp dirPath={imgDirPath} number="35" />
        </StoryImages>
      </StoryPage>);
  }
}

export default SummerInAmsterdamStory;
