import { HIDE_NEWSLETTER, REFRESH_STORE } from '../constants/action-types';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

let initialState = {
    current: 0,
    isOpened: false
};

const demoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case HIDE_NEWSLETTER:
            return {
                ...state,
                isOpened: true
            };

        case REFRESH_STORE:
            return {
                ...state,
                current: action.current,
                isOpened: false
            }

        default:
            return state;
    }
}

const persistConfig = {
    keyPrefix: "porto-",
    key: "demo",
    storage
}

export default persistReducer( persistConfig, demoReducer );