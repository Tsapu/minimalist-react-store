import React from 'react';
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import CurrencyList from './CurrencyList';

const CURRENCIES = gql`
  query GetCurrencies {
    currencies
  }
`;

class Currencies extends React.PureComponent {
 render() {
    return (
      <Query query={CURRENCIES}>
        {({ loading, error, data }) => {
          if (error) return <p>Error...</p>;
          if (loading || !data) return <p>Loading...</p>;
          return <CurrencyList currencies={data.currencies} />
        }}
      </Query>
    )
  }
}

export default Currencies;