import React, { PureComponent } from 'react';
import siteLogo from '../../assets/site-logo.svg';
import cartLogo from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import Categories from './Categories';
import CartMenu from '../cart/CartMenu';
import Currencies from '../Currency/Currencies';
import CartCounter from './CartCounter';
import './Header.css';

class Header extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      cartMenu: false
    }
  }

  toggleCart = () => {
    this.setState(state => ({
      cartMenu: !state.cartMenu
    }));
  }
  hideCart = () => {
    if (this.state.cartMenu) {
      this.setState({cartMenu: false})
    }
  }

  render() {
    const {cartMenu} = {...this.state}
    const {itemsInCart} = {...this.props}
    return (
      <header className="fixed">
        <div className="header-span">
          <div className="header container relative">
            {cartMenu && <div className="site-overlay"></div>}
            <Categories />
            <Link to="/" className="site-logo"><img src={siteLogo} alt="logo"></img></Link>
            <div className="controls">
              <Currencies />
              <OutsideClickHandler onOutsideClick={this.hideCart}>
                <div onClick={this.toggleCart} className="cart-sc">
                  <img src={cartLogo} className="pointer" alt="cart"></img>
                  {itemsInCart && <CartCounter />}
                </div>
                {cartMenu && <CartMenu hideSelf={this.hideCart}/>}
              </OutsideClickHandler>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: !!state.cartItems.length
  }
}

export default connect(mapStateToProps)(Header);
