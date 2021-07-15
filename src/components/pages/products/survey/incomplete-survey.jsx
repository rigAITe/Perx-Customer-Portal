import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../../common/breadcrumb';
import SurveyContainer from './survey-container';
import { findProductById } from '../../../../utils';



function IncompleteSurvey( props ) {

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
                    Customer Portal - Survey 
                    {/* {props.productId} */}
                </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - Survey 
                    {/* {props.productId} */}
                    </h1>

            <div className="main">
                <Breadcrumb current=
                "Survey"
               />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 product-page skeleton-body skel-shop-products">
                            <SurveyContainer survey uri= {require('./images/image1.png')}  />
                            <SurveyContainer survey uri= {require('./images/image1.png')}  />
                            <SurveyContainer survey uri= {require('./images/image1.png')}  />
                            
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

export default connect( mapStateToProps, {} )( IncompleteSurvey );