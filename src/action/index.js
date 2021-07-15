import * as api from '../api';
import * as types from '../constants/action-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/**
 * Receive all Products
 * @param { Array } products 
 */
export const receiveProducts = products => ( {
    type: types.RECEIVE_PRODUCTS,
    products
} );

/**
 * Refresh Store
 * @param {*} current 
 */
export const refreshUnSafe = ( current ) => ( {
    type: types.REFRESH_STORE,
    current
} )

/**
 * Dispatch Refresh Store
 * @param { Number } demo
 */
export const refreshStore = ( current ) => dispatch => {
    dispatch( refreshUnSafe( current ) );
}

/**
 * Get all Products
 */
export const getAllProducts = () => dispatch => {
    api.getProducts().then( products => {
        dispatch( receiveProducts( products ) );
        return products;
    } )
}

/**
 * Get a Product
 * @param { String } productId 
 */
export const getProduct = productId => ( {
    type: types.FETCH_SINGLE_PRODUCT,
    productId
} )


/**
 * Show QuickView Modal
 * @param { Object } product 
 */
// export const showQuickView = ( product ) => dispatch => {
//     dispatch({ type: types.SHOW_QUICKVIEW, product });
// }
export const showQuickView = ( product ) => ( {
    type: types.SHOW_QUICKVIEW,
    product
} )

/**
 * Hide QuickView Modal
 */
export const hideQuickView = () => dispatch => {
    dispatch( { type: types.HIDE_QUICKVIEW } );
}


/****************** Cart Action *****************/

/**
 * Add to Cart
 * @param { Object } product
 * @param { Number } qty
 */
export const addToCart = ( product, qty = 1 ) => ( dispatch ) => {
    dispatch( { type: types.SHOW_CART_MODAL, product } );
    dispatch( { type: types.ADD_TO_CART, product, qty } );
}

/**
 * Add to Cart in modal
 * @param { Object } product 
 * @param { Number } qty 
 */
export const quickAddToCart = ( product, qty = 1 ) => ( dispatch ) => {
    toast.success( "Item Added to Cart" );
    dispatch( { type: types.ADD_TO_CART, product, qty } );
}

/**
 * Add item in Wishlist to Cart
 * @param { Object } product 
 * @param { Number } qty 
 */
export const addToCartAndRemoveWishlist = ( product, qty ) => ( dispatch ) => {
    toast.success( "Item Added to Cart" );
    dispatch( { type: types.ADD_TO_CART, product, qty } );
    dispatch( { type: types.REMOVE_FROM_WISHLIST, product } );
}

/**
 * Remove item from Cart
 * @param { Object } product 
 */
export const removeFromCart = ( product ) => ( dispatch ) => {
    toast.error( "Item Removed from Cart" );
    dispatch( { type: types.REMOVE_FROM_CART, product } );
}

/**
 * Clear Cart
 * @param { Object } product 
 */
export const clearCart = ( product ) => ( dispatch ) => {
    toast.error( "Cart Cleared" );
    dispatch( { type: types.CLEAR_CART, product } );
}

/**
 * Increment quantity of item
 * @param { Object } product 
 * @param { Number } qty 
 */
export const incrementQty = ( product ) => ( dispatch ) => {
    dispatch( { type: types.ADD_TO_CART, product, qty: 1 } );
}

/**
 * Decrement quantity of item
 * @param { String } product 
 */
export const decrementQty = ( product ) => ( dispatch ) => {
    dispatch( { type: types.DECREMENT_QTY, product } )
}


/********************* Wishlist Action *********************/

/**
 * Add item to Wishlist
 * @param { Object } product
 */
export const addToWishList = ( product ) => ( dispatch ) => {
    toast.success( "Item Added to Wishlist" );
    dispatch( { type: types.ADD_TO_WISHLIST, product } );
}

/**
 * Remove item from Wishlist
 * @param { String } productId 
 */
export const removeFromWishlist = ( product ) => ( dispatch ) => {
    toast.error( "Item Removed from Wishlist" );
    dispatch( { type: types.REMOVE_FROM_WISHLIST, product } );
}

/**
 * Remove item from Cart and Add to Whishlist
 * @param { String } product
 */
export const moveFromCartToWishlist = ( product ) => ( dispatch ) => {
    toast.success( "Item Moved to Wishlist" );
    dispatch( { type: types.REMOVE_FROM_CART, product } );
    dispatch( { type: types.ADD_TO_WISHLIST, product } );
}

/**
 * Remove item from Wishlist and Add to Cart
 * @param { String } product
 */
export const moveFromWishlistToCart = ( product ) => ( dispatch ) => {
    toast.success( "Item Moved to Cart" );
    dispatch( { type: types.REMOVE_FROM_WISHLIST, product } );
    dispatch( { type: types.ADD_TO_CART, product, qty: 1 } );
}

/********************* Compare Action *********************/

/**
 * Add item to Compare List
 * @param { Object } product
 */
export const addToCompare = ( productId ) => ( dispatch ) => {
    dispatch( { type: types.ADD_TO_COMPARE, productId } );
}

/**
 * Remove item form Compare List
 * @param { String } productId 
 */
export const removeFromCompare = ( productId ) => ( dispatch ) => {
    dispatch( { type: types.REMOVE_FROM_COMPARE, productId } );
}

/**
 * Clear all compare products
 * 
 */
export const clearAllCompare = () => ( dispatch ) => {
    dispatch( { type: types.REMOVE_ALL_COMPARE } );
}

/********************* Filter Action *********************/

/**
 * Filter by Brand
 * @param { String }  brand
 */
export const filterBrand = ( brand ) => ( {
    type: types.FILTER_BRAND,
    brand
} );


/**
 * Filter by Color
 * @param { String } color 
 */
export const filterColor = ( color ) => ( {
    type: types.FILTER_COLOR,
    color
} );


/**
 * Filter by Price
 * @param { Number } value 
 */
export const filterPrice = ( price ) => ( {
    type: types.FILTER_PRICE,
    price
} );


/**
 * Sort by
 * @param { String } sortBy 
 */
export const filterSort = ( sortBy ) => ( {
    type: types.SORT_BY,
    sortBy
} );

/**
 * Filter by Size
 * @param { Number } value 
 */
export const filterSize = ( size ) => ( {
    type: types.FILTER_SIZE,
    size
} );

/**
 * Filter by categories
 * @param { Number } value 
 */
export const filterCategories = ( category ) => ( {
    type: types.FILTER_CATEGORIES,
    category
} );

/********************* Newsletter Modal Action *********************/
export const hideNewsletter = () => dispatch => {
    dispatch( { type: types.HIDE_NEWSLETTER } );
}

/**
 * Clean All Filter
 * 
 */
export const cleanFilter = () => ( {
    type: types.FILTER_CLEAN_FILTERS
} );