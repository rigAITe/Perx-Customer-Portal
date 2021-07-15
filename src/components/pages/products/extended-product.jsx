import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import ExtendedDetail from './common/details/extended-detail';
import ExtendedThumbnail from './common/thumbnails/extended-thumbnail';
import SingleTab from './common/tabs/single-tab';
import FeaturedProductsOne from './common/product-groups/featured-products-one';

import { findProductById } from '../../../utils';

function ExtendedProduct( props ) {

    let products = props.products;
    let product = findProductById( products, props.productId );

    if ( !product ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    if ( product.pictures.length < 4 ) {
        window.location = process.env.PUBLIC_URL + "/products/default/" + product.id;
    }

    useLayoutEffect( () => {
        document.querySelector( '.skeleton-body' ) && document.querySelector( '.skeleton-body' ).classList.remove( 'loaded' );
    }, [ props.productId ] )

    useEffect( () => {
        let imgLoad = imagesLoaded( ".product-single-gallery" );

        imgLoad.on( "done", function () {
            document.querySelector( '.skeleton-body' ) && document.querySelector( '.skeleton-body' ).classList.add( 'loaded' );
        } )
    }, [ props.productId ] )

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Product Extended</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Extended" path="products" />

                <div className="product-single-container product-single-extended product-page">
                    <div className="container skeleton-body skel-shop-products">
                        <ExtendedThumbnail product={ product } />

                        <ExtendedDetail product={ product } link="extended" />
                    </div>
                </div>

                <div className="product-single-row">
                    <div className="single-row-entire" style={ { backgroundImage: `url('${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/bg-1.jpg')` } }></div>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-md-6 col-xl-5">
                                <h5>Enjoy the power</h5>
                                <h2>Start a revolution<br />right now.</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-single-row" >
                    <div className="single-row-bg" style={ { backgroundImage: `url('${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/bg-2.jpg')` } }></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xl-5">
                                <h5>Enjoy the silence</h5>
                                <h2>Acoustic Noise<br />Cancelling</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-single-row single-row-reverse" >
                    <div className="single-row-bg" style={ { backgroundImage: `url('${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/bg-3.jpg')` } }></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-6 col-xl-5 offset-xl-7">
                                <h5>Be Amazed</h5>
                                <h2>The most powerfull<br />headphone ever.</h2>
                                <ul>
                                    <li><i className="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                    <li><i className="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                    <li><i className="icon-ok"></i>Inventory Management with Backordered items</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-5 mb-lg-6 mb-xl-7"></div>

                <div className="container">
                    <SingleTab addClass="mb-6 mb-lg-7 mb-xl-8" product={ product } />
                </div>

                <div className="product-single-video" style={ { backgroundImage: `url('${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/bg-4.jpg')` } }>
                    <div className="container">
                        <h3>Concept Film</h3>
                        <a href="https://www.youtube.com/watch?v=Ph_VkTVmXh4" className="video-btn">
                            Watch <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/icon-play.png` } alt="play" />
                        </a>
                    </div>
                </div>

                <FeaturedProductsOne link="extended" />
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : [],
        productId: props.match.params.id ? props.match.params.id : 1
    }
}

export default connect( mapStateToProps, {} )( ExtendedProduct );