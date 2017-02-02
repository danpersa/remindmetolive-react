import React from 'react';
import TopPageTwoColumns from './TopPageTwoColumns.js';

// Since this component is simple and static, there's no parent container for it.
class ContactPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <TopPageTwoColumns teaser="/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-07-2048.jpg"
                         title="Contact Us">
        <div>
          <h4 className="uppercase">Get In Touch</h4>
          <p className="lead">
            We would love to hear from you!
            <br/>Be part of the journey and share your thoughts about our project. Tell us which stories you like. Tell us your story.
          </p>
          <hr />
          <p>
            <i className="ti-map"/> Berlin, Germany
            <br />
            <br />
            <i className="ti-email"/> contact@remindmetolive.com
          </p>
          <hr />
        </div>
        <div>
          <form className="form-email" data-success="Thanks for your submission, we will be in touch shortly." data-error="Please fill all fields correctly.">
            <input type="text" className="validate-required" name="name" placeholder="Your Name" />
            <input type="text" className="validate-required validate-email" name="email" placeholder="Email Address" />
            <textarea className="validate-required" name="message" rows="4" placeholder="Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </TopPageTwoColumns>
    );
  }
}

export default ContactPage;
