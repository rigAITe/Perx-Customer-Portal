import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import SingleDetail from './common/details/single-detail';
import SingleTab from './common/tabs/single-tab';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import VerticalThumbnail from './common/thumbnails/vertical-thumbnail';

import { findProductById } from '../../../utils';

function VerticalProduct( props ) {

    let products = props.products;
    let product = findProductById( products, props.productId );

    if ( !product ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
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
                <title>Porto React Ecommerce - Product Vertical</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">

                <Breadcrumb current="Vertical" path="products" />

                <div className="container-fluid product-page skeleton-body skel-shop-products">
                    <div className="product-single-container product-single-default">
                        <div className="row">
                            <VerticalThumbnail addClass="col-lg-6" product={ product } />

                            <div className="col-lg-6">
                                <SingleDetail product={ product } link="vertical" />
                                <SingleTab product={ product } />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="product-single-video" style={ { backgroundImage: `url('${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/bg-4.jpg')` } }>
                    <div className="container">
                        <h3>Concept Film</h3>
                        <a href="https://www.youtube.com/watch?v=Ph_VkTVmXh4" className="video-btn">
                            Watch <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/products/single/extended/icon-play.png` } alt="play" />
                        </a>
                    </div>
                </div>

                <FeaturedProductsOne link="vertical" isContainer={ false } />
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

export default connect( mapStateToProps, {} )( VerticalProduct );