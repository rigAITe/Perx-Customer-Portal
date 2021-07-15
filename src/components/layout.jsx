import React, { useEffect, useLayoutEffect, useState } from 'react';
import { matchPath } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './common/header';
import Footer from './common/footer';
// import TopNotice from './common/top-notice';
import MobileMenu from './common/mobile-menu';
import AddToCartModal from './features/modal/add-to-cart-modal';
import QuickModal from './features/modal/quick-modal';

import { init } from '../utils';

import { innerOverlayPaths } from '../mock-data/data';

import 'react-image-lightbox/style.css';

function Layout( props ) {
    let matchedCount = 0;
    const [ prevPath, setPrevPath ] = useState( '' );
    const CloseButton = ( { YouCanPassAnyProps, closeToast } ) => (
        <i
            className="icon-cancel"
            onClick={ closeToast }
            style={ { display: 'flex', alignItems: 'center' } }
        >
        </i>
    );

    useLayoutEffect( () => {
        let overlayFlag = true;

        for ( let i = 0; i < innerOverlayPaths.length; i++ ) {
            if ( prevPath.indexOf( innerOverlayPaths[ i ] ) > 0 && props.location.pathname.indexOf( innerOverlayPaths[ i ] ) > 0 ) {
                overlayFlag = false;
            }

            if ( prevPath === props.location.pathname ) {
                overlayFlag = false;
            }
        }

        if ( overlayFlag ) {
            document.querySelector( 'body' ).classList.remove( 'loaded' );
            document.querySelector( '#root' ).classList.remove( 'loaded' );
        }
    }, [ window.location.pathname ] )

    useEffect( () => {
        setPrevPath( props.location.pathname );

        setTimeout( () => {
            document.querySelector( 'body' ).classList.add( 'loaded' );
            document.querySelector( '#root' ).classList.add( 'loaded' );
        }, 200 );
    }, [ window.location.pathname ] )

    useEffect( () => {
        init();

        // show 404 page
        while ( matchedCount < props.children.length && !matchPath( window.location.pathname, { path: props.children[ matchedCount ].props.path, exact: true } ) ) {
            matchedCount++;
        }

        if ( props.children && !props.children.length ) {
            if ( ( matchPath( window.location.pathname, { path: props.children.props.path, exact: true } ) ) ) {
                matchedCount = 1;
            }
        }

        if ( ( matchedCount >= props.children.length ) || ( props.children && !props.children.length && matchedCount === 0 ) ) {
            window.location = process.env.PUBLIC_URL + "/pages/404";
        }
    } )

    useEffect( () => {
        if ( window.location.pathname === ( process.env.PUBLIC_URL + '/' ) ) {
            document.querySelector( 'html' ).style.overflowX = "hidden";
        } else {
            document.querySelector( 'html' ).style.overflowX = "visible";
        }
    } )

    return (
        <div className="porto">

            <div className="page-wrapper">
                {/* <TopNotice /> */}

                <Header />

                { props.children }

                <Footer />
            </div>

            <MobileMenu />

            <AddToCartModal />

            <QuickModal />

            <ToastContainer autoClose={ 2000 } closeButton={ <CloseButton /> } />
        </div>
    )
}

export default Layout;