import React from 'react';
import { Link } from 'react-router-dom';

function TopNotice () {
    const closeNotice = () => {
        document.querySelector( ".top-notice" ).classList.add( "d-none" );
    }

    return (
        <div className="top-notice text-white bg-primary">
            <div className="container text-center">
                <h5 className="d-inline-block mb-0 mr-3 text-nowrap">Get Up to <b>40% OFF</b> New-Season Styles</h5>
                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="category">MEN</Link>
                <Link to={ `${process.env.PUBLIC_URL}/categories/full-width` } className="category  ml-3 mr-4">WOMEN</Link>
                <small>* Limited time only</small>
                <button title="Close (Esc)" onClick={ closeNotice } type="button" className="mfp-close">×</button>
            </div>
        </div>
    )
}

export default React.memo( TopNotice );