import React from 'react';
import {Link} from 'react-router';
//import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section className="page-title page-title-4 bg-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="uppercase mb0">About Us</h3>
                    </div>
                    <div className="col-md-6 text-right">
                        <ol className="breadcrumb breadcrumb-2">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                            </li>
                            <li className="active">About</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section className="pt0 pb0">
            <img alt="Feature Image" className="col-xs-12 p0 border-top-bottom" src="images/stories/2016-12-15-florence-rulz/wide-03-2048.jpg" />
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Who we are</h2>
                        <h6 className="lead">
                          Hiya Friends,

                          We are Adelina and Dan, a couple passionate about photography and stories. <strong>Remindmetolive</strong> is a project we started working on, in the summer of 2015. This is the way we contribute to the large, funny and poignant human story.

                          Through our photography and narratives we are sharing a view of the world and remind you that living is not just about being alive, it's about experiencing life through all the little ups and downs that makes it worth living.

                          Have a look around, check out the stories and be a part of our journey. Thank you for supporting us and believing in what we are doing!
                        </h6>
                    </div>
                    <div className="col-sm-6">
                        <h2>What we do</h2>
                        <h6 className="lead">
                          We started the <strong>remindmetolive</strong> project to share stories of people and places through photography.

                          We believe that a photography is a really powerful form of art, in the sense that it has the ability to transmit emotions, mood, ideas and messages - all of which are also important elements of story telling.

                          Each and every one of us has a story to tell and by sharing it we can make the world a better place, as it can inspire other people living now, or the generations to come. No joke, it's been scientifically proven.

                          Let us help you shape and <strong>share your story</strong> with the world.
                        </h6>
                    </div>
                </div>
            </div>
        </section>
      </div>
      );
  }
}

export default AboutPage;
