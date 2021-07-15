import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';


import SweepstakeContainer from '../../../common/sweepstake/sweepstake-container';
import { findProductById } from '../../../../utils';
import Breadcrumb from '../../../common/breadcrumb';


function Sweepstake( props ) {

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
                <title>
                    Customer Portal - Sweepstake 
                    {/* {props.productId} */}
                </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - Sweepstake 
                    {/* {props.productId} */}
                    </h1>

            <div className="main">
                <Breadcrumb current=
                "Sweepstake"
               />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 product-page skeleton-body skel-shop-products">
                            <SweepstakeContainer uri= {require('./images/item1.png')} />
                            <SweepstakeContainer uri= {require('./images/item2.png')} />
                            <SweepstakeContainer uri= {require('./images/item3.png')} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="d-flex flex-row justify-content-center w-100">
                            <button className= "btn btn-primary">
                                Load more
                            </button>
                        </div>
                    </div>
                    <div className="mb-2"></div>
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

export default connect( mapStateToProps, {} )( Sweepstake );