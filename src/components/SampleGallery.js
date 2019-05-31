import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import { imageHost } from '../isomorphicVars';

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
                 <img src={imageHost + item.original}/>
                 {
                   item.title &&
                   <span
                     className="image-gallery-description image-bg"
                     style={{right: '0', left: '0'}}>
                     <div className="container" style={{right: '0', left: 'initial'}}>
                       <div className="row">
                         <div className="col-sm-12 text-center">
                           {item.title &&
                             <h2 className="uppercase mb16 stroke-1 gallery-title">{item.title}</h2>
                           }
                           {item.subTitle &&
                             <h3 className="lead mb32 gallery-sub-title">{item.subTitle}</h3>
                           }
                           {item.href &&
                             <Link className="btn btn-white btn-lg" to={item.href}>{item.hrefTitle}</Link>
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
             original: '/images/L/stories/2019-06-04-the-magic-of-gran-canaria/image-22.jpg',
             title: 'The Magic',
             subTitle: "Of Gran Canaria",
             href: '/stories/the-magic-of-gran-canaria.html',
             hrefTitle: 'Read The Story',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: '/images/L/stories/2018-09-05-trendy-stockholm/wide-04.jpg',
             title: 'Stockholm',
             subTitle: "A Trendy City",
             href: '/stories/trendy-stockholm.html',
             hrefTitle: 'Take a Look',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: '/images/L/stories/2017-12-15-cretan-sunsets/wide-11.jpg',
             title: 'Cretan',
             subTitle: 'Sunsets',
             href: '/stories/cretan-sunsets.html',
             hrefTitle: 'See The Sunsets',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: '/images/L/stories/2017-11-20-top-10-milan/wide-04.jpg',
             title: 'Top 10',
             subTitle: 'Milan',
             href: '/stories/top-10-milan.html',
             hrefTitle: 'Discover Milan',
             renderItem: this._renderItem.bind(this)
           },
           {
             original: '/images/stories/2017-08-20-midsummer-in-helsinki/wide-02-2048.jpg',
             title: 'Midsummer',
             subTitle: 'in Helsinki',
             href: '/stories/midsummer-in-helsinki.html',
             hrefTitle: 'Discover Helsinki',
             renderItem: this._renderItem.bind(this)
           }
         ];
       return (
           <ImageGallery
             ref={i => this._imageGallery = i}
             items={images}
             slideInterval={12000}
             infinite={true}
             autoPlay={true}
             showBullets={true}
             showThumbnails={false} />
         );
     }
}

export default SampleGallery;
