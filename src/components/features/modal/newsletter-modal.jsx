import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { hideNewsletter } from '../../../action';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundImage: `url( "${ process.env.PUBLIC_URL }/assets/images/demo/newsletter_popup_bg.jpg" )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#fff"
    }
};

Modal.setAppElement( '#root' );

let timeOut;

function NewsletterModal( props ) {
    const [ open, setOpen ] = useState( false );

    useEffect( () => {
        if ( !props.isOpened ) {
            timeOut = setTimeout( () => {
                if ( window.location.pathname === process.env.PUBLIC_URL + '/' ) {
                    setOpen( true );
                }
            }, 5000 );
        }
    }, [] )

    function close( e ) {
        e.stopPropagation();
        document.querySelector( ".newsletter-popup" ) && ( document.querySelector( ".newsletter-popup" ).style.opacity = 0 );

        let checked = document.querySelector( "#newsletter-popup-form .checkbox input:checked" );

        setTimeout( () => {
            setOpen( false );
            if ( checked ) {
                props.hideNewsletter();
            }

            window.clearTimeout( timeOut );
        }, 40 );
    }

    const afterOpenModal = () => {
        document.querySelector( ".newsletter-popup" ).style.opacity = 1;
    }

    return (
        <Modal
            isOpen={ open }
            shouldFocusAfterRender={ false }
            onRequestClose={ close }
            contentLabel="Newsletter Modal"
            className="newsletter-popup"
            portalClassName="ReactModalPortal newsletter-portal"
            overlayClassName="newsletter-modal-overlay"
            id="newsletter-popup-form"
            style={ customStyles }
            onAfterOpen={ afterOpenModal }
        >
            <div className="newsletter-popup-content">
                <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/logo-black.png` } alt="Logo" className="logo-newsletter" width={ 111 } height={ 44 } />
                <h2>BE THE FIRST TO KNOW</h2>
                <p>Subscribe to the Porto eCommerce newsletter to receive timely updates from your favorite products.</p>

                <form action="#">
                    <div className="input-group">
                        <input type="email" className="form-control" id="newsletter-email" name="newsletter-email" placeholder="Email address" required />
                        <input type="submit" className="btn" value="Go!" />
                    </div>
                </form>

                <div className="newsletter-subscribe">
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="1" />
                            Don't show this popup again
                        </label>
                    </div>
                </div>
            </div>
            <button title="Close (Esc)" type="button" className="mfp-close" onClick={ close }>×</button>
        </Modal>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        isOpened: state.demo.isOpened ? state.demo.isOpened : false
    };
}

export default connect( mapStateToProps, { hideNewsletter } )( NewsletterModal );