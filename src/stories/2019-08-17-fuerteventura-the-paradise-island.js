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

class FuerteventuraTheParadiseIslandStory extends React.Component {

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
          Fuerteventura is one of our favorite Canary Islands because of the great
          weather the whole year, the blue sky with fluffy clouds and because having
          the possibility to visit the mountains, beaches, but also the desert landscapes.
        </StoryIntro>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="02"
                         alt="Fuerteventura cloudscape"/>
          <PostImageResp dirPath={imgDirPath} number="03"
                         alt="Fuerteventura old mill"/>
          <PostImageResp dirPath={imgDirPath} number="04"
                         alt="Cloudscape in Fuerteventura"/>
          <PostImageResp dirPath={imgDirPath} number="05"
                         alt="Fuerteventura hills panorama"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="06"
                       alt="Fuerteventura couds and ocean" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="07"
                         alt="Mountains in Fuerteventura"/>
        </StoryImages>
        <StoryTextBlock title="The Villages">
          Some small villages have their own beaches and nice bars or cafes where you can enjoy a coffee or a cup of sangria.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="08"
                       alt="Village in Fuerteventura" />
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="09"
                       alt="Village on coast in Fuerteventura" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="10"
                         alt="Beach and town in Fuerteventura"/>
          <PostImageResp dirPath={imgDirPath} number="11"
                         alt="Fuerteventura beach"/>
          <TwoPostImageResp dirPath={imgDirPath}
                           number1="12"
                           alt1="Fuerteventura resort"
                           number2="14"
                           alt2="Rock beach in Fuerteventura" />
          <PostImageResp dirPath={imgDirPath} number="13"
                         alt="Blue boat on beach"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="15"
                       alt="Village and rocks in Fuerteventura" />
        <StoryTextBlock title="The Desert">
          Fuerteventura is about wild places as well. The lack of perceived
          life gives the feeling of loneliness. Walking around here is like I
          imagine walking on Mars would be. Small animals, like squirrels, give
          some hope, as not everything around is dead.
        </StoryTextBlock>
        <StoryImages>
         <PostImageResp dirPath={imgDirPath} number="16"
                        alt="Fuerteventura desert and ocean"/>
         <PostImageResp dirPath={imgDirPath} number="17"
                        alt="Desert in Fuerteventura"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="19"
                       alt="Rocky Fuerteventura" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="18"
                         alt="Rocks and ocean"/>
          <PostImageResp dirPath={imgDirPath} number="20"
                       alt="Deserted landscape"/>
          <PostImageResp dirPath={imgDirPath} number="21"
                       alt="Rocks and ocean"/>
         <PostImageResp dirPath={imgDirPath} number="22"
                        alt="Squirrel in Fuerteventura"/>
         <PostImageResp dirPath={imgDirPath} number="23"
                        alt="Path to Fuerteventura"/>
         <PostImageResp dirPath={imgDirPath} number="24"
                        alt="Road to the beach"/>
       </StoryImages>
       <StoryTextBlock title="The Coast of Fuerteventura">
         The coastal landscapes are amazing, the way the water shaped the rock
         is breathtaking. Starting with black rocks and ending with the white
         ones, round shaped or sharp.
       </StoryTextBlock>
       <StoryImages>
         <PostImageResp dirPath={imgDirPath} number="25"
                        alt="Waves on beach"/>
         <TwoPostImageResp dirPath={imgDirPath}
                          number1="26"
                          alt1="Beach in Fuerteventura"
                          number2="27"
                          alt2="Sunset in Fuerteventura" />
         <PostImageResp dirPath={imgDirPath} number="28"
                        alt="Rocky coast Fuerteventura"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="29"
                       alt="Cave in Fuerteventura" />
        <StoryTextBlock title="The Beaches in Fuerteventura">
          Fuerteventura has all kinds of beaches, starting with the touristic ones,
          with perfect sand and ending with wild, hardly accessible ones. The
          ocean is calm, present everywhere, having clear, transparent, tropical
          water.
        </StoryTextBlock>
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="30"
                         alt="Beach in Fuerteventura"/>
          <PostImageResp dirPath={imgDirPath} number="31"
                         alt="Sunet on the beach"/>
          <PostImageResp dirPath={imgDirPath} number="32"
                         alt="Touristic beach in Fuerteventura"/>
        </StoryImages>
        <FullImageResp dirPath={imgDirPath}
                       prefix="image"
                       number="33"
                       alt="Ocean and mountains in Fuerteventura" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath} number="34"
                         alt="Fuerteventura coast"/>
          <PostImageResp dirPath={imgDirPath} number="35"
                         alt="Rock in the ocean"/>
          <PostImageResp dirPath={imgDirPath} number="36"
                         alt="Lighthouse in Fuerteventura" />
        </StoryImages>
      </StoryPage>);
  }
}

export default FuerteventuraTheParadiseIslandStory;
