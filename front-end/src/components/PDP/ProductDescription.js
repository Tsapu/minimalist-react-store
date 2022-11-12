import React from 'react';
import { connect } from 'react-redux';
import Attributes from './Attributes/Attributes';
import Gallery from './Gallery/Gallery';
import Currency from '../Currency/Currency';
import { addItem } from '../../features/actions/addItem';
import sanitizeHTML from '../../features/util/sanitizeHTML';
import './ProductDescription.css'

class ProductDescription extends React.PureComponent {
  constructor(props) {
    super(props);
    this.productDetails = {...this.props.location.productDetails};
    this.state = {}
    // Set initial option indices to zero
    this.productDetails.attributes.forEach( attr => {
      this.state[attr.id] = attr.items[0].value;
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0) // disable scroll restoration
  }

  updateSelection = (e) => {
    this.setState({
      [e.target.parentNode.dataset.type]: e.target.dataset.value,
    })
  }

  filterAttributes = (attributes) => {
    let res = [];
    attributes.forEach( attr => {
      res.push({
        ...attr,
        items: attr.items.filter(attrOption => attrOption.value === this.state[attr.id])
      })
    });
    return res;
  }

  storeItem = () => {
    const {attributes} = {...this.productDetails}
    const {pathname} = {...this.props.location}
    this.props.addItem({
      ...this.productDetails,
      attributes: this.filterAttributes(attributes), // send item to store with attributes filtered according to selection
      url: pathname,
    });
  }

  render() {
    const { gallery, inStock, name, attributes, prices, description } = {...this.productDetails}
    return (
      <div className="product-preview">
        <Gallery images={gallery} inStock={inStock}/>
        <div className="product-details">
          <div className="main-attr">
            <h2 className="item-name title">{name}</h2>
            <Attributes attributes={attributes} updateSelection={this.updateSelection}/>
            <div>
              <h3 className="attr-type price">Price:</h3>
              <Currency prices={prices}/>
              { inStock &&
              <button className="btn-primary btn-add" onClick={this.storeItem}>Add to cart</button>}
            </div>
            <div className="desc" dangerouslySetInnerHTML={{__html: sanitizeHTML(description) }}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch( addItem(item) ),
  }
}

export default connect(null, mapDispatchToProps)(ProductDescription);