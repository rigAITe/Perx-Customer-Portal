import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Breadcrumb from '../../common/breadcrumb';
import TopBanner from '../../features/banner/top-banner';
import InfiniteProduct from './common/infinite-product';
import ShopSidebar from './common/shop-sidebar';
import ToolBox from './common/tool-box';
import SidebarToggle from '../products/common/sidebars/sidebar-toggle';

function InfiniteScroll( props ) {
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

    const onChangeDisplayCount = ( countParam ) => {
        if ( displayCount !== countParam ) {
            setDisplayCount( countParam );
        }
    }

    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - Category Infinite Scroll</title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - Product Category Page</h1>

            <div className="main">
                <div className="category-banner-container bg-gray">
                    <TopBanner />
                </div>
                <Breadcrumb current="Infinite Scroll" path="categories" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 skeleton-body skel-shop-products">
                            <ToolBox gridType={ gridType } changeDisplay={ onChangeDisplayCount } displayCount={ displayCount } />
                            <InfiniteProduct
                                displayCount={ displayCount }
                                type={ layout }
                                productCount={ onChangeProductCount }
                            />
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

export default connect( mapStateToProps, {} )( InfiniteScroll );