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
               <a>
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
                             <p className="lead mb64">
                                    Default buttons will appear with white borders.
                             </p>
                         </div>
                       </div>
                       item.href &&
                       <div className="row">
                         <div className="col-sm-12 text-center">
                           <Link className="btn btn-white btn-lg" to={item.href}>Explore</Link>
                         </div>
                       </div>
                     </div>
                     {item.description}
                   </span>
                 }
               </a>
           }
         </div>
       );
     }

     render() {

       const images = [
           {
             original: 'http://static.remindmetolive.com/images/stories/2016-09-10-london-after-brexit/teaser-03-2048.jpg',
             thumbnail: 'http://placekitten.com/g/250/150'
           },
           {
             original: 'http://static.remindmetolive.com/images/stories/2016-06-30-bridges-of-florence/teaser-03-2048.jpg',
             thumbnail: 'http://placekitten.com/g/250/150',
             description: 'Optional description...',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: 'http://static.remindmetolive.com/images/stories/2016-06-11-tenerife-the-land-of-eternal-spring/teaser-07-2048.jpg',
             thumbnail: 'http://placekitten.com/g/250/150'
           },
           {
             original: 'http://static.remindmetolive.com/images/stories/2016-05-17-lanzarote-beaches/teaser-01-1600.jpg',
             thumbnail: 'http://placekitten.com/g/250/150'
           },
           {
             original: 'http://static.remindmetolive.com/images/stories/2015-09-29-lunar-landscapes-of-lanzarote/teaser-02-1600.jpg',
             thumbnail: ''
           },
           {
             original: 'http://static.remindmetolive.com/images/stories/2015-10-15-the-casino-of-constanta/teaser-02-1600.jpg',
             description: 'Optional description...',
             href: '/casino',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: 'http://static.remindmetolive.com/images/contact/teaser1600.jpg',
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
