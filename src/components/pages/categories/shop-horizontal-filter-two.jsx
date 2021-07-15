import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import GridProduct from './common/grid-product';
import HorizontalToolBoxTwo from './common/horizontal-toolbox-two';
import Pagination from '../../features/pagination';
import ShopSidebar from './common/shop-sidebar';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';

function HorizontalFilterTwo( props ) {
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
                <title>Porto React Ecommerce - Category Horizontal Filter 2</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Category Page</h1>

            <div className="main">
                <div className="category-banner-container bg-gray">
                    <TopBanner />
                </div>
                <Breadcrumb current="Filter Two" path="categories" />
                <div className="container products-body skeleton-body skel-shop-products">
                    <HorizontalToolBoxTwo gridType={ gridType } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } />
                    <GridProduct curPage={ curPage }
                        type={ layout }
                        productCount={ onChangeProductCount }
                        displayCount={ displayCount }
                        cols={ 4 }
                    />
                    <Pagination count={ productCount } curPage={ onChangeCurPage } layout={ layout } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } filters={ props.filter } />
                    <SidebarToggle />
                    <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar d-block d-lg-none">
                        <ShopSidebar link="filterTwo" />
                    </aside>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => (
    {
        filter: state.filter ? state.filter : []
    }
)

export default connect( mapStateToProps, {} )( HorizontalFilterTwo );