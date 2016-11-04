import React from 'react';
//import {Link} from 'react-router';
import Row from './Row';
import Col from './Col';
import Container from './Container';
import TwoImages from './TwoImages';
import OneImage from './OneImage';
import FullImage from './FullImage';

class CasinoPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
    <div className="main-container">
      <section className="page-title page-title-4">
          <Container>
              <Row>
                  <Col md={6}>
                      <h3 className="uppercase mb0">The Casino Of Constanta</h3>
                  </Col>
                  <Col md={6} someClass="text-right">
                      <ol className="breadcrumb breadcrumb-2">
                          <li>
                              <a href="index.html">Home</a>
                          </li>
                          <li>
                              <a href="#">Stories</a>
                          </li>
                          <li className="active">Project Title</li>
                      </ol>
                  </Col>
              </Row>
          </Container>
      </section>
      <section className="pt0 pb40">
          <Container>
              <Row>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Date:</span>
                      <h6 className="uppercase mb0">Oct 15</h6>
                  </Col>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Tags:</span>
                      <h6 className="uppercase mb0">seaside, casino, ruin</h6>
                  </Col>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Location:</span>
                      <h6 className="uppercase mb0">Constanta, Romania</h6>
                  </Col>
                  <Col sm={3} xs={6} mbXs={24}>
                      <span>Author:</span>
                      <h6 className="uppercase mb0">Dan</h6>
                  </Col>
              </Row>
          </Container>
      </section>

      <FullImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/teaser-01-2048.jpg"/>

      <section>
        <Container>
            <Row mb={64} mbXs={24}>
              <Col md={8} mdOffset={2} sm={10} smOffset={1}>
                <h6 className="lead mb48">The Casino, the landmark of my hometown, Constanta, once an animated building hosting joyful events and gamblers from all over the world, is now a ruin.</h6>
                <h2 className="uppercase mb16">1910</h2>
                <p className="lead">
                    Today is the Casino's inauguration day. It should've been finished 3 years ago but different problems delayed the project. The liberal government allocated a lots of money earlier this year to see it finished. The costs were one third bigger then initially estimated (some say it was even more expensive).
                </p>
                <p className="lead">
                    It is built in the Art Nouveau style after three tries - after the Conservator Party won the elections, they stopped the project, hired a new architect and tried to build the Casino in a pure Romanian style. Now that everything is done some papers still characterize it as "a giant perked up with all sorts of gewgaws".
                </p>
              </Col>
            </Row>

            <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-01-1200.jpg" />

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-05-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-03-800.jpg"/>

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-04-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-08-800.jpg"/>

            <Row mb={80} mbXs={40}>
              <Col md={8} mdOffset={2} sm={10} smOffset={1}>
                <h2 className="uppercase mb16">1913</h2>
                <p className="lead">
                    The Casino is a high class, luxurious place. Only the rich people are able participate and the dress code is mandatory. The Casino is attracting gamblers from all over Europe. It is considered a building of perdition, as many people lose their fortunes here and end up with a bullet in their head later, in a hotel room.
                </p>
              </Col>
            </Row>

            <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-23-1200.jpg" />

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-10-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-07-800.jpg"/>

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-17-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-06-800.jpg"/>

            <Row mb={80} mbXs={40}>
              <Col md={8} mdOffset={2} sm={10} smOffset={1}>
                <h2 className="uppercase mb16">2002</h2>
                <p className="lead">
                    I'm 17 and together with a colleague we are skipping classes. After getting the traditional Giant Shaorma from the Tomis Port, we are heading towards the Casino. The building doesn't look that pretty, but we don't care. We are young and the only thing that matters is that the Casino has a pool table. We make the effort to walk such a huge distance because this the cheapest place in town where we can play pool. We are getting inside the left wing of the Casino and the first thing I notice is the smell of smoke emanating from the walls. We are the only clients here. There is a bar with lots of alchohol bottles, but we don't drink. The pool table is really old, the cues are old as well and we are barely able to play. After half an hour we get pissed and leave.
                </p>
              </Col>
            </Row>

            <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-09-1200.jpg" />

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-11-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-12-800.jpg"/>

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-13-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-14-800.jpg"/>

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-18-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-16-800.jpg"/>

            <Row mb={80} mbXs={40}>
              <Col md={8} mdOffset={2} sm={10} smOffset={1}>
                <h2 className="uppercase mb16">2015</h2>
                <p className="lead">
                    I'm back in my hometown for a few days and now I'm heading towards the old Casino. I already know that it's a ruin and I want to take some pictures of it before they renovate it. This is of course, a joke, as nobody has any plan to do it. They promised many years in a row to renovate it, but nobody did anything.
                </p>
                <p className="lead">
                  Getting closer and closer to the seafront, I'm starting to notice the smell, strong and salty like always! It finally feels like home! The Casino is indeed a ruin, lots of people are walking around it, many taking pictures and selfies. There is no orchestra, like in the glorious days, 100 years ago. Instead an accordionist together with his cat is trying to cheer up everybody who passes by. A nostalgic feeling fills my heart.
                </p>
              </Col>
            </Row>

            <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-19-1200.jpg" />

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-20-800.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-24-800.jpg"/>

            <TwoImages
              src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-29-1200.jpg"
              src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-22-1200.jpg"/>
        </Container>
      </section>

      <FullImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-32-1200.jpg"/>

      <section>
        <Container>
          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-25-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-27-800.jpg"/>

          <TwoImages
            src1="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-28-800.jpg"
            src2="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-26-800.jpg"/>

          <OneImage src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/image-34-1200.jpg" />

          <Row>
            <Col md={8} mdOffset={2} sm={10} smOffset={1}>
              <h2 className="uppercase mb16">The Result</h2>
              <p className="lead mb48">An 80% increase in sales for Medium Rare.</p>
              <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>);
  }
}

export default CasinoPage;
