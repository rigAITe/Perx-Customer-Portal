import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import { findProductById } from '../../../../utils';

import Breadcrumb from '../../../common/breadcrumb';
import Link from 'react-router-dom/Link';
import AddressBar from '../../../common/address-bar';




function SweepstakeHistory( props ) {

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
                    Customer Portal - Sweepstake Ticket
                    {/* {props.productId} */}
                </title>
            </Helmet>

            <h1 className="d-none">Customer Portal -  Sweepstake Ticket
                    {/* {props.productId} */}
                    </h1>

            <div className="main">
                <Breadcrumb current=
                "Sweepstake History"
               />

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-8">
                            <div className="card cap-table">
                                <div className="card-body">
                                    <h4 className= "black-text">
                                    My Sweepstake Ticket
                                    </h4>
                                    <div className= "table-responsive">
                                        <table className= "table">
                                            <thead>
                                                <tr>
                                                <th>
                                                    Tickets Number
                                                </th>
                                                <th>
                                                    Date won
                                                </th>
                                                <th>
                                                    Status
                                                </th>
                                                <th>
                                                    Claim
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody className= "sweepstake-table">
                                                <tr>
                                                    <td>
                                                      <p>003</p>
                                                
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '12rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-success">Won</span></h5>

                                                        </div>
                                                    </td>
                                                    <td>
                                                    <Link to={ `${ process.env.PUBLIC_URL }/pages/claim-sweepstake` }  className="btn btn-primary" title="Claim" onClick= {() => null}>
                                                        Claim
                                                    </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <p>003</p>
                                                
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '12rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-danger">Loss</span></h5>

                                                        </div>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <p>003</p>
                                                
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '12rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-success">Won</span></h5>

                                                        </div>
                                                    </td>
                                                    <td>
                                                    <Link to={ `${ process.env.PUBLIC_URL }/pages/claim-sweepstake` }  className="btn btn-primary" title="Claim" onClick= {() => null}>
                                                        Claim
                                                    </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                      <p>003</p>
                                                
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '12rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-danger">Loss</span></h5>

                                                        </div>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cap-table">
                                <div className="card-body">
                                    <h5>
                                    Sweepstake info
                                    </h5>
                                    <div className="row">
                                        <div className="col-6 col-md-3 col-lg-3">

                                        </div>
                                        <div className="col-6 col-md-9 col-lg-9">
                                            <h5 className= "ruby-tag bold-text underline">
                                            Key West Vacation Sweepstakes
                                            </h5>
                                        </div>
                                    </div>
                                    <p>
                                        Location: <span>Lagos</span>
                                    </p>
                                    <p>
                                    Time left:  <span>
                                       2d 16h Sunday, 3:40AM
                                        </span>
                                    </p>
                                    <p>
                                        Price
                                    </p>
                                    <AddressBar show text2 = "1st: Trip for two to Key West." />
                                    <AddressBar show text2 = "2nd: Trip for two to Key West." />
                                    <AddressBar show text2 = "3rd: Trip for two to Key West." />
                                </div>
                            </div>
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

export default connect( mapStateToProps, {} )( SweepstakeHistory );