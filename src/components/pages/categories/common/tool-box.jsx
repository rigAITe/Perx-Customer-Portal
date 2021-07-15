import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterSort } from '../../../../action';

function ToolBox( props ) {
    let layoutParam = props.init ? props.init : "grid";
    const [ layout, setLayout ] = useState( layoutParam );
    const { addClass = "", changeDisplay } = props;

    function changeLayout( e ) {
        e.preventDefault();
        props.gridType( e.currentTarget.getAttribute( "title" ) );
        setLayout( e.currentTarget.getAttribute( "title" ) );
    }

    return (
        <nav className={ "toolbox " + addClass }>
            <div className="toolbox-left">
                <div className="toolbox-item toolbox-sort">
                    <label>Delivery Type:</label>

                    <div className="select-custom">
                        <select name="orderby" className="form-control" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                            <option value="menu_order">Delivery & Pickup</option>
                            <option value="popularity">Delivery</option>
                            <option value="rating">Pickup</option>
                            {/* <option value="date">Sort by newness</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option> */}
                        </select>
                    </div>
                </div>
            </div>
            <div className="toolbox-right">
                {/* <div className="toolbox-item toolbox-show">
                    <label>Show:</label>

                    <div className="select-custom">
                        <select name="count" className="form-control" onChange={ e => changeDisplay( e.currentTarget.value ) } value={ props.displayCount }>
                            <option value={ 12 }>12</option>
                            <option value={ 24 }>24</option>
                            <option value={ 36 }>36</option>
                        </select>
                    </div>
                </div> */}

                <div className="toolbox-item layout-modes">
                    <Link to="#" className={ `layout-btn btn-grid ${ layout === "grid" ? "active" : "" }` } title="grid" onClick={ changeLayout }>
                        <i className="icon-mode-grid"></i>
                    </Link>
                    <Link to="#" className={ `layout-btn btn-grid ${ layout === "list" ? "active" : "" }` } title="list" onClick={ changeLayout }>
                        <i className="icon-mode-list"></i>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default connect( null, { filterSort } )( ToolBox );