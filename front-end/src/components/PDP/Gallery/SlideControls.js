import React, { PureComponent } from 'react';
import SlideArrow from '../../../svgr/SlideArrow';
import './SlideControls.css';

export default class SlideControls extends PureComponent {

  moreThanMin = () => (this.props.activeIndex > 0);
  lessThanMax = () => (this.props.activeIndex < this.props.length - 1);

  increment = () => {
    const {activeIndex, setImage} = {...this.props}
    if (this.lessThanMax()) {
      setImage(activeIndex + 1)
    } else {
      setImage(0);
    }
  }
  decrement = () => {
    const {activeIndex, setImage, length} = {...this.props}
    if (this.moreThanMin()) {
      setImage(activeIndex - 1)
    } else {
      setImage(length - 1);
    }
  }

  render() {   
    const {size} = {...this.props}
    return (
      <div className="slide-controls">
        <div onClick={this.decrement}>
          <SlideArrow size={size}></SlideArrow>
        </div>
        <div onClick={this.increment}>
          <SlideArrow size={size} flip></SlideArrow>
        </div>
      </div>
    )
  }
}
