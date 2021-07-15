export const owlSetting1 = {
    margin: 20,
    items: 2,
    autoplayTimeout: 5000,
    loop: false,
    responsive: {
        559: {
            items: 3
        },
        975: {
            items: 4
        }
    }
};

export const owlSetting2 = {
    loop: false,
    margin: 11,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
}

export const owlSettingShop = {
    loop: false,
    margin: 11,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
}

export const owlSetting3 = {
    margin: 30,
    autoplay: false,
    responsive: {
        0: {
            items: 2,
            margin: 20
        },
        992: {
            items: 3,
            margin: 20
        },
        1200: {
            items: 4
        }
    }
}

export const owlSetting4 = {
    nav: true,
    dots: false,
    loop: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ]
}

export const owlSetting5 = {
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1220: {
            items: 5
        }
    }
}

export const owlSetting6 = {
    loop: false,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 2
        },
        570: {
            items: 2
        },
        830: {
            items: 3
        },
        1220: {
            items: 4
        }
    }
}

export const owlSetting7 = {
    loop: false,
    margin: 20,
    autoplay: false,
    dots: false,
    items: 2,
    responsive: {
        576: {
            items: 4
        },
        768: {
            items: 6
        }
    }
}

export const owlSetting8 = {
    loop: false,
    nav: false,
    dots: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        570: {
            items: 2
        },
        830: {
            items: 3
        }
    }
}

export const testimonial = {
    lazyLoad: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        }
    }
};

export const blogSlider = {
    loop: false,
    margin: 30,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export const featured_products = {
    loop: false,
    margin: 30,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
}

export let extraSetting1 = {
    lazyLoad: true,
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: false
}

export let extraSetting2 = {
    margin: 2,
    lazyLoad: true,
}

export let extraSetting3 = {
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    autoplay: false,
    dots: false,
    startPosition: 0
}

export let extraSetting4 = {
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: false,
    autoplay: false,
    startPosition: 0
}

export let extraSetting5 = {
    dots: false,
    autoplay: false,
    center: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export let extraSetting6 = {
    dots: false,
    autoplay: false,
    center: true,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export const sliderDefaultOptions = {
    loop: false,
    margin: 0,
    responsiveClass: "true",
    nav: false,
    navText: [ '<i class="icon-left-open-big">', '<i class="icon-right-open-big">' ],
    dots: true,
    items: 1,
    lazyLoad: true
};

export const events = {
    onLoadedLazy: function ( e ) {
        if ( !e.target ) return;
        if ( e.target.closest( '.home-slider' ) ) {
            e.target.closest( '.home-slider' ).classList.add( 'loaded' );
            if ( e.target.closest( '.home-slider' ).querySelector( ".home-slide" ) ) {
                let slides = document.querySelectorAll( ".home-slider .home-slide" );
                for ( let i = 0; i < slides.length; i++ ) {
                    slides[ i ].classList.add( 'loaded' );
                }
            }
        }
        if ( e.target.closest( '.boxed-slider' ) ) {
            e.target.closest( '.boxed-slider' ).classList.add( 'loaded' );
        }
        if ( e.target.closest( '.about-slider' ) ) {
            let slides = document.querySelectorAll( ".about-slider .about-slider-item" );
            for ( let i = 0; i < slides.length; i++ ) {
                slides[ i ].classList.add( 'loaded' );
            }
        }
    },
    onTranslate: function ( e ) {
        if ( !e.target ) return;
        if ( e.target.closest( ".home-slider" ) ) {
            let homeSliderSidebar = document.querySelector( ".home-slider-sidebar ul" );
            if ( homeSliderSidebar ) {
                homeSliderSidebar.querySelector( ".active" ).classList.remove( "active" );
                homeSliderSidebar.querySelector( 'li:nth-child(' + ( ( e.item.index + 1 ) % 3 + 1 ) + ')' ).classList.add( "active" );
            }
            if ( e.target.closest( ".home-thumb" ) ) {
                document.querySelector( ".home-slider-thumbs" ).querySelector( ".active" ).classList.remove( "active" );
                document.querySelector( ".home-slider-thumbs" ).children[ ( e.item.index % 2 ) ].classList.add( "active" );
            }
        }

        let parent = e.target.closest( ".product-single-default .product-single-gallery" );
        if ( parent ) {
            parent.querySelector( ".prod-thumbnail.owl-dots" ).querySelector( ".active" ).classList.remove( "active" );
            parent.querySelector( ".prod-thumbnail.owl-dots" ).children[ e.item.index ].classList.add( "active" );
        }
    },
    onTranslated: function ( e ) {
        if ( !e.target ) return;
        if ( e.target.closest( ".center-visible" ) ) {
            let self = e.target.closest( ".center-visible" );
            let owl_item = self.querySelectorAll( ".owl-stage .active img" );
            let owl_center = Math.floor( owl_item.length / 2 );
            if ( self.querySelector( ".center" ) )
                self.querySelector( ".center" ).classList.remove( 'center' );
            if ( owl_item[ owl_center ] )
                owl_item[ owl_center ].classList.add( 'center' );
        }
    },
    onResized: function ( e ) {
        if ( !e.target ) return;
        if ( e.target.closest( '.center-visible' ) ) {
            let self = e.target.closest( ".center-visible" );
            let owl_item = self.querySelectorAll( ".owl-stage .active img" );
            let owl_center = Math.floor( owl_item.length / 2 );
            if ( self.querySelector( ".center" ) )
                self.querySelector( ".center" ).classList.remove( 'center' );
            owl_item[ owl_center ].classList.add( 'center' );
        }
    }
};