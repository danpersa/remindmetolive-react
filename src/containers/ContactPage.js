import React from 'react';
import TopPageOneColumn from './TopPageOneColumn';
import Row from '../components/base/Row';

class ContactPage extends React.Component {

  render() {
    return (
      <TopPageOneColumn teaser="/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-07-2048.jpg"
                        title="Contact Us">
        <section className="pt0 pb0 text-center" >
          <h2>Get In Touch</h2>
          <h6 className="lead">
            We would love to hear from you! <br />
            Be part of the journey and share your thoughts about our project. <br />
            Tell us which stories you like!
            Tell us your story!
          </h6>
          <hr />
          <Row>
            <i className="ti-map"/> Berlin, Germany
          </Row>
          <Row mb="32">
            <i className="ti-email"/> contact@remindmetolive.com
          </Row>
          <hr />
        </section>
      </TopPageOneColumn>
    );
  }
}

export default ContactPage;
