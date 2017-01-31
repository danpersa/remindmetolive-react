import React from 'react';
import ImageGallery from 'react-image-gallery';
//import "react-image-gallery/styles/css/image-gallery.css";
import {Link} from 'react-router';

class SampleGallery extends React.Component {

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
        slideInterval: 6000,
        showVideo: {},
      };
    }

    _renderItem(item) {
       return (
         <div className="image-gallery-image">
           {
               <div>
                 <img src={item.original}/>
                 {
                   item.description &&
                   <span
                     className="image-gallery-description image-bg"
                     style={{right: '0', left: 'initial'}}>
                     <div className="container" style={{right: '0', left: 'initial'}}>
                       <div className="row">
                         <div className="col-sm-12 text-center">
                           <h4 className="uppercase mb16">Buttons On Image</h4>
                             <p className="lead mb32">{item.description}</p>
                             {item.href &&
                               <Link className="btn btn-white btn-lg" to={item.href}>Explore</Link>
                             }
                         </div>
                       </div>
                     </div>
                   </span>
                 }
               </div>
           }
         </div>
       );
     }

     render() {

       const images = [
           {
             original: '/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-03-2048.jpg',
             thumbnail: 'http://placekitten.com/g/250/150'
           },
           {
             original: '/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-04-2048.jpg',
             thumbnail: 'http://placekitten.com/g/250/150'
           },
           {
             original: '/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-05-2048.jpg',
             thumbnail: 'http://placekitten.com/g/250/150',
             description: 'Optional description...',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: '/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-06-2048.jpg',
             description: 'Optional description...',
             href: '/the-casino-of-constanta',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: '/images/stories/2017-01-15-florence-theme-park-of-renaissance/wide-07-2048.jpg',
             thumbnail: ''
           }
         ];
       return (
           <ImageGallery
             ref={i => this._imageGallery = i}
             items={images}
             slideInterval={6000}
             infinite={true}
             autoPlay={true}
             showBullets={true}
             showThumbnails={false}
              />
         );
     }
}

export default SampleGallery;
