import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../../common/breadcrumb';
import CheckoutProgessBar from '../common/checkout-progress-bar';
import ShippingForm from '../common/shipping-form';
import ShippingMethods from '../common/shipping-methods';
import OrderSummary from '../common/order-summary';

function ShippingOne() {
    const next = ( e ) => {
        document.querySelector( "#shipping-form" ) && document.querySelector( "#shipping-form" ).submit();
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Checkout Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Checkout Page</h1>

            <div className="main">
                <Breadcrumb current="Checkout" parent="pages" />

                <div className="container">
                    <CheckoutProgessBar />

                    <div className="row">
                        <div className="col-lg-8">
                            <ul className="checkout-steps">
                                <li>
                                    <h2 className="step-title">Shipping Address</h2>

                                    <form action="#">
                                        <div className="form-group required-field">
                                            <label>Email Address </label>
                                            <div className="form-control-tooltip">
                                                <input type="email" className="form-control" required />
                                                <span className="input-tooltip" data-toggle="tooltip" title="We'll send your order confirmation here." data-placement="right"><i className="icon-question-circle"></i></span>
                                            </div>
                                        </div>

                                        <div className="form-group required-field">
                                            <label>Password </label>
                                            <input type="password" className="form-control" required />
                                        </div>

                                        <p>You already have an account with us. Sign in or continue as guest.</p>
                                        <div className="form-footer">
                                            <button type="submit" className="btn btn-primary">LOGIN</button>
                                            <Link to="forgot-password.html" className="forget-pass"> Forgot your password?</Link>
                                        </div>
                                    </form>

                                    <form action={ `${ process.env.PUBLIC_URL }/pages/checkout/review` } id="shipping-form" >
                                        <ShippingForm />
                                    </form>
                                </li>

                                <li>
                                    <ShippingMethods />
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <OrderSummary />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-steps-action">
                                <Link to={ `${ process.env.PUBLIC_URL }/pages/checkout/review` } className="btn btn-primary float-right" name="submit" onClick={ next }>NEXT</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6"></div>
            </div>
        </>
    )
}

export default ShippingOne;