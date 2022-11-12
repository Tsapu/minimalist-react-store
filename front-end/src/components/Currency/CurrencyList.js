import React from 'react';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import { changeCurrency } from '../../features/actions/changeCurrency';
import './CurrencyList.css'

class CurrencyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.currencies = this.props.currencies;
    const initialCurrency = {
      abbr: this.currencies[0],
      symbol: this.getSymbol(this.currencies[0])
    }
    this.props.changeCurrency(initialCurrency);
    this.state = {
      activeIndex: 0,
      dropdown: false,
    };
  }

  currencyMap = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    AUD: '$',
    JPY: '¥',
    RUB: '₽',
  }

  getSymbol = (currency) => {
    return this.currencyMap[currency] || "?";
  }
  getActiveSymbol = () => {
    return this.getSymbol(this.currencies[this.state.activeIndex])
  }
  setCurrency = (i) => {
    let currency = {
      abbr: this.currencies[i],
      symbol: this.getSymbol(this.currencies[i])
    }
    this.props.changeCurrency(currency);
    this.setState({ activeIndex: i });
    this.toggleDropdown();
  }
  createList = (currencies) => {
    let {activeIndex} = {...this.state}
    return currencies.map( (currency, index) => {
      let activeClass = (index === activeIndex) ? 'active' : '';
      return <li key={index} className={activeClass} onClick={this.setCurrency.bind(this, index)}>
        {this.getSymbol(currency)} {currency}
      </li>
    })
  }

  toggleDropdown = () => {
    this.setState(state => ({
      dropdown: !state.dropdown
    }));
  }
  hideDropdown = () => {
    this.setState({ dropdown: false });
  }

  render() {
    const {currencies} = {...this.props}
    const {dropdown} = {...this.state}
    return (
      <OutsideClickHandler onOutsideClick={this.hideDropdown}>
        <div className="currency-selection relative">
          <div onClick={this.toggleDropdown} className="child-center pointer">
            <div className="display-currency">{this.getActiveSymbol()}</div>
            <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" transform={dropdown ? "rotate(180 4 2)" : ''}/></svg>
          </div>
          <ul className={`currencies ${dropdown ? 'active' : 'inactive'}`}>
            {this.createList(currencies)}
          </ul>
        </div>
      </OutsideClickHandler>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: currency => dispatch( changeCurrency(currency) ),
  }
}

export default connect(null, mapDispatchToProps)(CurrencyList);