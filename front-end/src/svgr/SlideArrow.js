import React, { PureComponent } from 'react'

export default class SlideArrow extends PureComponent {
  state = { hover: false }
  toggleHover = () => {
    // if (!this.props.active) {
    //   this.setState({hover: false});
    //   return
    // }
    this.setState(state => ({
      hover: !state.hover
    }));
  }
  render() {
    const {size, flip} = this.props;
    return (
      <div className="pointer" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <svg width={8 * size} height={14 * size} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{filter: `drop-shadow(0px 0px ${(this.state.hover && "4px") || "1px"} #1D1F22)`}}>
          <path d="M7 13L1 7L7 1" transform={flip && "scale(-1, 1) translate(-8, 0)"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )
  }
}
