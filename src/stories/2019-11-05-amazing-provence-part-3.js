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

class AmazingProvencePart3Story extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <StoryPage logoDirPath={imgDirPath + "/pont-du-guard"}
                 logoPrefix="image"
                 logoNumber="03"
                 altLogo="Pont du Guard, France"
                 title="Amazing Provence"
                 author="Dan"
                 location="Provence, France"
                 tags="travel, towns, coast">

        <StoryIntro>
        This is the third and last part of our journey in Provence.
        Read the first part of the story <Link to="/stories/amazing-provence-part-1.html">here</Link> and
        the second part <Link to="/stories/amazing-provence-part-2.html">here</Link>.
        </StoryIntro>
        <StoryTextBlock title="Pont du Guard">
          The Pont du Gard is a Roman monument built halfway through the 1st century AD.
          It is the principal construction in a 50 km long aqueduct that supplied the city of Nimes.
        </StoryTextBlock>

        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/pont-du-guard"} number="01"
                         alt="Landscape near Pont du Guard"/>
          <PostImageResp dirPath={imgDirPath + "/pont-du-guard"} number="02"
                         alt="Pont du Guard"/>
        </StoryImages>

        <StoryTextBlock title="L'Isle-sur-la-Sorgue">
          L&apos;Isle-sur-la-Sorgue is a town famous for its huge amount of water wheels
          which supply the town with electricity.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath + "/lisle-sur-la-sorgue"}
                       prefix="image"
                       number="01"
                       alt="L'Isle-sur-la-Sorgue water mill" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/lisle-sur-la-sorgue"} number="02"
                         alt="L'Isle-sur-la-Sorgue water channel"/>
          <TwoPostImageResp dirPath={imgDirPath + "/lisle-sur-la-sorgue"}
                           number1="03"
                           alt1="L'Isle-sur-la-Sorgue water wheel"
                           number2="04"
                           alt2="L'Isle-sur-la-Sorgue water wheel" />
        </StoryImages>
        <StoryTextBlock title="Gordes">
          Gordes is a commune built on the top of the hill. The landscape here is
          amazing.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath + "/gordes"}
                       prefix="image"
                       number="01"
                       alt="Gordes, France" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/gordes"} number="03"
                         alt="Amazing Provence"/>
          <PostImageResp dirPath={imgDirPath + "/gordes"} number="04"
                        alt="Houses in Provence"/>
          <PostImageResp dirPath={imgDirPath + "/gordes"} number="05"
                         alt="Cloudy Provence"/>
          <PostImageResp dirPath={imgDirPath + "/gordes"} number="06"
                         alt="Villa in Provence"/>
        </StoryImages>
        <StoryTextBlock title="Abbaye Notre-Dame de Sénanque">
          Abbaye Notre-Dame de Sénanque is famous for its lavender field.
          Were were unlucky, the fields was not yet violet but still green.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath + "/abbaye-notre-dame-de-senanque"}
                       prefix="image"
                       number="02"
                       alt="Abbaye Notre-Dame de Sénanque" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/abbaye-notre-dame-de-senanque"} number="01"
                         alt="Abbaye Notre-Dame de Sénanque"/>
          <PostImageResp dirPath={imgDirPath + "/abbaye-notre-dame-de-senanque"} number="03"
                         alt="Deserted landscape"/>
        </StoryImages>

        <StoryTextBlock title="Les Baux-de-Provence">
          Les Baux-de-Provence is a nice fortress built on the top of the mountain.
          There is a nice laser projection gallery nearby.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath + "/les-baux-de-provence"}
                       prefix="image"
                       number="01"
                       alt="Les Baux-de-Provence" />

        <StoryImages>

          <PostImageResp dirPath={imgDirPath + "/les-baux-de-provence"} number="02"
                         alt="Hill, Provence"/>
          <PostImageResp dirPath={imgDirPath + "/les-baux-de-provence"} number="03"
                         alt="Les Baux-de-Provence Portrait"/>
          <TwoPostImageResp dirPath={imgDirPath + "/les-baux-de-provence"}
                            number1="04"
                            alt1="Les Baux-de-Provence laser projection"
                            number2="05"
                            alt2="Les Baux-de-Provence laser projection" />
        </StoryImages>
        <StoryTextBlock title="Aix-en-Provence">
          Aix-en-Provence is a nice town with a great view.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath + "/aix-en-provence"}
                       prefix="image"
                       number="06"
                       alt="Aix-en-Provence landscape" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/aix-en-provence"} number="03"
                         alt="Aix-en-Provence fountain"/>
          <TwoPostImageResp dirPath={imgDirPath + "/aix-en-provence"}
                            number1="01"
                            alt1="Aix-en-Provence Cathedral"
                            number2="02"
                            alt2="Aix-en-Provence Cathedral detail" />
          <PostImageResp dirPath={imgDirPath + "/aix-en-provence"} number="05"
                         alt="Aix-en-Provence portrait"/>
          <TwoPostImageResp dirPath={imgDirPath + "/aix-en-provence"}
                            number1="04"
                            alt1="Aix-en-Provence house"
                            number2="07"
                            alt2="Aix-en-Provence architecture" />
        </StoryImages>
        <StoryTextBlock title="Marignane">
          Marignane is a commune in the Bouches-du-Rhône department in the
          Provence-Alpes-Côte d&apos;Azur region in southern France.
        </StoryTextBlock>

        <FullImageResp dirPath={imgDirPath + "/marignane"}
                       prefix="image"
                       number="02"
                       alt="Marignane panorama" />

        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/marignane"} number="01"
                         alt="Marignane portrait"/>
          <PostImageResp dirPath={imgDirPath + "/marignane"} number="03"
                         alt="Marignane landscape"/>
        </StoryImages>

        <StoryTextBlock title="Martigues">
          Martigues is a commune northwest of Marseille. It is part of the
          Bouches-du-Rhône department in the Provence-Alpes-Côte d&apos;Azur.
        </StoryTextBlock>
        <FullImageResp dirPath={imgDirPath + "/martigues"}
                       prefix="image"
                       number="04"
                       alt="Martigues boats" />
        <StoryImages>
          <PostImageResp dirPath={imgDirPath + "/martigues"} number="05"
                         alt="Martigues boats"/>
          <PostImageResp dirPath={imgDirPath + "/martigues"} number="02"
                         alt="Martigues boats"/>
          <TwoPostImageResp dirPath={imgDirPath + "/martigues"}
                            number1="01"
                            alt1="Martigues boat"
                            number2="06"
                            alt2="Martigues fisher man" />
        </StoryImages>
      </StoryPage>);
  }
}

export default AmazingProvencePart3Story;
