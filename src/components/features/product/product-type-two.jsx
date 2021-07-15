import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPrice, findIndex } from '../../../utils';
import { addToCart, addToWishList, showQuickView } from '../../../action';

function ProductTypeTwo( props ) {
    let isInWishlist = props.product ? ( findIndex( props.wishlist, props.product.id ) ? true : false ) : false;
    let { addClass, link = "default", product, hasWishIcon = true, showQuickView, addToCart } = props;
    let priceMax, priceMin = 0;

    if ( product.variants ) {
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
        <div className={ `product-default ${ addClass }` }>
            <figure>
                <Link to={ `${ process.env.PUBLIC_URL }/products/${ link }/${ product.id }` } >
                    <span>
                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } className="first-image" alt="product" />
                    </span>
                    {
                        product.pictures[ 1 ] ?
                            <span className="product-image-hover">
                                <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] } className="last-image" alt="product" />
                            </span> : ""
                    }
                </Link>

                <div className="btn-icon-group">
                    <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal" onClick={ () => addToCart( product, 1 ) } title="Add to Cart">
                        <i className="icon-bag"></i>
                    </button>
                </div>
                <Link to="#" className="btn-quickview" title="Quick View" onClick={ ( e ) => { e.preventDefault(); showQuickView( product ) } }>Quick View</Link>
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
                    <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `btn-icon-wish ${ isInWishlist ? 'checked' : '' } ${ hasWishIcon ? '' : 'd-none' }` } onClick={ onWishlistClick } title={ `${ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' }` }><i className="icon-heart"></i></Link>
                </div>

                <h3 className="product-title">
                    <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ product.id }` }>{ product.name }</Link>
                </h3>

                {/* <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div> */}
                {
                    product.variants ?
                        <div className="price-box">
                            <span className="product-price">{ priceMin.toFixed( 2 ) } - { priceMax.toFixed( 2 ) } <span style={{color: 'blue'}}>Rubies</span></span>
                        </div>
                        :
                        product.salePrice ?
                            <div className="price-box">
                                <span className="old-price">{ product.price.toFixed( 2 ) } <span style={{color: 'blue'}}>Rubies</span></span>
                                <span className="product-price">{ product.salePrice.toFixed( 2 ) }</span>
                            </div>
                            :
                            <div className="price-box">
                                <span className="product-price">{ product.price.toFixed( 2 ) } <span style={{color: 'blue'}}>Rubies</span></span>
                            </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { addToCart, addToWishList, showQuickView } )( ProductTypeTwo );

