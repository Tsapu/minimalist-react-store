import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import filterCurrency from '../../features/util/currencyFilter';
import './Currency.css'

class Currency extends PureComponent {

  render() {
    const {currency, prices} = {...this.props}
    return (
      <div className="currency">{currency.symbol}{filterCurrency(prices, currency.abbr)}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  }
}

export default connect(mapStateToProps)(Currency);