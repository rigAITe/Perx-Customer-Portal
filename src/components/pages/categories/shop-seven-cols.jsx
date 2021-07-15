import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import GridProduct from './common/grid-product';
import ToolBox from './common/tool-box';
import Pagination from '../../features/pagination';
import ShopSidebar from './common/shop-sidebar';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';

function SevenCols( props ) {
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
                <title>Porto React Ecommerce - Category Seven Cols</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Category Page</h1>

            <div className="main">
                <div className="category-banner-container bg-gray">
                    <TopBanner />
                </div>
                <Breadcrumb current="Seven Cols" path="categories" />
                <div className="container skeleton-body skel-shop-products">
                    <ToolBox gridType={ gridType } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } />
                    <GridProduct curPage={ curPage }
                        type={ layout }
                        productCount={ onChangeProductCount }
                        displayCount={ displayCount }
                        cols={ 7 }
                    />
                    <Pagination count={ productCount } curPage={ onChangeCurPage } layout={ layout } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } filters={ props.filter } />
                    <SidebarToggle />
                    <aside className="sidebar-shop col-lg-3 col-xl-2 order-lg-first mobile-sidebar d-lg-none">
                        <ShopSidebar />
                    </aside>
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

export default connect( mapStateToProps, {} )( SevenCols );