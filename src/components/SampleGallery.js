import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
        slideInterval: 2000,
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
                       className="image-gallery-description"
                       style={{right: '0', left: 'initial'}}>
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
             original: 'http://placekitten.com/g/800/400',
             thumbnail: 'http://placekitten.com/g/250/150',
             description: 'Optional description...',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: 'http://placekitten.com/g/800/400',
             thumbnail: 'http://placekitten.com/g/250/150'
           },
           {
             original: 'http://placekitten.com/g/800/400',
             thumbnail: 'http://placekitten.com/g/250/150'
           }
         ];
       return (
           <ImageGallery
             ref={i => this._imageGallery = i}
             items={images}
             slideInterval={2000}
             infinite={true}
             autoPlay={true}
             showBullets={true}
             showThumbnails={false}
              />
         );
     }
}

export default SampleGallery;
