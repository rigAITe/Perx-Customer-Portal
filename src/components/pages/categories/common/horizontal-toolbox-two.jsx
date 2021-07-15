import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterSort, filterSize, filterColor, filterPrice } from '../../../../action';
import _filter from '../../../../mock-data/filter.json';

function HorizontalToolBoxTwo( props ) {
    let layoutParam = "grid";
    const { filterSize, filterColor } = props;
    const [ layout, setLayout ] = useState( layoutParam );
    const { changeDisplay } = props;

    if ( props.init ) {
        layoutParam = props.init;
    }

    function changeLayout( e ) {
        e.preventDefault();
        props.gridType( e.currentTarget.getAttribute( "title" ) );
        setLayout( e.currentTarget.getAttribute( "title" ) );
    }

    useEffect( () => {
        document.addEventListener( "click", documentClick );
        let size = document.querySelectorAll( ".size li" );
        for ( let i = 0; i < size.length; i++ ) {
            size[ i ].addEventListener( "click", size );
        }
        let color = document.querySelectorAll( ".color li" );
        for ( let i = 0; i < color.length; i++ ) {
            color[ i ].addEventListener( "click", color );
        }
        return () => {
            document.removeEventListener( "click", documentClick );
        }
    } )

    const documentClick = ( e ) => {
        if ( !e.target.closest( '.toolbox-item.select-custom' ) )
            if ( document.querySelector( '.select-custom.opened' ) )
                document.querySelector( '.select-custom.opened' ).classList.remove( 'opened' );
    }

    const sortMenu = ( e ) => {
        e.preventDefault();
        if ( document.querySelector( '.select-custom.opened' ) )
            document.querySelector( '.select-custom.opened' ).classList.remove( 'opened' );
        e.currentTarget.parentElement.classList.toggle( 'opened' );
    }

    function price( e ) {
        e.preventDefault();
        let min = parseInt( document.querySelector( ".min.input-price" ).value );
        let max = parseInt( document.querySelector( ".max.input-price" ).value );
        if ( !( min >= 0 && min <= 1000 ) )
            min = 0;
        if ( !( max >= 0 && max <= 1000 && max >= min ) )
            max = 1000;
        props.filterPrice( { max: max, min: min } );
    }

    return (
        <nav className="toolbox horizontal-filter filter-sorts">

            <div className="toolbox-left sidebar-shop mobile-sidebar">
                <div className="toolbox-item toolbox-sort select-custom">
                    <Link className="sort-menu-trigger" to="#" onClick={ sortMenu }>Size</Link>
                    <ul className="sort-list">
                        {
                            _filter.Size.map( ( item, index ) => (
                                <li key={ "size" + index } className={ props.filter.size.indexOf( item ) >= 0 ? 'active' : '' }>
                                    <Link to="#" onClick={ ( e ) => { e.preventDefault(); e.currentTarget.parentElement.classList.toggle( "active" ); filterSize( item ) } }>{ item }</Link>
                                </li>
                            ) )
                        }
                    </ul>
                </div>

                <div className="toolbox-item toolbox-sort select-custom">
                    <Link className="sort-menu-trigger" to="#" onClick={ sortMenu }>Color</Link>
                    <ul className="sort-list">
                        {
                            _filter.Colors.map( ( item, index ) => (
                                <li key={ "color" + index } onClick={ ( e ) => { e.preventDefault(); filterColor( item.value ) } } className={ props.filter.color.indexOf( item.value ) >= 0 ? 'active' : '' }>
                                    { item.name }
                                </li>
                            ) )
                        }
                    </ul>
                </div>

                <div className="toolbox-item toolbox-sort price-sort select-custom">
                    <Link className="sort-menu-trigger" to="#" onClick={ sortMenu }>Price</Link>
                    <div className="sort-list">
                        <form className="filter-price-form d-flex align-items-center m-0">
                            <input className="min input-price mr-2" name="min_price" placeholder={ props.filter.value.min } /> -
                            <input className="max input-price mx-2" name="max_price" placeholder={ props.filter.value.max } />
                            <button type="submit" className="btn btn-primary ml-3" onClick={ price }>Filter</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="toolbox-item toolbox-sort select-custom">
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
            </div>

            <div className="toolbox-item toolbox-show ml-auto">
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

const mapStateToProps = ( state ) => {
    return {
        filter: state.filter ? state.filter : []
    }
}

export default connect( mapStateToProps, { filterSort, filterSize, filterColor, filterPrice } )( HorizontalToolBoxTwo );