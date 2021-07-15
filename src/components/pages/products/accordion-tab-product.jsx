import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import SingleDetail from './common/details/single-detail';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import HorizontalThumbnail from './common/thumbnails/horizontal-thumbnail';
import SingleToggleTab from './common/tabs/single-toggle-tab';
import SidebarToggle from './common/sidebars/sidebar-toggle';
import ProductSidebarTwo from './common/sidebars/product-sidebar-two';

import { findProductById } from '../../../utils';

function AccordionTabProduct( props ) {
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
                <title>Porto React Ecommerce - Product Accordion Tab</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">

                <Breadcrumb current="Accordion Tab" path="products" />

                <div className="container">
                    <div className="row">
                        <SidebarToggle />

                        <ProductSidebarTwo />

                        <div className="col-lg-9 product-page skeleton-body skel-shop-products">
                            <div className="product-single-container product-single-default">
                                <div className="row">
                                    <HorizontalThumbnail addClass="col-lg-7 col-md-6" product={ product } />

                                    <div className="col-lg-5 col-md-6">
                                        <SingleDetail link="accordion" product={ product } />
                                    </div>
                                </div>
                            </div>
                            <SingleToggleTab product={ product } />
                            <FeaturedProductsOne addClass="pt-sm bg-white" link="accordion" isContainer={ false } />
                        </div>
                    </div>
                </div>
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

export default connect( mapStateToProps, {} )( AccordionTabProduct );