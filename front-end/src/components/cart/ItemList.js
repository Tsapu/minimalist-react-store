import React, { PureComponent } from 'react';
import CartAttributes from './CartAttributes';
import ItemCounter from './ItemCounter';
import Currency from '../Currency/Currency';
import { ItemName, ItemImage } from './ItemLinks';
import RemoveItem from './RemoveItem';
import ItemGallery from './ItemGallery';
import './ItemList.css';

export default class ItemList extends PureComponent {

  createItems = () => {
    const {cartItems, main, hideSelf} = {...this.props}
    const size = main ? 'l' : 'm';

    return cartItems.map( ({ name, gallery, prices, attributes, count, url }, index) => (
      <li key={index}>
        {main && <hr></hr>}
        <div className="cart-item">
          <div className="desc">
            <ItemName className="item-name" url={url} name={name} onClick={hideSelf}/>
            <Currency prices={prices}/>
            <CartAttributes attributes={attributes} size={size} />
          </div>
          <div className="count-box">
            <ItemCounter itemIndex={index} count={count} size={size}/>
            { main
              ? <ItemGallery images={gallery}></ItemGallery>
              : <ItemImage className="cart-menu-img" imgSrc={gallery[0]} url={url} onClick={hideSelf}></ItemImage>
            }
            <RemoveItem index={index} style={main && {strokeWidth: 2}}></RemoveItem>
          </div>
        </div>
      </li>
      )
    )
  }

  render() {
    return (
      <ul className="cart-list">
        {this.createItems()}
      </ul>
    )
  }
}
