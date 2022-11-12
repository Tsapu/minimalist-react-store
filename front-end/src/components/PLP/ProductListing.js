import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../../features/actions/addItem';
import Currency from '../Currency/Currency';
import fillIcon from '../../assets/cart-fill.svg';
import './ProductListing.css'

class ProductListing extends React.PureComponent {

  createProducts = () => {
    const {products} = {...this.props}
    return products.map( ({ name, category, gallery, prices, inStock, attributes, description }, index) => (
      <li key={index}>
        <Link to={{
            pathname: this.generatePath(category, name),
            productDetails: { name, gallery, prices, inStock, attributes, description }
          }}>
          <div className={`product ${!inStock ? 'unavailable' : ''}`}>
            <div className="relative">
              <img src={gallery[0]} className="product-img" alt={name}></img>
              {inStock && <img src={fillIcon} onClick={this.storeItem.bind(this, index)} className="fill-icon" title="Add to cart" alt=""></img>}
              {!inStock && <div className="stock-msg">OUT OF STOCK</div>}
            </div>
            <div className="item-name">{name}</div>
            <Currency prices={prices}/>
          </div>
        </Link>
      </li>
    ))
  }

  generatePath = (category, name) => {
    return `/categories/${category}/${name.replace(/\W+/g, '-')}`
  }

  filterAttributes = (attributes) => {
    let res = [];
    attributes.forEach( attr => {
      res.push({
        ...attr,
        items: attr.items.slice(0, 1)
      })
    });
    return res;
  }

  storeItem = (i, e) => {
    e.preventDefault();
    const {products, addItem} = {...this.props}
    const {attributes, category, name} = {...products[i]}
    addItem({
      ...products[i],
      attributes: this.filterAttributes(attributes),
      url: this.generatePath(category, name),
    });
  }
  
  render() {
    const {category} = {...this.props}
    return (
      <div>
        <div className="category-title">{category}</div>
        <ul className="product-list">
          {this.createProducts()}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch( addItem(item) ),
  }
}

export default connect(null, mapDispatchToProps)(ProductListing);