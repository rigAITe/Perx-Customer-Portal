import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Qty from '../../../../features/qty';
import ProductNav from './common/product-nav';

import { quickAddToCart, addToWishList } from '../../../../../action'
import { findIndex, getPrice } from '../../../../../utils';

function ExtendedDetail( props ) {
    const { product } = props;
    let wishlist = props.wishlist;
    let isInWishlist = props.product ? ( findIndex( wishlist, props.product.id ) ? true : false ) : false;
    let maxPrice, minPrice = 0;

    if ( product.variants ) {
        // variant Type => $min-$max price
        maxPrice = getPrice( product.variants );
        minPrice = getPrice( product.variants, 'min' );
    }

    const selectGroup = ( e ) => {
        e.preventDefault();
        e.currentTarget.parentElement.parentElement.querySelector( ".active" ) && e.currentTarget.parentElement.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.parentElement && e.currentTarget.parentElement.classList.add( "active" );
    }

    const addToCart = ( e ) => {
        e.preventDefault();
        let val = parseInt( e.currentTarget.parentElement.querySelector( ".horizontal-quantity" ).getAttribute( "value" ) );
        props.quickAddToCart( props.product, val );
    }

    const onWishlistClick = ( e ) => {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( product );
        }
    }

    return (
        <>
            <div className="skel-pro skel-extended-detail"></div>
            <div className="product-single-details">
                <div className="product-single-header">
                    <div className="row position-relative">
                        <ProductNav product={ product } link={ props.link } addClass="mb-0 ml-3 extended-nav" />
                        <div className="col-md-6">
                            <h1 className="product-title mb-1">{ product.name }</h1>
                        </div>

                        <div className="col-md-6 product-single-share extended-share justify-content-lg-end">
                            <div className="social-icons mb-1">
                                <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></Link>
                                <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></Link>
                                <Link to="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin"></Link>
                                <Link to="#" className="social-icon social-gplus fab fa-google-plus-g" target="_blank" title="Google +"></Link>
                                <Link to="#" className="social-icon social-mail icon-mail-alt" target="_blank" title="Mail"></Link>
                            </div>

                        </div>
                    </div>
                    <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        </div>

                        <Link to="#" className="rating-link">{ `( ${ product.reviews } Reviews )` }</Link>
                    </div>

                    <hr className="short-divider" />

                    <div className="row mb-1">
                        <div className="col-xl-6 d-flex align-items-center mb-1">
                            {
                                product.variants ?
                                    <div className="price-box pb-4 pb-xl-0 mb-0">
                                        <span className="product-price">{ minPrice.toFixed( 2 ) }points - { maxPrice.toFixed( 2 ) }points</span>
                                    </div>
                                    :
                                    product.salePrice ?
                                        <div className="price-box pb-4 pb-xl-0 mb-0">
                                            <span className="old-price">{ product.price.toFixed( 2 ) }points</span>
                                            <span className="product-price">{ product.salePrice.toFixed( 2 ) }points</span>
                                        </div>
                                        :
                                        <div className="price-box pb-4 pb-xl-0 mb-0">
                                            <span className="product-price">{ product.price.toFixed( 2 ) }points</span>
                                        </div>
                            }
                        </div>
                        <div className="col-xl-6 d-flex flex-column align-items-xl-end mb-1">
                            <div className="widget-area">
                                <div className="widget widget-info">
                                    <ul>
                                        <li className="mt-0">
                                            <i className="icon-shipping"></i>
                                            <h4>FREE<br />SHIPPING</h4>
                                        </li>
                                        <li className="mt-0">
                                            <i className="icon-us-dollar"></i>
                                            <h4>100% MONEY<br />BACK GUARANTEE</h4>
                                        </li>
                                        <li className="mt-0">
                                            <i className="icon-online-support"></i>
                                            <h4>ONLINE<br />SUPPORT 24/7</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="product-desc">
                    <p>{ product.description } <Link to="#" className="view-more">(View More)</Link></p>
                </div>

                <div className="product-filters-container d-flex flex-wrap align-items-center justify-content-xl-end mb-2 pt-5">
                    {
                        product.variants ?
                            product.variants.map( ( variant, index ) => (
                                variant.name === "size" ?
                                    <div className="product-single-filter mb-2 mr-md-5 pr-md-4" key={ "size" + index }>
                                        <label>{ variant.name }:</label>
                                        <ul className="config-size-list">
                                            {
                                                variant.type.map( ( item, index ) => (
                                                    <li className={ index === 0 ? "active" : "" } key={ "size" + index } >
                                                        <Link to="#" onClick={ selectGroup }>{ item.size }</Link>
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                                    :
                                    <div className="product-single-filter mb-2 mr-4" key={ "color" + index }>
                                        <label>{ variant.name }:</label>
                                        <ul className="config-swatch-list">
                                            {
                                                variant.type.map( ( item, index ) => (
                                                    <li className={ index === 0 ? "active" : "" } key={ "color" + index } >
                                                        {
                                                            item.color ?
                                                                <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] } style={ { backgroundColor: item.color } }></Link>
                                                                : <Link to="#" data-src={ item.pictures[ 0 ] } onClick={ selectGroup } style={ { backgroundImage: `url(${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] })` } }></Link>
                                                        }
                                                    </li>
                                                ) )
                                            }
                                        </ul>
                                    </div>
                            ) )
                            : ""
                    }
                    <div className="product-action mb-2 d-flex align-items-center flex-wrap">
                        <div className="single-qty-wrapper mr-md-4">
                            <label className="mb-1">QTY:</label>
                            <Qty stock={ product.stock } />
                        </div>

                        <Link to="#" className="btn btn-dark add-cart icon-shopping-cart mr-3" title="Add to Cart" onClick={ addToCart }>
                            Add to Cart
                        </Link>

                        <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `add-wishlist ${ isInWishlist ? 'checked' : '' }` } title={ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' } onClick={ onWishlistClick }>{ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' }</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { quickAddToCart, addToWishList } )( ExtendedDetail );