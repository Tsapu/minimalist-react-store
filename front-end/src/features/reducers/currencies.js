const initialState = "N/a";
export const currencyReducer = (currency = initialState, action) => {
  switch (action.type) {
    case 'changeCurrency':
      return action.payload
    default:
      return currency
  }
}

