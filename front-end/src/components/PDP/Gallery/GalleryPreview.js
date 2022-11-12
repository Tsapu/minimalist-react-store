import React, { PureComponent } from 'react';
import './GalleryPreview.css';

export default class GalleryPreview extends PureComponent {

  chooseByIndex = i => {
    this.props.setImage(i);
  }

  createImages = () => {
    const {images, activeIndex} = {...this.props}
    return images.map( (image, index) => (
      <li
      key={index}
      onClick={this.chooseByIndex.bind(this, index)}>
        <img 
        src={image}
        alt=""
        className={(index === activeIndex) ? 'active' : ''}></img>
      </li>
    ))
  }

  render() {
    return (
      <ul className="gallery-preview">
        {this.createImages()}
      </ul>
    )
  }
}
