import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SlideToggle } from 'react-slide-toggle';

import Breadcrumb from '../../../common/breadcrumb';
import CheckoutProgessBar from '../common/checkout-progress-bar';
import ShippingForm from '../common/shipping-form';
import OrderSummary from '../common/order-summary';

function CheckoutReview() {
    const [ bill, setBill ] = useState( 1 );

    const changeBill = ( e ) => {
        setBill( ( bill + 1 ) % 2 );
    }

    return (
        <>
            <Helmet>
                <title>Customer Portal - Checkout Page </title>
            </Helmet>

            <h1 className="d-none">Customer Portal - Checkout Page</h1>

            <div className="main">
                <Breadcrumb current="Checkout" />

                <div className="container">
                    <CheckoutProgessBar active={ 2 } />

                    <div className="row">
                        <div className="col-lg-4">
                            <OrderSummary />
                            <div className="checkout-info-box">
                                <h3 className="step-title">Ship To:
                                    <Link to="#" title="Edit" className="step-title-edit"><span className="sr-only">Edit</span><i className="icon-pencil"></i></Link>
                                </h3>

                                <address>
                                    Desmond Mason <br />
                                    123 Street Name, City, USA <br />
                                    Los Angeles, California 03100 <br />
                                    United States <br />
                                    (123) 456-7890
                                </address>
                            </div>

                            <div className="checkout-info-box">
                                <h3 className="step-title">Shipping Method:
                                    <Link to="#" title="Edit" className="step-title-edit"><span className="sr-only">Edit</span><i className="icon-pencil"></i></Link>
                                </h3>

                                <p>Flat Rate - Fixed</p>
                            </div>
                        </div>
                        <div className="col-lg-8 order-lg-first">
                            <div className="checkout-payment">
                                <h2 className="step-title">Payment Method:</h2>
                                <h4>Check / Money order</h4>

                                <div className="form-group-custom-control">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="change-bill-address" value="1" onChange={ changeBill } />
                                        <label className="custom-control-label" htmlFor="change-bill-address">My billing and shipping address are the same</label>
                                    </div>
                                </div>

                                <div id="checkout-shipping-address" className={ bill === 0 ? "show" : "" }>
                                    <address>
                                        Desmond Mason <br />
                                        123 Street Name, City, USA <br />
                                        Los Angeles, California 03100 <br />
                                        United States <br />
                                        (123) 456-7890
                                    </address>
                                </div>

                                <div id="new-checkout-address" className={ bill === 1 ? "show" : "" }>
                                    <form action="#">
                                        <ShippingForm />
                                        <div className="form-group-custom-control">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="address-save" />
                                                <label className="custom-control-label" htmlFor="address-save">Save in Address book</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="clearfix">
                                    <Link to="#" className="btn btn-primary float-right">Place Order</Link>
                                </div>
                            </div>
                            <SlideToggle collapsed={ true }>
                                {
                                    ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                        <div className="checkout-discount">
                                            <h4>
                                                <Link data-toggle="collapse" to="#checkout-discount-section" className={ toggleState.toLowerCase() } onClick={ onToggle }>Apply Discount Code</Link>
                                            </h4>

                                            <div className="collapse show" id="checkout-discount-section" ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                                <form action="#">
                                                    <input type="text" className="form-control form-control-sm" placeholder="Enter discount code" required />
                                                    <button className="btn btn-sm btn-outline-secondary" type="submit">Apply Discount</button>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                            </SlideToggle>
                        </div>
                    </div>
                </div>

                <div className="mb-6"></div>
            </div>
        </>
    )
}

export default CheckoutReview;