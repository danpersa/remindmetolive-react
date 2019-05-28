import React from 'react';
import PostImage from '../components/story/PostImage';
import TwoPostImages from '../components/story/TwoPostImages';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';
import buildSrc from '../components/story/buildSrc';

const imgDirPath = "/images/stories/2015-10-15-the-casino-of-constanta/";

class CasinoOfConstantaStory extends React.Component {

  render() {
    return (
      <StoryPage logo={buildSrc(imgDirPath, "teaser", "01", "2048")}
                 title="The Casino Of Constanta"
                 author="Dan"
                 location="Constanta, Romania"
                 tags="seaside, casino, ruin">

        <StoryIntro>
          The Casino, the landmark of my hometown, Constanta, once an animated
          building hosting joyful events and gamblers from all over the world,
          is now a ruin.
        </StoryIntro>

        <StoryTextBlock title="1910">
          Today is the Casino&apos;s inauguration day. It should&apos;ve been finished 3
          years ago but different problems delayed the project. The liberal
          government allocated a lots of money earlier this year to see it finished.
          The costs were one third bigger then initially estimated (some say it
          was even more expensive).
        </StoryTextBlock>

        <StoryTextBlock>
          It is built in the Art Nouveau style after three tries—after the Conservator
          Party won the elections, they stopped the project, hired a new architect
          and tried to build the Casino in a pure Romanian style. Now that everything
          is done some papers still characterize it as &quot;a giant perked up with all
          sorts of gewgaws&quot;.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="01" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="05"
                         number2="03" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="04"
                         number2="08" />
        </StoryImages>

        <StoryTextBlock title="1913">
          The Casino is a high class, luxurious place. Only the rich people are able
          participate and the dress code is mandatory. The Casino is attracting
          gamblers from all over Europe. It is considered a building of perdition,
          as many people lose their fortunes here and end up with a bullet in their
          head later, in a hotel room.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="23" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="10"
                         number2="07" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="17"
                         number2="06" />
        </StoryImages>

        <StoryTextBlock title="2002">
          I&apos;m 17 and together with a colleague we are skipping classes. After
          getting the traditional Giant Shaorma from the Tomis Port, we are heading
          towards the Casino. The building doesn&apos;t look that pretty, but we don&apos;t
          care. We are young and the only thing that matters is that the Casino
          has a pool table. We make the effort to walk such a huge distance because
          this the cheapest place in town where we can play pool. We are getting
          inside the left wing of the Casino and the first thing I notice is the
          smell of smoke emanating from the walls. We are the only clients here.
          There is a bar with lots of alcohol bottles, but we don&apos;t drink. The
          pool table is really old, the cues are old as well and we are barely
          able to play. After half an hour we get pissed and leave.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="09" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="11"
                         number2="12" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="13"
                         number2="14" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="18"
                         number2="16" />
        </StoryImages>

        <StoryTextBlock title="2015">
          I&apos;m back in my hometown for a few days and now I&apos;m heading towards the
          old Casino. I already know that it&apos;s a ruin and I want to take some
          pictures of it before they renovate it. This is of course, a joke, as
          nobody has any plan to do it. They promised many years in a row to
          renovate it, but nobody did anything.
        </StoryTextBlock>

        <StoryTextBlock>
          Getting closer and closer to the seafront, I&apos;m starting to notice the
          smell, strong and salty like always! It finally feels like home! The
          Casino is indeed a ruin, lots of people are walking around it, many
          taking pictures and selfies. There is no orchestra, like in the glorious
          days, 100 years ago. Instead an accordionist together with his cat is
          trying to cheer up everybody who passes by. A nostalgic feeling fills
          my heart.
        </StoryTextBlock>

        <StoryImages>
          <PostImage dirPath={imgDirPath} number="19" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="20"
                         number2="24" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="29"
                         number2="22" />
          <PostImage dirPath={imgDirPath} number="32" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="25"
                         number2="27" />
          <TwoPostImages dirPath={imgDirPath}
                         number1="28"
                         number2="26" />
          <PostImage dirPath={imgDirPath} number="34" />
        </StoryImages>
      </StoryPage>);
  }
}

export default CasinoOfConstantaStory;
