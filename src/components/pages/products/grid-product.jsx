import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import FeaturedProductsOne from './common/product-groups/featured-products-one';
import GridThumbnail from './common/thumbnails/grid-thumbnail';
import GridDetail from './common/details/grid-detail';
import SingleTab from './common/tabs/single-tab';

import { findProductById } from '../../../utils';

function GridProduct( props ) {

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
                <title>Porto React Ecommerce - Product Grid</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Page</h1>

            <div className="main">
                <Breadcrumb current="Grid" path="products" />

                <div className="container">
                    <div className="product-single-container product-single-grid product-page skeleton-body skel-shop-products">
                        <div className="row">
                            <div className="col-md-8">
                                <GridThumbnail product={ product } />
                            </div>
                            <div className="col-md-4">
                                <GridDetail product={ product } link="grid" />
                            </div>
                        </div>
                    </div>

                    <SingleTab product={ product } isSize={ true } />
                </div>
                <FeaturedProductsOne addClass="bg-white" link="grid" />
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

export default connect( mapStateToProps, {} )( GridProduct );