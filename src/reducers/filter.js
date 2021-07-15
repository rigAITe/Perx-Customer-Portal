import { FILTER_BRAND, FILTER_COLOR, FILTER_PRICE, FILTER_CATEGORIES, FILTER_SIZE, FILTER_CLEAN_FILTERS, SORT_BY, REFRESH_STORE } from '../constants/action-types'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const initialState = {
    category: "",
    size: [],
    brand: [],
    color: [],
    value: { min: 0, max: 1000 },
    sortBy: ""
};

const filtersReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case FILTER_BRAND:
            if ( state.brand.indexOf( action.brand ) >= 0 ) {
                return {
                    ...state,
                    brand: state.brand.filter( item => item !== action.brand )
                }
            }
            return {
                ...state,
                brand: [ ...state.brand, action.brand ]
            };

        case FILTER_CATEGORIES:
            if ( state.category === action.category ) {
                return {
                    ...state,
                    category: ""
                }
            }
            return {
                ...state,
                category: action.category
            };

        case FILTER_SIZE:
            if ( state.size.indexOf( action.size ) >= 0 ) {
                return {
                    ...state,
                    size: state.size.filter( item => item !== action.size )
                }
            }
            return {
                ...state,
                size: [ ...state.size, action.size ]
            };

        case FILTER_COLOR:
            if ( state.color.indexOf( action.color ) >= 0 ) {
                return {
                    ...state,
                    color: state.color.filter( item => item !== action.color )
                }
            }
            return {
                ...state,
                color: [ ...state.color, action.color ]
            };

        case FILTER_PRICE:
            return {
                ...state,
                value: { min: action.price.min, max: action.price.max }
            };

        case SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            };

        case FILTER_CLEAN_FILTERS:
            return initialState;

        case REFRESH_STORE:
            return initialState;

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "porto-",
    key: "filters",
    storage
}

export default persistReducer( persistConfig, filtersReducer );