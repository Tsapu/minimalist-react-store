import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { setCount } from '../../features/actions/setCount';
import './ItemCounter.css'

class ItemCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count }
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }), this.onCountChange);
  }
  decrement = () => {
    this.setState(state => {
      if (state.count <= 1) {
        return state
      }
      return { count: state.count - 1 }
    }, this.onCountChange)
  }

  onCountChange() { // callback function for when the count state changes
    this.props.setCount({
      index: this.props.itemIndex,
      count: this.state.count,
    });
  }

  getSizeStyle = () => {
    const size = this.props.size;
    const style =
      (size === "m") ? 'small' :
      (size === "l") ? 'large' : '';
    return style;
  }

  render() {
    const {count} = {...this.props}
    const style = this.getSizeStyle();
    return (
      <div className="count-controls">
        <div onClick={this.increment} className={`count-control ${style}`} role="button">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round"><path d="M 1 8.5 H16"/><path d="M 8.5 1 V16"/></g></svg>
        </div>
        <div className="count">{count}</div>
        <div onClick={this.decrement} className={`count-control ${style}`} role="button">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#1D1F22" strokeLinecap="round" strokeLinejoin="round"><path d="M 1 8.5 H16"/></g></svg>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCount: item => dispatch( setCount(item) ),
  }
}

export default connect(null, mapDispatchToProps)(ItemCounter);