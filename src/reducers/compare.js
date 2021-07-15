import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE, REMOVE_ALL_COMPARE, REFRESH_STORE } from '../constants/action-types';
import { toast } from 'react-toastify';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = { compare: [] };

const compareReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADD_TO_COMPARE:
            let productId = action.productId;
            if ( state.compare.indexOf( productId ) >= 0 ) {
                toast.error( "Item Removed from Compare" );
                return {
                    compare: state.compare.filter( item => item !== action.productId )
                }
            }
            toast.success( "Item Added to Compare" );
            return { ...state, compare: [ ...state.compare, action.productId ] }

        case REMOVE_FROM_COMPARE:
            toast.error( "Item Removed from Compare" );
            return {
                compare: state.compare.filter( item => item !== action.productId )
            }

        case REMOVE_ALL_COMPARE:
            if ( state.compare.length > 0 ) {
                toast.error( "Clear All Removed from Compare" );
            }
            return {
                compare: []
            }

        case REFRESH_STORE:
            return initialState;
        default:
            return state;
    }

}

const persistConfig = {
    keyPrefix: "porto-",
    key: "comparelist",
    storage
}

export default persistReducer( persistConfig, compareReducer );