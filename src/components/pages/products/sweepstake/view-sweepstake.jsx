import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import { findProductById } from '../../../../utils';
import AddressBar from '../../../common/address-bar';
import SingleTab from '../common/tabs/single-tab';
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
                    Customer Portal - View Sweepstake 
                    {/* {props.productId} */}
                </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - View Sweepstake 
                    {/* {props.productId} */}
            </h1>

            <div className="main">
                <Breadcrumb current=
                "View Sweepstake"
               />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 col-lg-6">
                            <img src={require('./images/item4.png')} alt="sweepstake"/>
                        </div>
                        <div className="col-md-6 col-12 col-lg-6">
                            <h4>Key West Vacation Sweepstakes</h4>
                            <p>Location: <span>Lagos</span> </p>
                            <p>Time left: <span>2d 16h Sunday, 3:40AM</span> </p>
                            <p>Prices</p>
                            <AddressBar text2= "1st: Trip for two to Key West." show />
                            <AddressBar text2= "2nd: Trip for two to Key West." show />
                            <AddressBar text2= "3rd: Trip for two to Key West." show />

                        </div>

                    </div>
                    <div className="row">
                        <SingleTab oneTab product={ product } />
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