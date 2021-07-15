import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import GridProduct from './common/grid-product';
import ShopSidebar from './common/shop-sidebar';
import HorizontalToolBoxOne from './common/horizontal-toolbox-one';
import Pagination from '../../features/pagination';

function HorizontalFilterOne( props ) {
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

    const sidebarToggle = ( e ) => {
        document.querySelector( '.main' ).classList.toggle( 'sidebar-opened' );

        if ( document.querySelector( '.main' ).classList.contains( 'sidebar-opened' ) ) {
            document.querySelector( '.filter-toggle' ).classList.add( 'opened' );
        } else {
            document.querySelector( '.filter-toggle' ).classList.remove( 'opened' );
        }
    }

    const sidebarOverlay = ( e ) => {
        document.querySelector( '.main' ).classList.toggle( 'sidebar-opened' );
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Category Horizontal Filter 1</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Category Page</h1>

            <div className="main">
                <div className="category-banner-container bg-gray">
                    <TopBanner />
                </div>
                <Breadcrumb current="Filter One" path="categories" />
                <div className="container">
                    <HorizontalToolBoxOne gridType={ gridType } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } />
                    <div className="row main-content-wrap">
                        <div className="col-lg-9 main-content skeleton-body skel-shop-products">
                            <GridProduct curPage={ curPage }
                                type={ layout }
                                productCount={ onChangeProductCount }
                                displayCount={ displayCount }
                                cols={ 4 }
                            />
                            <Pagination count={ productCount } curPage={ onChangeCurPage } layout={ layout } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } filters={ props.filter } />
                        </div>
                        <div>
                            <div className="sidebar-overlay" onClick={ sidebarOverlay }></div>
                            <div className="sidebar-toggle" onClick={ sidebarToggle }><i className="fas fa-sliders-h"></i></div>
                        </div>
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

export default connect( mapStateToProps, {} )( HorizontalFilterOne );