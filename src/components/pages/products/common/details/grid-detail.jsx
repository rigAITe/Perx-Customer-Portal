import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Qty from '../../../../features/qty';
import ProductNav from './common/product-nav';

import { quickAddToCart, addToWishList } from '../../../../../action'
import { findIndex, getPrice } from '../../../../../utils';

function GridDetail( props ) {
    const { wishlist, product } = props;
    let isInWishlist = findIndex( wishlist, product.id ) ? true : false;
    let maxPrice, minPrice = 0;

    if ( product.variants ) {
        // variant Type => $min-$max price
        maxPrice = getPrice( product.variants );
        minPrice = getPrice( product.variants, 'min' );
    }

    function onWithWishClick( e ) {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    function addToCart( e ) {
        e.preventDefault();
        let val = 1;
        if ( e.currentTarget.parentElement.querySelector( ".horizontal-quantity" ) )
            val = parseInt( e.currentTarget.parentElement.querySelector( ".horizontal-quantity" ).getAttribute( "value" ) );
        props.quickAddToCart( props.product, val );
    }

    const selectGroup = ( e ) => {
        e.preventDefault();
        e.currentTarget.parentElement.parentElement.querySelector( ".active" ) && e.currentTarget.parentElement.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.parentElement && e.currentTarget.parentElement.classList.add( "active" );
    }

    return (
        <>
            <div className="skel-pro skel-detail"></div>
            <div className="product-single-details">
                <h1 className="product-title">{ product.name }</h1>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                    </div>

                    <Link to="#" className="rating-link">{ `( ${ product.reviews } Reviews )` }</Link>
                </div>

                <ProductNav product={ product } link={ props.link } />
                {
                    product.variants ?
                        <div className="product-filters-container">
                            {
                                product.variants.map( ( variant, index ) => (
                                    <div className="product-single-filter" key={ "varient" + index }>
                                        <label>{ variant.name }:</label>
                                        {
                                            variant.name === "size" ?
                                                <ul className="config-size-list">
                                                    {
                                                        variant.type.map( ( item, index ) => (
                                                            <li className={ index === 0 ? "active" : "" } key={ "size" + index } >
                                                                <Link to="#" onClick={ selectGroup }>{ item.size }</Link>
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                                : <ul className="config-swatch-list">
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
                                        }
                                    </div>
                                ) )
                            }
                        </div>
                        : ""
                }

                {
                    product.variants ?
                        <div className="price-box">
                            <span className="product-price">{ minPrice.toFixed( 2 ) }points - { maxPrice.toFixed( 2 ) }points</span>
                        </div>
                        :
                        product.salePrice ?
                            <div className="price-box">
                                <span className="old-price">{ product.price.toFixed( 2 ) }points</span>
                                <span className="product-price">{ product.salePrice.toFixed( 2 ) }points</span>
                            </div>
                            :
                            <div className="price-box">
                                <span className="product-price">{ product.price.toFixed( 2 ) }points</span>
                            </div>
                }
                <hr className="divider" />

                <div className="product-action">
                    <Qty stock={ product.stock } />

                    <Link to="#" className="btn btn-dark add-cart icon-shopping-cart" title="Add to Cart" onClick={ addToCart }>
                        Add to Cart
                    </Link>
                </div>

                <hr className="divider mb-1" />

                <div className="product-single-share mb-4">
                    <div className="social-icons mr-2">
                        <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank"></Link>
                        <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank"></Link>
                        <Link to="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank"></Link>
                        <Link to="#" className="social-icon social-gplus fab fa-google-plus-g" target="_blank"></Link>
                        <Link to="#" className="social-icon social-mail icon-mail-alt" target="_blank"></Link>
                    </div>
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `paction add-wishlist ${ isInWishlist === true ? 'checked' : '' }` } title={ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' } onClick={ onWithWishClick }>
                        { isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' }
                    </Link>
                </div>

                <ul className="single-info-list">
                    <li>AVAILABILITY: <strong>AVAILABLE</strong></li>
                    <li>SKU: <strong>123456789</strong></li>
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    };
}

export default connect( mapStateToProps, { quickAddToCart, addToWishList } )( GridDetail );