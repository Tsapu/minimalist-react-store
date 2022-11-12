import React from 'react';
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import CategoryNav from './CategoryNav';

const CATEGORIES = gql`
  query GetCategories {
    category {
      name
      products {
        category
      }
    }
  }
`;

class Categories extends React.PureComponent {
  render() {
    return (
      <Query query={CATEGORIES}>
        {({ loading, error, data }) => {
          if (error) return <p>Error...</p>;
          if (loading || !data) return <p>Loading...</p>;

          const {name, products} = {...data.category}
          
          /* Could not find another way to fetch the categories with the existing resolutions */
          const categories = [name]; // instantiate with all categories path
          products.forEach((product) => {
            if ( !categories.includes(product["category"]) ) {
              categories.push(product["category"])
            }
          });
          return (
            <CategoryNav categories={categories} />
          );
        }}
      </Query>
    )
  }
}

export default Categories;