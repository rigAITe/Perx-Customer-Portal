import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import GridProduct from './common/grid-product';
import ShopSidebar from './common/shop-sidebar';
import ToolBox from './common/tool-box';
import Pagination from '../../features/pagination';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';
import Carousel from '../../features/carousel';

function BoxedSlide( props ) {
    const [ curPage, setCurPage ] = useState( 1 );
    const [ layout, setLayout ] = useState( "grid" );
    const [ productCount, setProductCount ] = useState( 0 );
    const [ displayCount, setDisplayCount ] = useState( 12 );

    useEffect( () => {
        let imgLoad = imagesLoaded( ".product-group" );

        if ( document.querySelector( '.skeleton-body' ) ) {
            document.querySelector( '.skeleton-body' ).classList.remove( 'loaded' );
            imgLoad.on( "done", function () {
                document.querySelector( '.skeleton-body' ) && document.querySelector( '.skeleton-body' ).classList.add( 'loaded' );
            } )
        }
    } )

    const gridType = ( layoutParam ) => {
        if ( layout !== layoutParam ) {
            setLayout( layoutParam );
        }
    }

    const onChangeProductCount = ( countParam ) => {
        if ( productCount !== countParam )
            setProductCount( countParam );
    }

    const onChangeCurPage = ( curPageParam ) => {
        if ( curPage !== curPageParam ) {
            setCurPage( curPageParam );
        }
    }

    const onChangeDisplayCount = ( countParam ) => {
        if ( displayCount !== countParam ) {
            setDisplayCount( countParam );
        }
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Category Boxed Slide</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Category Page</h1>

            <div className="main">
                <Breadcrumb current="Boxed Slide" path="categories" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 skeleton-body skel-shop-products">
                            <Carousel addClass="boxed-slider owl-carousel-lazy owl-theme-light" settings={ { dots: false } } >
                                <img className="slide-bg owl-lazy" data-src={ `${ process.env.PUBLIC_URL }/assets/images/demo/banners/banner-fashion-1.jpg` } alt="banner" width="870" height="300" />
                                <img className="slide-bg owl-lazy" data-src={ `${ process.env.PUBLIC_URL }/assets/images/demo/banners/banner-fashion-2.jpg` } alt="banner" width="870" height="300" />
                            </Carousel>

                            <ToolBox addClass="pt-4" gridType={ gridType } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } />
                            <GridProduct curPage={ curPage }
                                type={ layout }
                                productCount={ onChangeProductCount }
                                displayCount={ displayCount }
                            />
                            <Pagination count={ productCount } curPage={ onChangeCurPage } layout={ layout } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } filters={ props.filter } />
                        </div>
                        <SidebarToggle />
                        <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                            <ShopSidebar />
                        </aside>
                    </div>
                </div>
                <div className="mb-5"></div>
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => (
    {
        filter: state.filter ? state.filter : []
    }
)

export default connect( mapStateToProps, {} )( BoxedSlide );