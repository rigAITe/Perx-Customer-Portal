import React, { useEffect, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Link from 'react-router-dom/Link';
import { findProductById } from '../../../../utils';
import Breadcrumb from '../../../common/breadcrumb';




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
                    Customer Portal - Sweepstake History
                    {/* {props.productId} */}
                </title>
            </Helmet>

            <h1 className="d-none">Customer Portal -  Sweepstake History
                    {/* {props.productId} */}
                    </h1>

            <div className="main">
                <Breadcrumb current=
                "Sweepstake History"
               />

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <div className="card cap-table">
                                <div className="card-body">
                                    <h4 className= "black-text">
                                    Sweepstake history
                                    </h4>
                                    <div className= "table-responsive">
                                        <table className= "table">
                                            <thead>
                                                <tr>
                                                <th>
                                                    Image
                                                </th>
                                                <th>
                                                    Sweepstake
                                                </th>
                                                <th>
                                                    Tickets
                                                </th>
                                                <th>
                                                    Started
                                                </th>
                                                <th>
                                                    Expires
                                                </th>
                                                <th>
                                                Sweepstake Status
                                                </th>
                                                <th>
                                                Claim Status
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody className= "sweepstake-table">
                                                <tr>
                                                    <td>
                                                        <img src="" alt=""/>
                                                    </td>
                                                    <td>
                                                        <p className= "bold ruby-tag">
                                                        Key West Vacation Sweepstakes
                                                        </p>
                                                    </td>
                                                    <td>
                                                    <Link className= "blue-anchor underline bold"  to={ `${ process.env.PUBLIC_URL }/pages/sweepstake_ticket` } href="#">
                                                        View tickets
                                                     </Link>
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <p>Jun 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '18rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-success">Won (1st)</span></h5>

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
                                                        <img src="" alt=""/>
                                                    </td>
                                                    <td>
                                                        <p className= "bold ruby-tag">
                                                        Key West Vacation Sweepstakes
                                                        </p>
                                                    </td>
                                                    <td>
                                                    <Link className= "blue-anchor underline bold"  to={ `${ process.env.PUBLIC_URL }/pages/view-sweepstake` } href="#">
                                                        View tickets
                                                     </Link>
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <p>Jun 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '18rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ongoing</p>
                                                            </div>
                                                            <h5> <span class="badge badge-warning">
                                                                Awaiting Draw
                                                                </span></h5>

                                                        </div>
                                                    </td>
                                                    <td>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="" alt=""/>
                                                    </td>
                                                    <td>
                                                        <p className= "bold ruby-tag">
                                                        Key West Vacation Sweepstakes
                                                        </p>
                                                    </td>
                                                    <td>
                                                    <Link className= "blue-anchor underline bold"  to={ `${ process.env.PUBLIC_URL }/pages/view-sweepstake` } href="#">
                                                        View tickets
                                                     </Link>
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <p>Jun 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '18rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-success">Won (2nd)</span></h5>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p>Claimed</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="" alt=""/>
                                                    </td>
                                                    <td>
                                                        <p className= "bold ruby-tag">
                                                        Key West Vacation Sweepstakes
                                                        </p>
                                                    </td>
                                                    <td>
                                                    <Link className= "blue-anchor underline bold"  to={ `${ process.env.PUBLIC_URL }/pages/view-sweepstake` } href="#">
                                                        View tickets
                                                     </Link>
                                                    </td>
                                                    <td>
                                                        <p>Jan 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <p>Jun 1, 2020</p>
                                                    </td>
                                                    <td>
                                                        <div style= {{width: '18rem'}}  className= "d-flex flex-row justify-content-between ">
                                                            <div>
                                                                <p>Ended</p>
                                                            </div>
                                                            <h5> <span class="badge badge-danger">Lost</span></h5>

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