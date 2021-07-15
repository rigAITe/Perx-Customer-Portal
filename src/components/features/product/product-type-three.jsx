import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart, addToWishList, showQuickView } from '../../../action';
import { findIndex } from '../../../utils';

function ProductTypeThree( props ) {
    let isInWishlist = props.product ? ( findIndex( props.wishlist, props.product.id ) ? true : false ) : false;
    let { addClass, product, showQuickView, addToCart } = props;

    const onWishlistClick = ( e ) => {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( product );
        }
    }

    return (
        <div className={ `product-default ${ addClass }` }>
            <figure className="col-md-3 col-sm-4 p-0">
                <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ product.id }` } >
                    <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } className="first-image" alt="product" />

                    {
                        product.pictures[ 1 ] ?
                            <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] } className="last-image" alt="product" /> : ""
                    }
                </Link>
                <div className="label-group">
                    {
                        product.discount && product.salePrice ?
                            <span className="product-label label-sale">{ product.discount }% OFF</span>
                            : ""
                    }
                    {
                        !product.salePrice && product.featured ?
                            <span className="product-label label-hot">hot</span>
                            : ""
                    }
                    {
                        !product.salePrice && product.new ?
                            <span className="product-label label-sale">new</span>
                            : ""
                    }
                </div>
            </figure>

            <div className="product-details col-md-9 col-sm-8">
                <div className="category-list">
                    {
                        product.category.map( ( category, index ) => (
                            index === ( product.category.length - 1 ) ?
                                <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }</Link>
                                : <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }, </Link>
                        ) )
                    }
                </div>
                <h2 className="product-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ product.id }` }>{ product.name }</Link>
                </h2>
                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div>
                <p className="product-description">
                    { product.description }
                </p>
                {
                    product.salePrice ?
                        <div className="price-box">
                            <span className="old-price">${ product.price.toFixed( 2 ) }</span>
                            <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                        </div>
                        :
                        <div className="price-box">
                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                }
                {/* <div className="product-action">
                    <button className="btn-icon btn-add-cart" onClick={ () => addToCart( product ) }><i className="icon-bag"></i>ADD TO CART</button>

                    <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `btn-icon-wish ${ isInWishlist ? 'checked' : '' }` } onClick={ onWishlistClick }>
                        <i className="icon-heart"></i>
                    </Link>

                    <Link to="#" className="btn-quickview" title="Quick View" onClick={ ( e ) => { e.preventDefault(); showQuickView( product ) } }>
                        <i className="fas fa-external-link-alt"></i>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart, addToWishList, showQuickView } )( ProductTypeThree );

