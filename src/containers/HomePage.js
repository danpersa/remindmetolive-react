import React from 'react';
import SampleGallery from '../components/SampleGallery';
import StoryHover from '../components/stories/StoryHover';
import SocialList from '../components/SocialList';

const HomePage = () => {
  return (
    <section className="pt0 pb0">
      <SampleGallery />

      <section className="pt120 pb120 pt-xs-80 pb-xs-80">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
              <h3>Stories. Adventure. Feelings.</h3>
                <p className="lead mb0">
                  <strong>Remind Me To Live</strong> is a project born from our passion
                  for photography and stories. It's our way of sharing our optimistic
                  point of view about life. This is our way of showing that life is beautiful
                  and share our feelings about it.
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt24 pb0 bg-secondary">
          <div className="container">
              <div className="row pb0">
                  <div className="col-md-8 col-md-offset-2 col-sm-12 text-center mb32 mb-xs-24">
                      <h3>Our Vision</h3>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-4 text-center">
                      <div className="feature">
                          <h4>Passion</h4>
                          <p>
                            We are passionate about photography and stories. We enjoy
                            every bit of our work and we want to share our passion with you!
                          </p>
                      </div>
                  </div>
                  <div className="col-sm-4 text-center">
                      <div className="feature">
                          <h4>Creativity</h4>
                          <p>
                            We always challenge ourselves to come up with new
                            ideas and new projects. We try to look at the world
                            with fresh eyes, to discover new perspectives and to
                            share that with you.
                          </p>
                      </div>
                  </div>
                  <div className="col-sm-4 text-center">
                      <div className="feature">
                          <h4>Quality</h4>
                          <p>
                            We don't like compromises on quality! From our daily jobs
                            we learned that quality is not negotiable and we strive
                            to create excellent work!
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="pt72 pb80 pt-xs-80 pb-xs-80">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
              <h3>Check out our latest stories</h3>
                <p className="lead mb0">
                  Beautiful places! Interesting people! Our every day lives and culture!
                </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt40 pb0">
        <div className="container">
          <div className="row">
            <StoryHover title="London After Brexit"
                        href="/stories/london-after-brexit.html"
                        src="/images/stories/2016-09-10-london-after-brexit/teaser-01-800.jpg" />

            <StoryHover title="Pisa Afterglow"
                        href="/stories/pisa-afterglow.html"
                        src="/images/stories/2016-10-08-pisa-afterglow/teaser-02-800.jpg" />
          </div>
        </div>
      </section>
      <section className="pt32 pb48 text-center" >
        <SocialList/>
      </section>
    </section>

    // http://foundry.mediumra.re/home-adventure.html
  );
};

export default HomePage;
