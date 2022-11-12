import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers/cart';
import { currencyReducer } from './reducers/currencies';

export const store = createStore(combineReducers({
  cartItems: cartReducer,
  currency: currencyReducer,
}));