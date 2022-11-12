import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './CartCounter.css'

class CartCounter extends PureComponent {
  render() {
    const {nrOfItems} = {...this.props}
    return (
      <div key={Math.random()} className="cart-counter child-center">{nrOfItems}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nrOfItems: state.cartItems.reduce((acc, curr) => acc + curr.count, 0),
  }
}

export default connect(mapStateToProps)(CartCounter);
