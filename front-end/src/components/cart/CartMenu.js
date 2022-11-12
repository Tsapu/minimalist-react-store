import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemList from './ItemList';
import Total from './Total';
import './CartMenu.css'

class CartMenu extends PureComponent {

  render() {
    const {cartItems, nrOfItems, hideSelf} = {...this.props}
    return (
      <div className="cart-menu">
        <div className="cart-context"><strong>My bag</strong>, {nrOfItems} item{nrOfItems !== 1 ? 's' : ''}</div>
        <ItemList cartItems={cartItems} hideSelf={hideSelf}/>
        <Total cartItems={cartItems}/>
        <div className="dropdown-btns">
          <Link to="/cart" onClick={hideSelf}><button className="btn-secondary btn-cart">View Bag</button></Link>
          <button className="btn-primary btn-checkout">Check Out</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    nrOfItems: state.cartItems.length,
  }
}

export default connect(mapStateToProps)(CartMenu);