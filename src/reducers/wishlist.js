import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, REFRESH_STORE } from '../constants/action-types';
import { findIndex } from '../utils';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = { list: [] }

const wishlistReducer = ( state = { list: [] }, action ) => {
    switch ( action.type ) {

        case ADD_TO_WISHLIST:
            if ( !findIndex( state.list, action.product.id ) ) {
                return {
                    ...state,
                    list: [ ...state.list, action.product ]
                };
            }
            return state;

        case REMOVE_FROM_WISHLIST:
            return {
                list: state.list.filter( product => product.id !== action.product.id )
            };

        case REFRESH_STORE:
            return initialState;

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "porto-",
    key: "wishlists",
    storage
}

export default persistReducer( persistConfig, wishlistReducer );