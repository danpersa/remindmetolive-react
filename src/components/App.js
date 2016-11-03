import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <div className="nav-container">
        <a id="top" />
        <nav>
            <div className="nav-utility">
                <div className="module left">
                    <i className="ti-location-arrow">&nbsp;</i>
                    <span className="sub">68 Cardamon Place, Melbourne Vic 3000</span>
                </div>
                <div className="module left">
                    <i className="ti-email">&nbsp;</i>
                    <span className="sub">hello@foundry.net</span>
                </div>
                <div className="module right">
                    <a className="btn btn-sm hidden-xs hidden-sm hidden-md" href="variant/builder.html">Try Builder</a>
                    <a className="btn btn-sm btn-filled" href="http://themeforest.net/item/foundry-multipurpose-html-variant-page-builder/11562108?ref=medium_rare">Buy Now</a>
                </div>
            </div>
            <div className="nav-bar">
                <div className="module left">
                    <a href="index.html">
                        <img className="logo logo-light" alt="Foundry" src="http://placekitten.com/g/200/100" />
                        <img className="logo logo-dark" alt="Foundry" src="http://placekitten.com/g/200/100" />
                    </a>
                </div>
                <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                    <i className="ti-menu" />
                </div>
                <div className="module-group right">
                    <div className="module left">
                        <ul className="menu">
                            <li className="has-dropdown">
                                <a href="#">
                                    Home
                                </a>
                                <ul className="mega-menu">
                                    <li>
                                        <ul>
                                            <li>
                                                <span className="title">Concepts</span>
                                            </li>
                                            <li>
                                                <a href="home-adventure.html">Adventure Travel</a>
                                            </li>
                                            <li>
                                                <a href="home-agency.html">Agency</a>
                                            </li>
                                            <li>
                                                <a href="home-agency-2.html">Agency 2</a>
                                                <span className="label">New!</span>
                                            </li>
                                            <li>
                                                <a href="home-app-landing.html">App Landing</a>
                                            </li>
                                            <li>
                                                <a href="home-app-landing-2.html">App Landing 2</a>
                                            </li>
                                            <li>
                                                <a href="home-capital-firm.html">Capital Firm</a>
                                            </li>
                                            <li>
                                                <a href="home-fashion.html">Fashion</a>
                                            </li>
                                            <li>
                                                <a href="home-fitness.html">Fitness</a>
                                            </li>
                                            <li>
                                                <a href="home-restaurant.html">Restaurant</a>
                                            </li>
                                            <li>
                                                <a href="home-music.html">Music</a>
                                            </li>
                                            <li>
                                                <a href="home-event.html">Event / Seminar</a>
                                            </li>
                                            <li>
                                                <a href="home-architecture.html">Architecture</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <a href="home-photography.html">Photography</a>
                                            </li>
                                            <li>
                                                <a href="home-photography-2.html">Ken Burns</a>
                                            </li>
                                            <li>
                                                <a href="home-personal-portfolio.html">Portfolio</a>
                                            </li>
                                            <li>
                                                <a href="home-property.html">Property Listing</a>
                                            </li>
                                            <li>
                                                <a href="home-resume.html">Resumé</a>
                                            </li>
                                            <li>
                                                <a href="home-winery.html">Winery</a>
                                            </li>
                                            <li>
                                                <span className="title">Home Pages</span>
                                            </li>
                                            <li>
                                                <a href="index.html">Home classNameic</a>
                                            </li>
                                            <li>
                                                <a href="home-default-2.html">Home Layout 2</a>
                                            </li>
                                            <li>
                                                <a href="home-default-3.html">Home Layout 3</a>
                                            </li>
                                            <li>
                                                <a href="home-default-4.html">Home Layout 4</a>
                                            </li>
                                            <li>
                                                <a href="home-default-5.html">Home Layout 5</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">
                                    Pages
                                </a>
                                <ul className="mega-menu">
                                    <li>
                                        <ul>
                                            <li>
                                                <span className="title">Inner Pages</span>
                                            </li>
                                            <li>
                                                <a href="page-about-us-1.html">About Us 1</a>
                                            </li>
                                            <li>
                                                <a href="page-about-us-2.html">About Us 2</a>
                                            </li>
                                            <li>
                                                <a href="page-about-us-3.html">About Us 3</a>
                                            </li>
                                            <li>
                                                <a href="page-services-1.html">Services 1</a>
                                            </li>
                                            <li>
                                                <a href="page-services-2.html">Services 2</a>
                                            </li>
                                            <li>
                                                <a href="page-services-3.html">Services 3</a>
                                            </li>
                                            <li>
                                                <a href="page-contact-1.html">Contact 1</a>
                                            </li>
                                            <li>
                                                <a href="page-contact-2.html">Contact 2</a>
                                            </li>
                                            <li>
                                                <a href="page-contact-3.html">Planner</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span className="title">Utility Pages</span>
                                            </li>
                                            <li>
                                                <a href="page-login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="page-register.html">Register</a>
                                            </li>
                                            <li>
                                                <a href="page-coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a href="page-faq.html">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="page-confirmation.html">Confirmation</a>
                                            </li>
                                            <li>
                                                <a href="page-countdown.html">Countdown</a>
                                            </li>
                                            <li>
                                                <a href="page-countdown-2.html">Countdown 2</a>
                                            </li>
                                            <li>
                                                <a href="page-404.html">404 - Error</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">
                                    Elements
                                </a>
                                <ul className="mega-menu">
                                    <li>
                                        <ul>
                                            <li>
                                                <span className="title">Elements</span>
                                            </li>
                                            <li>
                                                <a href="elements-buttons.html">
                                                    <i className="ti-link"/> Buttons</a>
                                            </li>
                                            <li>
                                                <a href="elements-tabs.html">
                                                    <i className="ti-layout-tab"/> Tabbed Content</a>
                                            </li>
                                            <li>
                                                <a href="elements-progress.html">
                                                    <i className="ti-rocket"/> Progress Bars</a>
                                            </li>
                                            <li>
                                                <a href="elements-accordions.html">
                                                    <i className="ti-layout-accordion-separated"/> Accordions</a>
                                            </li>
                                            <li>
                                                <a href="elements-alerts.html">
                                                    <i className="ti-flag-alt"/> Alerts</a>
                                            </li>
                                            <li>
                                                <a href="elements-form-inputs.html">
                                                    <i className="ti-pencil-alt"/> Form Inputs</a>
                                            </li>
                                            <li>
                                                <a href="elements-countdown.html">
                                                    <i className="ti-alarm-clock"/> Countdowns</a>
                                            </li>
                                            <li>
                                                <a href="elements-modals.html">
                                                    <i className="ti-layout-slider-alt"/> Modals</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span className="title">Elements</span>
                                            </li>
                                            <li>
                                                <a href="elements-pricing.html">
                                                    <i className="ti-money"/> Pricing Tables</a>
                                            </li>
                                            <li>
                                                <a href="elements-icon-boxes.html">
                                                    <i className="ti-eye"/> Icon Boxes</a>
                                            </li>
                                            <li>
                                                <a href="elements-widgets.html">
                                                    <i className="ti-layout-media-right"/> Widgets</a>
                                            </li>
                                            <li>
                                                <a href="elements-typography.html">
                                                    <i className="ti-text"/> Typography</a>
                                            </li>
                                            <li>
                                                <a href="elements-lists.html">
                                                    <i className="ti-list"/> Lists</a>
                                            </li>
                                            <li>
                                                <a href="elements-grid.html">
                                                    <i className="ti-view-grid"/> Grid Structure</a>
                                            </li>
                                            <li>
                                                <a href="elements-textimage.html">
                                                    <i className="ti-layout-list-large-image"/> Text &amp; Image</a>
                                            </li>
                                            <li>
                                                <a href="elements-intros.html">
                                                    <i className="ti-microphone"/> Intro Sections</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span className="title">Elements</span>
                                            </li>
                                            <li>
                                                <a href="elements-titles.html">
                                                    <i className="ti-layout-cta-left"/> Titles Left</a>
                                            </li>
                                            <li>
                                                <a href="elements-titles-center.html">
                                                    <i className="ti-layout-cta-center"/> Titles Center</a>
                                            </li>
                                            <li>
                                                <a href="elements-video.html">
                                                    <i className="ti-video-clapper"/> Video Inline</a>
                                            </li>
                                            <li>
                                                <a href="elements-video-bg.html">
                                                    <i className="ti-video-clapper"/> Video BG</a>
                                            </li>
                                            <li>
                                                <a href="elements-video-slider.html">
                                                    <i className="ti-video-clapper"/> Video Slider</a>
                                            </li>
                                            <li>
                                                <a href="elements-galleries.html">
                                                    <i className="ti-gallery"/> Image Galleries</a>
                                            </li>
                                            <li>
                                                <a href="elements-parallax.html">
                                                    <i className="ti-layers"/> Parallax</a>
                                            </li>
                                            <li>
                                                <a href="elements-nav-light.html">
                                                    <i className="ti-menu-alt"/> Nav Styles</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">
                                    Portfolio
                                </a>
                                <ul>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Contained
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="portfolio-grid-2col.html">
                                                    2 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-grid.html">
                                                    3 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-grid-4col.html">
                                                    4 Columns
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Wide
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="portfolio-wide-2col.html">
                                                    2 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide.html">
                                                    3 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-wide-4col.html">
                                                    4 Columns
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="portfolio-parallax.html">
                                            Parallax
                                        </a>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Single
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="portfolio-single-1.html">
                                                    Case Study 1
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-2.html">
                                                    Case Study 2
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-3.html">
                                                    Case Study 3
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-4.html">
                                                    Case Study 4
                                                </a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single-5.html">
                                                    Case Study 5
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">
                                    Shop
                                </a>
                                <ul>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Shop Layout
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="shop-sidebar.html">
                                                    Sidebar Left
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-sidebar-right.html">
                                                    Sidebar Right
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-fullwidth-4col.html">
                                                    4 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-fullwidth.html">
                                                    3 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-fullwidth-2col.html">
                                                    2 Columns
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Product Single
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="shop-product-sidebar-left.html">
                                                    Sidebar Left
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-product-sidebar.html">
                                                    Sidebar Right
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-product-fullwidth.html">
                                                    No Sidebar
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">
                                            Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-checkout.html">
                                            Checkout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="#">
                                    Blog
                                </a>
                                <ul>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Listing
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="blog-sidebar.html">
                                                    Sidebar Left
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-sidebar-right.html">
                                                    Sidebar Right
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-no-sidebar.html">
                                                    No Sidebar
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Masonry
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="blog-masonry-sidebar.html">
                                                    Sidebar Left
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-masonry-sidebar-right.html">
                                                    Sidebar Right
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-masonry.html">
                                                    3 Columns
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-masonry-2col.html">
                                                    2 Columns
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">
                                            Single
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="blog-single-sidebar.html">
                                                    Sidebar Left
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-single-sidebar-right.html">
                                                    Sidebar Right
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-single-no-sidebar.html">
                                                    No Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-single-disqus.html">
                                                    Disqus Comments
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="blog-simple-feed.html">
                                            Simple Feed
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="module widget-handle search-widget-handle left">
                        <div className="search">
                            <i className="ti-search"/>
                            <span className="title">Search Site</span>
                        </div>
                        <div className="function">
                            <form className="search-form">
                                <input type="text" placeholder="Type Here" />
                            </form>
                        </div>
                    </div>
                    <div className="module widget-handle cart-widget-handle left">
                        <div className="cart">
                            <i className="ti-bag"/>
                            <span className="label number">2</span>
                            <span className="title">Shopping Cart</span>
                        </div>
                        <div className="function">
                            <div className="widget">
                                <h6 className="title">Shopping Cart</h6>
                                <hr />
                                <ul className="cart-overview">
                                    <li>
                                        <a href="#">
                                            <img alt="Product" src="img/shop-widget-1.png" />
                                            <div className="description">
                                                <span className="product-title">Canvas Backpack</span>
                                                <span className="price number">$39.90</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img alt="Product" src="img/shop-widget-2.png" />
                                            <div className="description">
                                                <span className="product-title">Vintage Camera</span>
                                                <span className="price number">$249.50</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <hr />
                                <div className="cart-controls">
                                    <a className="btn btn-sm btn-filled" href="#">Checkout</a>
                                    <div className="list-inline pull-right">
                                        <span className="cart-total">Total: </span>
                                        <span className="number">$289.40</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="module widget-handle language left">
                        <ul className="menu">
                            <li className="has-dropdown">
                                <a href="#">ENG</a>
                                <ul>
                                    <li>
                                        <a href="#">French</a>
                                    </li>
                                    <li>
                                        <a href="#">Deutsch</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div className="main-container">
      <section className="page-title page-title-4">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <h3 className="uppercase mb0">Project Title</h3>
                  </div>
                  <div className="col-md-6 text-right">
                      <ol className="breadcrumb breadcrumb-2">
                          <li>
                              <a href="index.html">Home</a>
                          </li>
                          <li>
                              <a href="#">Portfolio</a>
                          </li>
                          <li className="active">Project Title</li>
                      </ol>
                  </div>
              </div>
          </div>
      </section>
      <section className="pt0 pb40">
          <div className="container">
              <div className="row">
                  <div className="col-sm-3 col-xs-6 mb-xs-24">
                      <span>Client:</span>
                      <h6 className="uppercase mb0">Medium Rare Inc.</h6>
                  </div>
                  <div className="col-sm-3 col-xs-6 mb-xs-24">
                      <span>Our Role:</span>
                      <h6 className="uppercase mb0">Design, Consultation</h6>
                  </div>
                  <div className="col-sm-3 col-xs-6 mb-xs-24">
                      <span>Turnaround:</span>
                      <h6 className="uppercase mb0">May - July</h6>
                  </div>
                  <div className="col-sm-3 col-xs-6 mb-xs-24">
                      <span>Category:</span>
                      <h6 className="uppercase mb0">Rebranding</h6>
                  </div>
              </div>
          </div>
      </section>
      <section className="pt0 pb0">
          <img alt="Feature Image" className="col-xs-12 p0" src="http://placekitten.com/g/2048/600" />
      </section>

      <section>
        <div className="container">
            <div className="row mb64 mb-xs-24">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <h2 className="uppercase mb16">The Brief</h2>
                    <p className="lead mb48">A short description to add some contetxt.</p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                </div>
            </div>

            <div className="row mb80 mb-xs-40">
                <div className="col-sm-6 mb-xs-16">
                    <img alt="Project Image" src="http://placekitten.com/g/800/600" />
                </div>
                <div className="col-sm-6">
                    <img alt="Project Image" src="http://placekitten.com/g/800/600" />
                </div>
            </div>
            <div className="row mb80 mb-xs-40">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <h6 className="uppercase">An Additional Description</h6>
                    <p className="lead">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                </div>
            </div>
            <div className="row mb80 mb-xs-24">
                <div className="col-sm-12 text-center">
                    <img alt="Project Image" src="http://placekitten.com/g/1600/600" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                    <h2 className="uppercase mb16">The Result</h2>
                    <p className="lead mb48">An 80% increase in sales for Medium Rare.</p>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                </div>
            </div>
        </div>
    </section>

      <div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {props.children}
      </div>
    </div>
  </div>


  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
