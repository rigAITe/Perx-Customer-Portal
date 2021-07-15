import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import HorizontalThumbnail from './common/thumbnails/horizontal-thumbnail';
import SingleDetail from './common/details/single-detail';
import SingleTab from './common/tabs/single-tab';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import SidebarToggle from './common/sidebars/sidebar-toggle';
import ProductSidebarOne from './common/sidebars/product-sidebar-one';

import { findProductById } from '../../../utils';

function InnerZoomProduct( props ) {

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
                <title>Porto React Ecommerce - Product Inner Zoom</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Inner Zoom" path="products" />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 product-page skeleton-body skel-shop-products">
                            <div className="product-single-container product-single-default">
                                <div className="row">
                                    <HorizontalThumbnail addClass="col-lg-7 col-md-6" product={ product } />

                                    <div className="col-lg-5 col-md-6">
                                        <SingleDetail product={ product } link="zoom" />
                                    </div>
                                </div>
                            </div>

                            <SingleTab product={ product } />
                        </div>

                        <SidebarToggle />

                        <ProductSidebarOne />
                    </div>
                </div>

                <FeaturedProductsOne link="zoom" />
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

export default connect( mapStateToProps, {} )( InnerZoomProduct );