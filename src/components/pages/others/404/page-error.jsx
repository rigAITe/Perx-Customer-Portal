import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function PageError() {
    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - 404 Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - 404 Page</h1>

            <div className="main">
                <div className="container">
                    <section className="http-error">
                        <div className="row justify-content-center py-3">
                            <div className="col-md-7 text-center">
                                <div className="http-error-main">
                                    <h2>404<i className="fas fa-file ml-3"></i></h2>
                                    <p>We're sorry, but the page you were looking for doesn't exist.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4 mt-md-0">
                                <h4 className="text-primary">Here are some useful links</h4>
                                <ul className="nav nav-list">
                                    <li className="nav-item"><Link className="nav-link" to={ `${ process.env.PUBLIC_URL }/` }>Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to={ `${ process.env.PUBLIC_URL }/pages/about` }>About Us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">FAQ's</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Sitemap</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PageError;