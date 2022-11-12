import React, { PureComponent } from 'react';
import SlideControls from '../PDP/Gallery/SlideControls';
import './ItemGallery.css';

export default class ItemGallery extends PureComponent {
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
    const nrOfImages = this.props.images.length;
    const {currentImage, activeIndex} = {...this.state}
    return (
      <div className="product-img relative">
        <img src={currentImage} alt=""></img>
        {(nrOfImages > 1) &&
          <SlideControls
            length={nrOfImages}
            activeIndex={activeIndex}
            setImage={this.setImage}
            size={1}/>
        }
      </div>
    )
  }
}
