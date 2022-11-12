import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import Total from './Total';
import './Cart.css'

class Cart extends PureComponent {

  render() {
    const {cartItems} = {...this.props};
    return (
      <div className="cart-main">
        <h1 className="cart-title">Cart</h1>
        <ItemList main cartItems={cartItems}/>
        <hr></hr>
        <Total cartItems={cartItems}/>
      </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  }
}

export default connect(mapStateToProps)(Cart);