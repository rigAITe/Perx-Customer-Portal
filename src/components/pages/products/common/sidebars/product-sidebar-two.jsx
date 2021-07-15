import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlideToggle } from 'react-slide-toggle';
import StickyBox from 'react-sticky-box';
import { connect } from 'react-redux';

import WidgetBanner from '../../../../features/banner/widget-banner';
import FeaturedProductsTwo from '../product-groups/featured-products-two';

import { stickyContentHandle, setStickyValues } from '../../../../../utils';
import { filterCategories } from '../../../../../action';

import _filter from '../../../../../mock-data/filter.json';

function ProductSidebarTwo( props ) {
    const { addClass, filterCategories } = props;

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    return (
        <aside className={ `sidebar-product col-lg-3 mobile-sidebar ${ addClass }` }>
            <StickyBox className="sticky-sidebar">
                <div className="sidebar-wrapper">
                    <SlideToggle>
                        {
                            ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <div className="widget widget-collapse">
                                    <h3 className="widget-title">
                                        <Link data-toggle="collapse" to="#" onClick={ onToggle } className={ toggleState.toLowerCase() }>categories</Link>
                                    </h3>

                                    <div className="collapse show" ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                        <div className="widget-body">
                                            <ul className="cat-list">
                                                {
                                                    _filter.categories.map( ( item, index ) => (
                                                        <li key={ "filter" + index } className={ props.filter.category === item ? 'active' : '' }>
                                                            <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } onClick={ ( e ) => { filterCategories( item ); } }>{ item }</Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </SlideToggle>

                    <WidgetBanner src="assets/images/demo/banners/banner-sidebar.jpg" />

                    <FeaturedProductsTwo />
                </div>
            </StickyBox>
        </aside>
    )
}

const mapStateToProps = ( state ) => {
    return {
        filter: state.filter ? state.filter : []
    }
}

export default connect( mapStateToProps, { filterCategories } )( ProductSidebarTwo );