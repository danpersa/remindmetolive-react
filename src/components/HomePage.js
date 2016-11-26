import React from 'react';

const HomePage = () => {
  return (
    <section className="pt0 pb0">

      <section className="pt120 pb120 pt-xs-80 pb-xs-80">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
              <h3>Stories. Adventure. Feelings.</h3>
                <p className="lead mb0">
                    <strong>Remind Me To Live</strong> is a project born from our passion for photography and stories. It's our way of sharing our optimistic point of view about life. It's our way of showing that life is beautiful and share our feelings about it.
                </p>
            </div>
          </div>
        </div>
      </section>

// http://foundry.mediumra.re/home-architecture.html -> use tabs for the vision
      <section className="pt24 pb0 bg-secondary">
          <div className="container">
              <div className="row">
                  <div className="col-md-8 col-md-offset-2 col-sm-12 text-center mb80 mb-xs-24">
                      <h6 className="uppercase fade-half">Our Vision</h6>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-4 text-center">
                      <div className="feature">
                          <i className="ti-gallery icon fade-3-4 inline-block mb16" />
                          <h4>Passion</h4>
                          <p>
                              We are passionate about photography and stories. We enjoy every bit of our work and we want to share our passion with you!
                          </p>
                      </div>
                  </div>
                  <div className="col-sm-4 text-center">
                      <div className="feature">
                          <i className="ti-package icon fade-3-4 inline-block mb16" />
                          <h4>Creativity</h4>
                          <p>
                              We always challenge ourselves to come up with new ideas and new projects. We try to look at the world with fresh eyes, to discover new perspectives and to share that with you.
                          </p>
                      </div>
                  </div>
                  <div className="col-sm-4 text-center">
                      <div className="feature">
                          <i className="ti-layers icon fade-3-4 inline-block mb16" />
                          <h4>Quality</h4>
                          <p>
                              We don't like compromises on quality! From our daily jobs we learned that quality is not negotiable and we strive to create excellent work!
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
            <div className="col-sm-6">
              <div className="image-tile inner-title title-center text-center">
                <a hrefName="#">
                  <img alt="Pic" src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/teaser-01-800.jpg" />
                    <div className="title">
                      <h4 className="uppercase mb0">The Casino Of Constanta</h4>
                    </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="image-tile inner-title title-center text-center">
                <a hrefName="#">
                  <img alt="Pic" src="http://static.remindmetolive.com/images/streets-of-berlin/2015-11-20-lady-in-red-with-white-dog/teaser-01-800.jpg" />
                    <div className="title">
                      <h4 className="uppercase mb0">Lady In Red With White Dog</h4>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
           <div className="container">
               <div className="row">
                   <div className="col-sm-6 masonry-item project" data-filter="People">
                       <div className="image-tile hover-tile text-center">
                           <img alt="image" className="background-image" src="http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/teaser-01-800.jpg" />
                           <div className="hover-state">
                               <a href="#">
                                   <h3 className="uppercase mb8">The Casino of Constanta</h3>
                                   <h6 className="uppercase">Travel</h6>
                               </a>
                           </div>
                       </div>

                   </div>
                   <div className="col-sm-6 masonry-item project" data-filter="People">
                       <div className="image-tile hover-tile text-center">
                           <img alt="image" className="background-image" src="http://static.remindmetolive.com/images/streets-of-berlin/2015-11-20-lady-in-red-with-white-dog/teaser-01-800.jpg" />
                           <div className="hover-state">
                               <a href="#">
                                   <h3 className="uppercase mb8">Lady In Red With White Dog</h3>
                                   <h6 className="uppercase">Streets of Berlin</h6>
                               </a>
                           </div>
                       </div>

                   </div>
               </div>
           </div>
       </section>
    </section>



    // use http://foundry.mediumra.re/home-default-4.html for latest stories
    // http://foundry.mediumra.re/home-fashion.html
    // http://foundry.mediumra.re/home-adventure.html
  );
};

export default HomePage;
