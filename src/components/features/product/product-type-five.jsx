import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { addToCart, addToWishList, showQuickView } from '../../../action';
import { findIndex, getPrice } from '../../../utils';

function ProductTypeFive( props ) {
    let isInWishlist = props.product ? ( findIndex( props.wishlist, props.product.id ) ? true : false ) : false;
    let { addClass, link = "default", noAction = false, product, addToCart, showQuickView } = props;
    let priceMax, priceMin = 0;

    if ( product.variants ) {
        // variant Type => $min-$max price
        priceMax = getPrice( product.variants );
        priceMin = getPrice( product.variants, 'min' );
    }

    const onWishlistClick = ( e ) => {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( product );
        }
    }

    return (
        <div className={ 'product-default ' + addClass }>
            <figure>
                <Link to={ `${ process.env.PUBLIC_URL }/products/${ link }/${ product.id }` }>
                    <div className="lazy-overlay bg-3"></div>

                    <LazyLoadImage
                        alt="product"
                        src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] }
                        threshold={ 500 }
                        effect="black and white"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] }
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
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

            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                        {
                            product.category.map( ( category, index ) => (
                                index === ( product.category.length - 1 ) ?
                                    <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }</Link>
                                    : <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }, </Link>
                            ) )
                        }
                    </div>
                </div>
                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div>

                <h3 className="product-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/products/${ link }/${ product.id }` } > { product.name } </Link>
                </h3>
                {
                    product.variants ?
                        <div className="price-box">
                            <span className="product-price">${ priceMin.toFixed( 2 ) } - ${ priceMax.toFixed( 2 ) }</span>
                        </div>
                        :
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
                <div className="product-action">
                    {
                        noAction === true ? ""
                            : <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `btn-icon-wish ${ isInWishlist ? 'checked' : '' }` } onClick={ onWishlistClick }><i className="icon-heart"></i></Link>
                    }
                    <button className="btn-icon btn-add-cart" onClick={ ( e ) => addToCart( product ) }>ADD TO CART</button>
                    {
                        noAction === true ? ""
                            : <Link to="#" className="btn-quickview" title="Quick View" onClick={ ( e ) => { e.preventDefault(); showQuickView( product ) } }><i className="fas fa-external-link-alt"></i></Link>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart, addToWishList, showQuickView } )( ProductTypeFive );
