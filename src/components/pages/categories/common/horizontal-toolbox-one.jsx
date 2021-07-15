import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterSort } from '../../../../action';

function HorizontalToolBoxOne( props ) {
    let layoutParam = "grid";
    const [ layout, setLayout ] = useState( layoutParam );
    const { changeDisplay } = props;

    if ( props.init ) {
        layoutParam = props.init;
    }
    const changeLayout = ( e ) => {
        e.preventDefault();
        props.gridType( e.currentTarget.getAttribute( "title" ) );
        setLayout( e.currentTarget.getAttribute( "title" ) );
    }

    const toggleFilter = ( e ) => {
        e.preventDefault();

        document.querySelector( '.main' ).classList.toggle( 'sidebar-opened' );
        document.querySelector( '.filter-toggle' ).classList.toggle( 'opened' );

        if ( document.querySelector( '.main' ).classList.contains( 'sidebar-opened' ) ) {
            setTimeout( () => {
                document.querySelector( '.main-content-wrap' ).style.overflow = "unset";
            }, 150 );
        } else {
            document.querySelector( '.main-content-wrap' ).style.overflow = "hidden";
        }

    }

    return (
        <nav className="toolbox horizontal-filter">
            <div className="toolbox-left d-none d-lg-block">
                <div className="toolbox-item filter-toggle">
                    <span>Filters:</span>
                    <Link to="#" onClick={ toggleFilter }></Link>
                </div>
            </div>

            <div className="toolbox-item toolbox-sort ml-lg-auto">
                <div className="select-custom">
                    <select name="orderby" className="form-control" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                        <option value="menu_order">Default sorting</option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by newness</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                    </select>
                </div>

                <Link to="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></Link>
            </div>

            <div className="toolbox-item toolbox-show ml-auto ml-lg-0">
                <label>Show:</label>

                <div className="select-custom">
                    <select name="count" className="form-control" onChange={ e => changeDisplay( e.currentTarget.value ) } value={ props.displayCount }>
                        <option value={ 12 }>12</option>
                        <option value={ 24 }>24</option>
                        <option value={ 36 }>36</option>
                    </select>
                </div>
            </div>

            <div className="toolbox-item layout-modes">
                <Link to="#" className={ `layout-btn btn-grid ${ layout === "grid" ? "active" : "" }` } title="grid" onClick={ changeLayout }>
                    <i className="icon-mode-grid"></i>
                </Link>
                <Link to="#" className={ `layout-btn btn-list ${ layout === "list" ? "active" : "" }` } title="list" onClick={ changeLayout }>
                    <i className="icon-mode-list"></i>
                </Link>
            </div>
        </nav>
    )
}

export default connect( null, { filterSort } )( HorizontalToolBoxOne );
