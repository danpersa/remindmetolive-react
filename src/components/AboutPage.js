import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {

  constructor() {
    super();
    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      slideInterval: 2000,
      showVideo: {},
    };
  }

  _renderItem(item) {
     return (
       <div className="image-gallery-image">
         {
             <a>
               <div className="play-button" />
               <img src={item.original}/>
               {
                 item.description &&
                   <span
                     className="image-gallery-description"
                     style={{right: '0', left: 'initial'}}
                   >
                     {item.description}
                   </span>
               }
             </a>
         }
       </div>
     );
   }


  render() {

    return (
        <div>
          <h2 className="alt-header">About</h2>
          <p>
            This example app is part of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
            starter kit</a>.
          </p>
          <p>
            <Link to="/badlink">Click this bad link</Link> to see the 404 page.
          </p>
        </div>
      );
  }
}

export default AboutPage;
