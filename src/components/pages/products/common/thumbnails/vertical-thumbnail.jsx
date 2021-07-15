import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Magnifier } from "react-image-magnifiers";
import StickyBox from 'react-sticky-box';

import Carousel from '../../../../features/carousel';

import { stickyContentHandle, setStickyValues } from '../../../../../utils';

function VerticalThumbnail( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product } = props;
    const images = product.pictures;

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    useEffect( () => {
        if ( document.querySelector( '.product-single-carousel .owl-nav' ) && !document.querySelector( '.product-single-carousel .owl-nav' ).classList.contains( 'disabled' ) ) {
            document.querySelector( '.product-single-carousel .owl-nav' ).classList.add( 'd-none' )
        }
    } )

    const openLightBox = () => {
        if ( document.querySelector( '.product-single-carousel' ) ) {
            let productCarousel = document.querySelector( '.product-single-carousel' );
            let productItem = productCarousel.querySelector( '.active' );
            let index = productItem.querySelector( ".image-item" ).getAttribute( 'index' );

            if ( !index ) {
                index = 0;
            }

            setOpen( true );
            setPindex( index );
        }
    }

    const moveToPrev = () => {
        if ( images.length !== 1 ) {
            setPindex( ( photoIndex + images.length - 1 ) % images.length );
        }
    }

    const moveToNext = () => {
        if ( images.length !== 1 ) {
            setPindex( ( photoIndex + 1 ) % images.length );
        }
    }

    return (
        <div className={ `product-single-gallery ${ addClass }` }>
            <StickyBox className="sticky-slider">
                <div className="skel-pro skel-magnifier skel-full"></div>
                <div className="product-slider-container product-item">

                    <Carousel addClass="product-single-carousel">
                        {
                            product.pictures ?
                                product.pictures.map( ( gallery, index ) => (
                                    <div className="product-item image-item" key={ "mag-image" + index } index={ index }>
                                        <Magnifier
                                            imageSrc={ `${ process.env.PUBLIC_URL }/${ gallery }` }
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

                    <span className="prod-full-screen" onClick={ openLightBox }>
                        <i className="icon-plus"></i>
                    </span>
                </div>
                <div className="prod-thumbnail row owl-dots transparent-dots flex-column" id='carousel-quick-dots'>
                    {
                        product.pictures ?
                            product.pictures.map( ( gallery, index ) => (
                                <div className="owl-dot" key={ "prod-nav" + index }>
                                    <img src={ `${ process.env.PUBLIC_URL }/${ gallery }` } alt="product" />
                                </div>
                            ) )
                            : ""
                    }
                </div>
            </StickyBox>

            {
                open && (
                    <Lightbox
                        mainSrc={ images[ photoIndex ] }
                        nextSrc={ images[ ( photoIndex + 1 ) % images.length ] }
                        prevSrc={ images[ ( photoIndex + images.length - 1 ) % images.length ] }
                        onCloseRequest={ () => setOpen( false ) }
                        onMovePrevRequest={ moveToPrev }
                        onMoveNextRequest={ moveToNext }
                    />
                )
            }
        </div >
    )
}

export default VerticalThumbnail;