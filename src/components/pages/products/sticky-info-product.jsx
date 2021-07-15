import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import StickyBox from 'react-sticky-box';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import InfoThumbnail from './common/thumbnails/info-thumbnail';
import SingleDetail from './common/details/single-detail';
import SingleTab from './common/tabs/single-tab';
import FeaturedProductsOne from './common/product-groups/featured-products-one';

import { findProductById, setStickyValues, stickyContentHandle } from '../../../utils';

function StickyInfoProduct( props ) {

    let products = props.products;
    let product = findProductById( products, props.productId );

    if ( !product ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

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
                <title>Porto React Ecommerce - Product Sticky Info</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Sticky Info" path="products" />

                <div className="container">
                    <div className="product-single-container product-page skeleton-body skel-shop-products">
                        <div className="row">
                            <InfoThumbnail addClass="col-lg-6" product={ product } />

                            <div className="col-lg-6">
                                <StickyBox className="sticky-sidebar" offsetTop={ 80 }>
                                    <SingleDetail product={ product } noSelect={ true } link="sticky-info" />
                                </StickyBox>
                            </div>
                        </div>
                    </div>

                    <SingleTab product={ product } />
                </div>

                <FeaturedProductsOne link="sticky-info" />
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

export default connect( mapStateToProps, {} )( StickyInfoProduct );