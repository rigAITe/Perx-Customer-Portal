import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { HIDE_CART_MODAL } from '../../../constants/action-types'

Modal.setAppElement( '#root' );

function AddToCartModal( props ) {
    const { product } = props;

    function close() {
        document.querySelector( ".add-cart-modal" ) && ( document.querySelector( ".add-cart-modal" ).style.opacity = 0 );
        setTimeout( () => {
            props.hideCartModal();
        }, 40 );
    }

    function afterOpenModal() {
        if ( document.querySelector( ".add-cart-modal" ) ) {
            document.querySelector( ".add-cart-modal" ).style.opacity = 1;
            document.querySelector( ".add-cart-modal .modal-dialog" ).style.transform = "translate(0,0)";
        }
    }

    const closeModal = ( e ) => {
        e.preventDefault();
        close();
    }

    return (
        <Modal
            isOpen={ props.showModal }
            onRequestClose={ close }
            contentLabel="addCartModal"
            className="add-cart-modal modal"
            id="addCartModal"
            shouldFocusAfterRender={ false }
            portalClassName="ReactModalPortal add-to-cart-portal"
            overlayClassName="cart-modal-overlay"
            onAfterOpen={ afterOpenModal }
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body add-cart-box text-center">
                        <p>You've just added this product to the<br />cart:</p>
                        <h4 id="productTitle">{ product ? product.name : '' }</h4>
                        <img src={ product.pictures ? `${ process.env.PUBLIC_URL }/${ product.pictures[ 0 ] }` : '' } id="productImage" width="100" height="100" alt="adding cart" />

                        <div className="btn-actions">
                            <Link to={ `${ process.env.PUBLIC_URL }/pages/cart` }><button className="btn-primary">Go to cart page</button></Link>
                            <Link to="#" onClick={ closeModal }><button className="btn-primary">Continue</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )

}

const mapStateToProps = ( state, props ) => {
    return {
        product: state.cartList.modalProduct ? state.cartList.modalProduct : [],
        showModal: state.cartList.showModal ? state.cartList.showModal : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideCartModal: () => {
            dispatch( { type: HIDE_CART_MODAL } );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( AddToCartModal );