import React from 'react';

const SignupForm = () => {
  return (
    <section className="pt64 pb64 pt-xs-32 pb-xs-32 bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
            <h3>Do you like our stories?</h3>
            <h4>Subscribe to our mailing list</h4>
            <form action="//remindmetolive.us13.list-manage.com/subscribe/post?u=b0b8fa52dd681e157b4d48592&amp;id=02cb3e19d7"
                  method="post"
                  className="halves" target="_blank">
              <input type="text" name="EMAIL" id="mce-EMAIL" placeholder="your email" />
              <input type="submit" value="Subscribe" name="subscribe" className="btn" />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                <input type="text" name="b_b0b8fa52dd681e157b4d48592_02cb3e19d7" tabIndex="-1" value="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
