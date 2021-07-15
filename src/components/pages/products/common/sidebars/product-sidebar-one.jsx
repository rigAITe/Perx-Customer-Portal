import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box'

import WidgetBanner from '../../../../features/banner/widget-banner';
import FeaturedProductsTwo from '../product-groups/featured-products-two';
import { stickyContentHandle, setStickyValues } from '../../../../../utils';

function ProductSidebarOne() {
    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    return (
        <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
            <StickyBox className="sticky-sidebar" offsetTop={ 20 }>
                <div className="sidebar-wrapper">
                    <div className="widget widget-info">
                        <ul>
                            <li className="mt-0">
                                <i className="icon-shipping"></i>
                                <h4>FREE<br />SHIPPING</h4>
                            </li>
                            <li>
                                <i className="icon-us-dollar"></i>
                                <h4>100% MONEY<br />BACK GUARANTEE</h4>
                            </li>
                            <li>
                                <i className="icon-online-support"></i>
                                <h4>ONLINE<br />SUPPORT 24/7</h4>
                            </li>
                        </ul>
                    </div>

                    <WidgetBanner src="assets/images/demo/banners/banner-sidebar.jpg" />

                    <FeaturedProductsTwo />
                </div>
            </StickyBox>
        </aside>
    )
}


export default React.memo( ProductSidebarOne );