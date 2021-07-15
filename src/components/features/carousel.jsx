import React, { useEffect, useRef } from 'react';
import imagesLoaded from 'imagesloaded';
import isotope from 'isotope-layout';
import OwlCarousel from 'react-owl-carousel2';

//Import Utils
import { isotopeLoad } from "../../utils";

//Import Settings
import {
    sliderDefaultOptions,
    extraSetting1,
    extraSetting2,
    extraSetting3,
    extraSetting4,
    extraSetting5,
    extraSetting6,
    events
} from "../../utils/settings";

function Carousel( props ) {
    const { addClass, settings = '', isTheme = true } = props;
    const carouselRef = useRef( null );
    let options = getOption( settings, addClass );
    let res = Object.assign( {}, sliderDefaultOptions, options );

    useEffect( () => {
        if ( carouselRef.current ) {
            init();
            if ( carouselRef.current.$node.closest( ".grid" ) ) {
                isotopeLoad( isotope, imagesLoaded );
            }
        }
    } )

    useEffect( () => {
        if ( carouselRef.current && carouselRef.current.props.className.indexOf( 'product-single-carousel' ) > -1 ) {
            let dots;
            let carousel = carouselRef.current;
            let parent = carousel.$node.closest( '.product-single-gallery' )[ 0 ];

            if ( parent.querySelector( ".prod-thumbnail.owl-dots .owl-dot" ) ) {
                if ( parent.querySelector( ".prod-thumbnail.owl-dots .owl-dot.active" ) ) {
                    parent.querySelector( ".prod-thumbnail.owl-dots .owl-dot.active" ).classList.remove( "active" );
                }

                parent.querySelector( ".prod-thumbnail.owl-dots .owl-dot" ).classList.add( "active" );
                carousel.goTo( 0 );
                dots = parent.querySelectorAll( '.prod-thumbnail.owl-dots .owl-dot' );

                for ( let i = 0; i < dots.length; i++ ) {
                    dots[ i ].addEventListener( "click", ( e ) => {
                        carousel.goTo( e.currentTarget.index() );
                    }, true );
                }
            }
        }
    }, [ window.location.pathname ] )

    const init = () => {
        let homeSliderSidebar = document.querySelector( '.home-slider-sidebar ul' );
        if ( homeSliderSidebar ) {
            let items = document.querySelectorAll( ".home-slider-sidebar li" );
            let carousel = carouselRef.current;
            for ( let i = 0; i < items.length; i++ ) {
                items[ i ].addEventListener( "click", ( e ) => {
                    if ( !e.currentTarget.classList.contains( 'active' ) ) {
                        carousel.goTo( e.currentTarget.index() );
                    }
                }, true );
            }
        }

        if ( carouselRef.current.props.className.indexOf( 'home-slider' ) > -1 && document.querySelector( ".home-slider-thumbs" ) ) {
            let items = document.querySelectorAll( '.home-slider-thumbs a' );
            let carousel = carouselRef.current;
            for ( let i = 0; i < items.length; i++ ) {
                items[ i ].addEventListener( "click", ( e ) => {
                    let self = e.currentTarget;
                    if ( !self.classList.contains( 'active' ) ) {
                        let index = self.index();
                        carousel.goTo( index );
                    }
                    e.preventDefault();
                }, true );
            }
        }
    }

    function getOption( settings, addClass = '' ) {
        let options = settings;
        if ( addClass.indexOf( 'widget-featured-products' ) > -1 ) {
            options = extraSetting1;
        }
        if ( addClass.indexOf( 'entry-slider' ) > -1 ) {
            options = extraSetting2;
        }
        if ( addClass.indexOf( 'product-single-carousel' ) > -1 ) {
            options = extraSetting4;
        }
        if ( addClass.indexOf( 'product-quick-carousel' ) > -1 ) {
            options = extraSetting3;
        }
        if ( addClass.indexOf( 'pro-extended' ) > -1 ) {
            options = extraSetting5;
        }
        if ( addClass.indexOf( 'custom-extended' ) > -1 ) {
            options = extraSetting6;
        }
        return options;
    }

    return (
        ( props.children.length > 0 || ( props.children && props.children.length === undefined ) ) ?
            <OwlCarousel ref={ carouselRef } className={ `owl-carousel ${ isTheme ? 'owl-theme' : '' } ${ addClass }` } options={ res } events={ events }>
                { props.children }
            </OwlCarousel>
            : ""
    );
}

function areEqual( prevProps, nextProps ) {
    if ( window.location.href.indexOf( "products/extended/" ) > -1 ) {
        if ( prevProps.id !== nextProps.id ) {
            return false;
        }

        return true;
    }

    return false;
}

export default React.memo( Carousel, areEqual );