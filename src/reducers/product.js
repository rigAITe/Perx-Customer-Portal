import {
    FETCH_SINGLE_PRODUCT,
    RECEIVE_PRODUCTS,
    SHOW_QUICKVIEW,
    HIDE_QUICKVIEW,
    REFRESH_STORE
} from '../constants/action-types'
import { findIndex } from '../utils';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    products: [],
    single: {},
    quickShow: false,
    fetchBegin: true
}

const productReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case RECEIVE_PRODUCTS:
            return { ...state, products: action.products };

        case SHOW_QUICKVIEW:
            return { ...state, single: action.product, quickShow: true };

        case HIDE_QUICKVIEW:
            return { ...state, quickShow: false };

        case FETCH_SINGLE_PRODUCT:
            if ( findIndex( state.products, action.productId ) ) {
                const single = state.products.reduce( ( itemAcc, product ) => {
                    return product
                }, [] )
                return { ...state, single: single };
            }
            break;

        case REFRESH_STORE:
            return initialState;

        default:
            return state;
    }
};

const persistConfig = {
    keyPrefix: "porto-",
    key: "products",
    storage
}

export default persistReducer( persistConfig, productReducer );