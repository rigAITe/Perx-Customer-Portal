import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SHOW_CART_MODAL,
    HIDE_CART_MODAL,
    CLEAR_CART,
    DECREMENT_QTY,
    REFRESH_STORE
} from '../constants/action-types';
import { findIndex } from '../utils';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

let initialState = {
    cart: [],
    modalProduct: '',
    showModal: false
}

const cartReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_TO_CART:
            if ( findIndex( state.cart, action.product.id ) ) {
                const cart = state.cart.reduce( ( acc, product ) => {
                    if ( product.id === action.product.id ) {
                        acc.push(
                            {
                                ...product,
                                qty: product.qty + action.qty,
                                sum: ( action.product.salePrice ? action.product.salePrice : action.product.price ) * ( product.qty + action.qty )
                            } );
                    } else {
                        acc.push( product );
                    }
                    return acc;
                }, [] );
                return { ...state, cart };
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.product,
                        qty: action.qty,
                        sum: ( action.product.salePrice ? action.product.salePrice : action.product.price ) * action.qty
                    }
                ]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter( item => item.id !== action.product.id )
            };

        case CLEAR_CART:
            return {
                ...state,
                cart: []
            };

        case DECREMENT_QTY:
            const cart = state.cart.reduce( ( acc, product ) => {
                if ( product.id === action.product.id ) {
                    acc.push(
                        {
                            ...product,
                            qty: product.qty - 1,
                            sum: ( action.product.salePrice ? action.product.salePrice : action.product.price ) * ( product.qty - 1 )
                        } );
                } else {
                    acc.push( product );
                }
                return acc;
            }, [] );

            return { ...state, cart };

        case SHOW_CART_MODAL:
            return {
                ...state,
                showModal: true,
                modalProduct: action.product
            }

        case HIDE_CART_MODAL:
            return {
                ...state,
                showModal: false
            }

        case REFRESH_STORE:
            return initialState;

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "porto-",
    key: "cartlist",
    storage
}

export default persistReducer( persistConfig, cartReducer );