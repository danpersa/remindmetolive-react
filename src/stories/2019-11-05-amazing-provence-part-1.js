import React from 'react';
import PostImageResp from '../components/story/PostImageResp';
import TwoPostImageResp from '../components/story/TwoPostImageResp';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import FullImageResp from '../components/story/FullImageResp';
import { Link } from 'react-router-dom';

const imgDirPath = "stories/2019-11-05-amazing-provence";

class AmazingProvencePart1Story extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logoDirPath={imgDirPath + "/toulouse"}
                 logoPrefix="image"
                 logoNumber="01"
                 altLogo="Amazing Provence"
                 title="Amazing Provence"
                 author="Dan"
                 location="Provence, France"
                 tags="travel, towns">

        <StoryIntro>
          This is the story of our trip in Provence. During this trip we traveled
          a lot, we switched four Air B&Bs and had lots of fun. As our trip was quite long
          I was able to take plenty of amazing photos. I split this article in three parts
          to be able to share the whole experience of the amazing Provence.
        </StoryIntro>
        <StoryTextBlock title="Toulouse">
          Toulouse is an universitary town. Lots of young people, bars and fun. We were
          able to enjoy the great weather, the river and even a Salsa party.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/toulouse"} number="02"
                         alt="Toulouse bridge"/>
          <PostImageResp dirPath={imgDirPath + "/toulouse"} number="03"
                         alt="Toulouse river"/>
          <TwoPostImageResp dirPath={imgDirPath + "/toulouse"}
                            number1="04"
                            alt1="Salsa Party"
                            number2="05"
                            alt2="Toulouse Capitolium" />
        </StoryImages>

        <FullImageResp dirPath={imgDirPath + "/toulouse"}
                       prefix="image"
                       number="06"
                       alt="Toulouse Capitolium" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/toulouse"} number="07"
                         alt="Toulouse Cathedral"/>
        </StoryImages>

        <FullImageResp dirPath={imgDirPath + "/toulouse"}
                       prefix="image"
                       number="11"
                       alt="Toulouse Bridge" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/toulouse"} number="08"
                         alt="Cathedral in Toulouse"/>
          <TwoPostImageResp dirPath={imgDirPath + "/toulouse"}
                           number1="09"
                           alt1="Inside the Toulouse Cathedral"
                           number2="10"
                           alt2="Inside the Toulouse Cathedral" />
        </StoryImages>

        <StoryTextBlock title="Albi">
          Albi is an unique town with great architecture, a nice Cathedral. Looks like
          a medieval fortress with great colors.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath + "/albi"}
                       prefix="image"
                       number="08"
                       alt="Albi panorama" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/albi"} number="01"
                         alt="Albi Cathedral"/>
          <PostImageResp dirPath={imgDirPath + "/albi"} number="03"
                         alt="Portrait in Albi"/>
          <PostImageResp dirPath={imgDirPath + "/albi"} number="04"
                         alt="Albi Bridge"/>
          <PostImageResp dirPath={imgDirPath + "/albi"} number="06"
                         alt="Albi, France"/>
          <PostImageResp dirPath={imgDirPath + "/albi"} number="07"
                        alt="Albi Bridge and Cathedral"/>

          <PostImageResp dirPath={imgDirPath + "/albi"} number="12"
                        alt="Albi panorama"/>
          <TwoPostImageResp dirPath={imgDirPath + "/albi"}
                            number1="10"
                            alt1="Inside of the Albi Cathedral"
                            number2="11"
                            alt2="Inside of the Albi Cathedral" />
          <TwoPostImageResp dirPath={imgDirPath + "/albi"}
                            number1="15"
                            alt1="Statue in Albi"
                            number2="16"
                            alt2="Statue in Albi" />
          <PostImageResp dirPath={imgDirPath + "/albi"} number="17"
                         alt="Albi portrait"/>
        </StoryImages>

        <StoryTextBlock title="Carcassonne">
          The fortress in Carcassonne gave us the great opportunity to eat the traditional
          dish called Cassoulet. Cassoulet is a stew made with beans, duck and
          smoked meat.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath + "/carcassonne"}
                       prefix="image"
                       number="10"
                       alt="Carcassonne panorama" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/carcassonne"} number="05"
                         alt="Carcassonne with yellow circles"/>
          <PostImageResp dirPath={imgDirPath + "/carcassonne"} number="01"
                         alt="Carcassonne, France"/>
          <TwoPostImageResp dirPath={imgDirPath + "/carcassonne"}
                            number1="02"
                            alt1="Fortress tower"
                            number2="04"
                            alt2="Fortress tower" />
          <PostImageResp dirPath={imgDirPath + "/carcassonne"} number="03"
                         alt="Carcassonne town"/>

          <TwoPostImageResp dirPath={imgDirPath + "/carcassonne"}
                            number1="06"
                            alt1="Shrine in Carcassonne"
                            number2="07"
                            alt2="Inside the Carcassonne Cathedral" />
          <PostImageResp dirPath={imgDirPath + "/carcassonne"} number="08"
                         alt="Carcassonne fortress"/>
          <PostImageResp dirPath={imgDirPath + "/carcassonne"} number="11"
                         alt="Carcassonne panorama"/>
          <PostImageResp dirPath={imgDirPath + "/carcassonne"} number="12"
                         alt="Carcassonne far away view"/>
       </StoryImages>
       <StoryTextBlock title="Sete">
         Sete is a town near seaside. The weather was great and the number of boats
         amazing. Read the second part of the story <Link to="/stories/amazing-provence-part-2.html">here</Link>.
       </StoryTextBlock>

       <FullImageResp dirPath={imgDirPath + "/sete"}
                      prefix="image"
                      number="02"
                      alt="Boats and apartments in Sete" />
       <StoryImages>
         <PostImageResp dirPath={imgDirPath + "/sete"} number="01"
                        alt="Boats parked"/>
         <PostImageResp dirPath={imgDirPath + "/sete"} number="03"
                        alt="Lighthouse in Sete"/>
         <PostImageResp dirPath={imgDirPath + "/sete"} number="04"
                        alt="Sete harbour"/>
         <PostImageResp dirPath={imgDirPath + "/sete"} number="05"
                        alt="Palais Consoulaire, Sete, France"/>
         <PostImageResp dirPath={imgDirPath + "/sete"} number="06"
                        alt="Sete from above"/>
         <TwoPostImageResp dirPath={imgDirPath + "/sete"}
                           number1="07"
                           alt1="Sete overview"
                           number2="08"
                           alt2="Sete port" />
       </StoryImages>
     </StoryPage>);
  }
}

export default AmazingProvencePart1Story;
