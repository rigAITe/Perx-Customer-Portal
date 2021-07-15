import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { Magnifier } from "react-image-magnifiers";

function InfoThumbnail( props ) {
    const [ photoIndex, setPindex ] = useState( 0 );
    const [ open, setOpen ] = useState( false );
    const { addClass = '', product } = props;
    const images = product.pictures;

    const openLightBox = ( index ) => {
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
        <div className={ `product-single-gallery mb-0 ${ addClass }` }>
            <div className="skel-pro skel-magnifier-both"></div>
            <div className="product-info-gallery">
                {
                    images ?
                        images.map( ( gallery, index ) => (
                            <div className="product-item" key={ "prod-image" + index }>
                                <div className="inner">
                                    <Magnifier
                                        imageSrc={ `${ process.env.PUBLIC_URL }/${ gallery }` }
                                        imageAlt="product"
                                        mouseActivation="hover"
                                        cursorStyleActive="crosshair"
                                        dragToMove={ false }
                                        className="product-single-image"
                                    />
                                    <span className="prod-full-screen" onClick={ () => openLightBox( index ) }>
                                        <i className="icon-plus"></i>
                                    </span>
                                </div>
                            </div>
                        ) )
                        : ""
                }
            </div>

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

export default InfoThumbnail;