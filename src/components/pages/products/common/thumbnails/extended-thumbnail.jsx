import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import Carousel from '../../../../features/carousel';

function ExtendedThumbnail( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product } = props;
    const images = product.pictures;

    const openLightBox = () => {
        let productCarousel = document.querySelector( '.product-single-carousel' );
        let productItem = productCarousel.querySelector( '.center' );
        let index = productItem.querySelector( ".image-item" ).getAttribute( 'index' );

        if ( !index ) {
            index = 0;
        }

        setOpen( true );
        setPindex( index );
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
        <div className={ `product-single-gallery product-item ${ addClass }` }>
            <div className="skel-pro skel-magnifier-extended"></div>
            <Carousel addClass={ `product-single-carousel owl-nav-simple ${ images.length > 3 ? 'pro-extended' : 'custom-extended' }` } isTheme={ false } id={ product.id }>
                {
                    images ?
                        images.map( ( gallery, index ) => (
                            <img className="product-single-image image-item" src={ `${ process.env.PUBLIC_URL }/${ gallery }` } alt="product" key={ "prod-image" + index } index={ index } />
                        ) )
                        : ""
                }
            </Carousel>

            <span className="prod-full-screen" onClick={ openLightBox }>
                <i className="icon-plus"></i>
            </span>

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
        </div>
    )
}

export default ExtendedThumbnail;