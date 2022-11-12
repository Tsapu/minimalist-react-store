import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../features/actions/removeItem';
import './RemoveItem.css';

class RemoveItem extends PureComponent {
  
  render() {
    let {index, style, removeItem} = this.props;
    return (
      <div onClick={() => removeItem(index)} className="remove">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(45 8.5 8.5)" stroke="#ad0000" strokeWidth={style && style.strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M 1 8.5 H16"/><path d="M 8.5 1 V16"/></g></svg></div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: item => dispatch( removeItem(item) ),
  }
}

export default connect(null, mapDispatchToProps)(RemoveItem);