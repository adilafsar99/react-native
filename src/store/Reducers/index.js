import allProducts from './allProducts.js';
import featuredProducts from './featuredProducts.js';
import cartProducts from './cartProducts.js';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  allProducts,
  featuredProducts,
  cartProducts
});

export default reducers;