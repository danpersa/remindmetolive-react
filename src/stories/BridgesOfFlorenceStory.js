import React from 'react';
import TwoImages from '../components/story/TwoImages';
import OneImage from '../components/story/OneImage';
import FullImage from '../components/story/FullImage';
import StoryPage from '../components/story/StoryPage';
import StoryTextBlock from '../components/story/StoryTextBlock';
import StoryImages from '../components/story/StoryImages';
import StoryIntro from '../components/story/StoryIntro';

const imgDir = "/images/stories/2016-06-30-bridges-of-florence/";

class BridgesOfFlorence extends React.Component {

  constructor() {
    super();
  }

  image(number) {
    return imgDir + "image-" + number + "-1200.jpg";
  }

  wide(number) {
    return imgDir + "wide-" + number + "-2048.jpg";
  }

  teaser(number) {
    return imgDir + "teaser-" + number + "-2048.jpg";
  }

  render() {
    return (
      <StoryPage logo={this.teaser("05")}
                 title="Bridges of Florence"
                 author="Dan & Ade"
                 location="Florence, Italy"
                 tags="travel, Florence, Italy">

        <StoryIntro>
         The <a href="https://en.wikipedia.org/wiki/Arno_River" target="_blank">Arno River</a> naturally splits Florence in two sides. It's now surprise that the two sides of the city are linked through bridges. What's interesting is how beautiful most of the bridges are and the way they dominate Florence's cityscape.
        </StoryIntro>

        <StoryTextBlock>
          I took the next photo from the Michelangelo Square. From here you can have a nice overview of the bridges. The colorful Ponte Vecchio is the first in line, followed by the others.
        </StoryTextBlock>

        <FullImage src={this.image("01")}/>

        <StoryTextBlock title="Ponte Vecchio">
          The most iconic bridge in Florence is Ponte Vecchio, the Old Bridge.
          This bridge is always really crowded, from far away looks like there is perpetual party.
          What's really happening is that the mass of tourists wants to take selfies with the river and the next bridges.
          There is also a market on the bridge, where you can buy luxury goods, like jewelry and expensive watches.
        </StoryTextBlock>

        <StoryImages>

          <OneImage src={this.image("02")} />

          <TwoImages
            src1={this.image("03")}
            src2={this.image("04")}/>

          <OneImage src={this.image("05")} />
        </StoryImages>

        <StoryTextBlock title="Ponte Santa Trinita">
          The Ponte Santa Trìnita (The Holy Trinity Bridge) is the oldest elliptic arch bridge in the world,
          the three flattened ellipses giving the structure its celebrated elegant appearance. This bridge is
          the most central one. We stopped here many times to eat ice cream and admire the river and the other
          bridges.
        </StoryTextBlock>

        <StoryImages>
          <OneImage src={this.image("06")} />

          <TwoImages
            src1={this.image("07")}
            src2={this.image("08")}/>

          <OneImage src={this.image("09")} />

          <TwoImages
            src1={this.image("10")}
            src2={this.image("11")}/>
        </StoryImages>


        <StoryTextBlock title="Ponte alla Carraia">
          The Ponte alla Carraia is a five-arched bridge spanning the River Arno and linking the
          district of Oltrarno to the rest of the city of Florence.
        </StoryTextBlock>

        <StoryImages>

          <OneImage src={this.image("12")} />

          <TwoImages
            src1={this.image("13")}
            src2={this.image("14")}/>

          <TwoImages
            src1={this.image("15")}
            src2={this.image("16")}/>

          <OneImage src={this.image("17")} />
        </StoryImages>
        <StoryTextBlock title="Ponte Amerigo Vespucci">
          It seems that drivers prefer this bridge, as there are always lots of cars using it to cross
          the river.
        </StoryTextBlock>
        <FullImage src={this.image("18")}/>
        <StoryTextBlock title="Ponte alle Grazie" />
        <StoryImages>
          <OneImage src={this.image("19")} />

          <OneImage src={this.image("20")} />
        </StoryImages>

        <StoryTextBlock title="Other Bridges">
          Ponte San Niccolo Small is a smaller, one arch bridge. Florence has other bridges for which
          I wasn't able to find the names.
        </StoryTextBlock>

        <StoryImages>
          <TwoImages
            src1={this.image("21")}
            src2={this.image("22")}/>
        </StoryImages>

        <StoryTextBlock title="Overview">
          I'll end the story with an overview photo to show how beautifully everything fits together
          and how the bridges bring more personality to the city. Florence is for sure a city worth
          visiting, an architectural beauty!
        </StoryTextBlock>
        <FullImage src={this.image("23")}/>
      </StoryPage>);
  }
}

export default BridgesOfFlorence;
