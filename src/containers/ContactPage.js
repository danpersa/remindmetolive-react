import React from 'react';

// Since this component is simple and static, there's no parent container for it.
class ContactPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className="pt0 pb0">
          <section className="page-title page-title-4 bg-secondary">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h3 className="uppercase mb0">Contact Us</h3>
                      </div>
                      <div className="col-md-6 text-right">
                          <ol className="breadcrumb breadcrumb-2">
                              <li>
                                  <a href="index.html">Home</a>
                              </li>
                              <li>
                                  <a href="#">Pages</a>
                              </li>
                              <li className="active">Contact</li>
                          </ol>
                      </div>
                  </div>
              </div>
          </section>
          <section className="pt0 pb0">
              <img alt="Feature Image" className="col-xs-12 p0 border-top-bottom" src="images/stories/2016-12-15-florence-rulz/wide-05-2048.jpg" />
          </section>
          <section>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6 col-md-5">
                          <h4 className="uppercase">Get In Touch</h4>
                          <p>
                              We would love to hear from you!

                              <br/>Be part of the journey and share your thoughts about our project. Tell us which stories you like. Tell us your story.
                          </p>
                          <hr />
                          <p className="lead">
                              <i className="ti-map"/> Berlin, 10405
                              <br />
                              <br />
                              <i className="ti-email"/> contact@remindmetolive.com
                          </p>
                          <hr />
                      </div>
                      <div className="col-sm-6 col-md-5 col-md-offset-1">
                          <form className="form-email" data-success="Thanks for your submission, we will be in touch shortly." data-error="Please fill all fields correctly.">
                              <input type="text" className="validate-required" name="name" placeholder="Your Name" />
                              <input type="text" className="validate-required validate-email" name="email" placeholder="Email Address" />
                              <textarea className="validate-required" name="message" rows="4" placeholder="Message" />
                              <button type="submit">Send Message</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </section>
      );
  }
}

export default ContactPage;
