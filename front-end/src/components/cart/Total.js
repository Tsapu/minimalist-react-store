import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import filterCurrency from '../../features/util/currencyFilter';
import './Total.css';

class Total extends PureComponent {

  calcTotal = () => {
    const {cartItems, currency} = {...this.props}
    let total = cartItems.reduce((acc, cartItem) => {
      let {prices, count} = {...cartItem}
      return acc + filterCurrency(prices, currency.abbr) * count;
    }, 0);
    return total.toFixed(2);
  }

  render() {
    const {currency} = {...this.props}
    return (
      <div className="total">
        <span className="total-lbl">Total</span><span className="total-val">{currency.symbol}{this.calcTotal()}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  }
}

export default connect(mapStateToProps)(Total);



