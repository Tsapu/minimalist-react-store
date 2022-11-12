import React from 'react'
import GalleryPreview from './GalleryPreview';
import SlideControls from './SlideControls';
import './Gallery.css'

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.images[0],
      activeIndex: 0,
    }
  }

  setImage = i => {
    this.setState({
      currentImage: this.props.images[i],
      activeIndex: i
    })
  }

  render() {
    const {images, inStock} = {...this.props}
    const {activeIndex, currentImage} = {...this.state}
    return (
      <div className={`gallery ${!inStock ? 'unavailable' : ''}`}>
        <GalleryPreview images={images} setImage={this.setImage} activeIndex={activeIndex} />
        <div className="spotlight-container relative">
          <img className="spotlight-image" src={currentImage} alt=""></img>
          {(images.length > 1) &&
            <SlideControls
              length={images.length}
              activeIndex={activeIndex}
              setImage={this.setImage}
              size={2}/>
          }
          {!inStock && <div className="stock-msg">OUT OF STOCK</div>}
        </div>
      </div>
    )
  }
}

export default Gallery;