import { combineReducers } from 'redux';
import cartReducer from './cart';
import productReducer from './product';
import wishReducer from './wishlist';
import demoReducer from './demo';
import compareReducer from './compare';
import filtersReducer from './filter';

const rootReducer = combineReducers( {
    cartList: cartReducer,
    data: productReducer,
    wishlist: wishReducer,
    demo: demoReducer,
    compareList: compareReducer,
    filter: filtersReducer
} );

export default rootReducer;