import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";
import Modal from 'react-modal';
import imagesLoaded from 'imagesloaded';

import Qty from '../qty';
import Carousel from '../../features/carousel';

import { getPrice, findIndex } from '../../../utils';
import { quickAddToCart, addToWishList, hideQuickView, addToCompare } from '../../../action';

const customStyles = {
    content: {
        top: '50%',
        right: 'auto',
        transform: 'translateY(-50%)',
        position: 'relative',
        maxWidth: '872px',
        width: '90%',
        padding: '20px 20px 0',
        overflow: 'hidden'
    }
};

function QuickModal( props ) {
    const { product, auction  } = props;
    let wishlist = props.wishlist;
    let isInWishlist = props.product ? ( findIndex( wishlist, props.product.id ) ? true : false ) : false;
    let maxPrice, minPrice = 0;

    const selectGroup = ( e ) => {
        e.preventDefault();
        document.querySelector( ".product-single-gallery .owl-item.active img" ) && document.querySelector( ".product-single-gallery .owl-item.active img" ).setAttribute( "src", e.currentTarget.getAttribute( "data-src" ) );
        e.currentTarget.parentElement.parentElement.querySelector( ".active" ) && e.currentTarget.parentElement.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.parentElement && e.currentTarget.parentElement.classList.add( "active" );
    }

    function closeModal() {
        document.querySelector( ".product-quick-view" ) && ( document.querySelector( ".product-quick-view" ).style.opacity = 0 );
        setTimeout( () => {
            props.hideQuickView();
        }, 40 );
    }

    function addToCart( e ) {
        e.preventDefault();
        let val = parseInt( e.currentTarget.parentElement.querySelector( ".horizontal-quantity" ).getAttribute( "value" ) );
        props.quickAddToCart( props.product, val );
    }

    function onWithWishClick( e ) {
        if ( !isInWishlist ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    const setHeight = () => {
        let height;
        if ( window.outerWidth >= 768 ) {
            height = parseInt( window.innerHeight * 0.7 );
        } else {
            height = parseInt( window.innerHeight - 40 )
        }
        if ( height % 2 !== 0 ) height += 1;
        if ( document.querySelector( ".product-quick-view" ) ) {
            document.querySelector( ".product-quick-view" ).style.maxHeight = height + "px";
            document.querySelector( ".product-quick-view .custom-scrollbar" ).style.maxHeight = height + "px";
        }
    }

    function afterOpenModal() {
        let imgLoad = imagesLoaded( ".product-single-gallery" );

        if ( document.querySelector( '.quickview-modal-overlay .skeleton-body' ) ) {
            document.querySelector( '.quickview-modal-overlay .skeleton-body' ).classList.remove( 'loaded' );
        }

        imgLoad.on( "done", function () {
            if ( document.querySelector( '.quickview-modal-overlay .skeleton-body' ) ) {
                document.querySelector( '.quickview-modal-overlay .skeleton-body' ).classList.add( 'loaded' );
            }
        } )

        setHeight();
        window.onresize = () => {
            setHeight();
        }
        document.querySelector( ".product-quick-view" ).style.opacity = 1;
    }

    function thumbActiveHandler( e ) {
        e.currentTarget.parentNode.parentNode.querySelector( '.active' ) && e.currentTarget.parentNode.parentNode.querySelector( '.active' ).classList.remove( 'active' );
        e.currentTarget.parentNode && e.currentTarget.parentNode.classList.add( 'active' );
    }


    if ( !props.modalShow ) return ( <div></div> );

    if ( product.variants ) {
        maxPrice = getPrice( product.variants );
        minPrice = getPrice( product.variants, 'min' );
    }

    return (
        <Modal
            isOpen={ props.modalShow }
            onRequestClose={ closeModal }
            shouldFocusAfterRender={ false }
            className="product-single-container product-single-default product-quick-view container"
            style={ customStyles }
            overlayClassName="quickview-modal-overlay"
            closeTimeoutMS={ 100 }
            onAfterOpen={ afterOpenModal }
        >
            <div className="row row-sparse skeleton-body skel-shop-products custom-scrollbar" style={ { overflowY: 'auto' } }>
                <div className="col-md-6 product-single-gallery">
                    <div className="skel-pro skel-magnifier"></div>
                    <div className="product-slider-container">
                        <Carousel addClass="product-single-carousel">
                            {
                                product.pictures ?
                                    product.pictures.map( ( gallery, index ) => (
                                        <div className="product-item" key={ "product-item" + index }>
                                            <Magnifier
                                                imageSrc={ gallery }
                                                imageAlt="product"
                                                mouseActivation="hover"
                                                cursorStyleActive="crosshair"
                                                dragToMove={ false }
                                                className="product-single-image"
                                            />
                                        </div>
                                    ) )
                                    : ""
                            }
                        </Carousel>
                    </div>
                    <div className="prod-thumbnail owl-dots">
                        {
                            product.pictures ?
                                product.pictures.map( ( gallery, index ) => (
                                    <div className="col-3 owl-dot" key={ "prod-nav" + index }>
                                        <img src={ gallery } alt="product" onClick={ thumbActiveHandler } />
                                    </div>
                                ) )
                                : ""
                        }
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="skel-pro skel-detail"></div>
                    <div className=" product-single-details">
                        <h1 className="product-title mt-1">{ product.name }</h1>

                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                            </div>

                            <Link to="#" className="rating-link">{ `( ${ product.rating } Reviews )` }</Link>
                        </div>

                        {
                            product.variants ?
                                <div className="price-box">
                                    <span className="product-price">${ minPrice.toFixed( 2 ) } - ${ maxPrice.toFixed( 2 ) }</span>
                                </div>
                                :
                                product.salePrice ?
                                    <div className="price-box">
                                        <span className="old-price">${ product.price.toFixed( 2 ) }</span>
                                        <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                                    </div>
                                    :
                                    <div className="price-box">
                                        <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                                    </div>
                        }

                        <div className="product-desc">
                            <p>{ product.description }</p>
                        </div>

                        {
                            product.variants ?
                                <div className="product-filters-container">
                                    {
                                        product.variants.map( ( variant, index ) => (
                                            <div className="product-single-filter pb-0" key={ "varient" + index }>
                                                <label>{ variant.name }:</label>
                                                {
                                                    variant.name === "size" ?
                                                        <ul className="config-size-list">
                                                            {
                                                                variant.type.map( ( item, i ) => (
                                                                    <li className={ i === 0 ? "active" : "" } key={ "size" + i } >
                                                                        <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] }>{ item.size }</Link>
                                                                    </li>
                                                                ) )
                                                            }
                                                        </ul>
                                                        : <ul className="config-swatch-list">
                                                            {
                                                                variant.type.map( ( item, i ) => (
                                                                    <li className={ i === 0 ? "active" : "" } key={ "color" + i } >
                                                                        {
                                                                            item.color ?
                                                                                <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] } style={ { backgroundColor: item.color } }></Link>
                                                                                : <Link to="#" data-src={ item.pictures[ 0 ] } onClick={ selectGroup } style={ { backgroundImage: `url(${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] })` } }></Link>
                                                                        }
                                                                    </li>
                                                                ) )
                                                            }
                                                        </ul>
                                                }
                                            </div>
                                        ) )
                                    }
                                </div>
                                : ""
                        }

                        <hr className="divider" />
                        {auction ? null : 
                        
                        <div className="product-action mt-0">
                            <Qty stock={ product.stock } />

                            <Link to="#" className="btn btn-dark add-cart" title="Add to Cart" onClick={ addToCart }>
                                <span>Add to Cart</span>
                            </Link>
                        </div>
                        
                        }


                        <hr className="divider" />

                        <div className="product-single-share">
                            <label className="sr-only">Share:</label>

                            <div className="addthis_inline_share_toolbox"></div>

                            <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `paction add-wishlist ${ isInWishlist === true ? 'checked' : '' }` } title={ isInWishlist ? 'Go To Wishlist' : 'Add To Wishlist' } onClick={ onWithWishClick }>
                                <span>{ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' }</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal } >×</button>
        </Modal >
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        product: state.data.single ? state.data.single : [],
        modalShow: state.data.quickShow ? state.data.quickShow : false,
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default connect( mapStateToProps, { quickAddToCart, addToWishList, hideQuickView, addToCompare } )( QuickModal );