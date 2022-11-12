import React from 'react';
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import ProductDescription from '../PDP/ProductDescription';
import ProductListing from './ProductListing';
import Error404 from '../../404';

export const PRODUCT_DETAILS = gql`
  fragment ProductDetails on Product {
    name
    category
    description
    gallery
    attributes {
      id
      name
      type
      items {
        displayValue
        value
      }
    }
    prices {
      currency
      amount
    }
    inStock    
  }
`
const ALL = gql`
${PRODUCT_DETAILS}
  query GetAll {
    category {
      name
      products {
        ...ProductDetails
      }
    }
  }
`;
const BY_CATEGORY = gql`
  ${PRODUCT_DETAILS}
  query GetProducts($category: String!) {
    category(input: {
      title: $category
    }) {
      name
      products {
        ...ProductDetails
      }
    }
  }
`;

class Products extends React.PureComponent {

  chooseProduct = (products, query) => {
    return products.find(item => item.name === query.replace(/-/g, ' '))
  }
  sortItems = (items) => {
    return [...items].sort( (a,b) => a.name.localeCompare(b.name) );
  }

  resolve = (categoryQuery, productQuery, data) => {
    const { location } = {...this.props}
    const { products, name } = {...data.category}
    
    if ( productQuery ) { // if request for a single product, filter the corresponding category that was fetched
      const reqItem = this.chooseProduct(products, productQuery);
      if ( reqItem ) { // if found generate PDP
        return <ProductDescription key={reqItem.name} location={{...location, productDetails: reqItem}}/>
      } else {
        return <Error404 requestType="product" failedQuery={productQuery}></Error404>
      }
    }
    else { // fulfill category requests for PLP
      if (products) {
        return <ProductListing
          category={name}
          products={this.sortItems(products)}
          url={location.pathname}/>
      } else {
        return <Error404 requestType="category" failedQuery={categoryQuery}></Error404>
      }
    }
  }

  render() {
    //---------------------------------------------------------------------------------------------------
    if (this.props.location.productDetails) { // if the request comes from PLP, transfer to PDP directly
      return <ProductDescription location={this.props.location}/>
    }
    //---------------------------------------------------------------------------------------------------
    const {category: categoryQuery, product: productQuery} = {...this.props.match.params}

    return (
      // if no category, assume incoming request is for all products
      <Query query={categoryQuery ? BY_CATEGORY : ALL} variables={{ category: categoryQuery }}>
        {({ loading, error, data }) => {
          if (error) return <p>Error...</p>;
          if (loading || !data) return <p>Loading...</p>;
          return this.resolve(categoryQuery, productQuery, data);
        }}
      </Query>
    )
  }
}

export default Products;