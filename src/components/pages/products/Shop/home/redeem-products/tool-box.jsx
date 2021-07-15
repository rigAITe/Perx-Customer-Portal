import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { filterSort } from "../../../../../../../src/action/index.js";

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
        <nav className={ "toolbox-nav toolbox " + addClass }>
            <div className="toolbox-left">
                <div className="toolbox-item toolbox-sort">
                    <div className="select-custom">
                        <select name="orderby" className="form-control toolbox-select" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                            <option value="menu_order">Redemption Type</option>
                            <option value="popularity">Delivery</option>
                            <option value="rating">Pickup</option>
                        </select>
                    </div>
                </div>
                
                <div className="toolbox-item toolbox-sort">
                    <div className="select-custom">
                        <select name="orderby" className="form-control toolbox-select" defaultValue="menu_order" onChange={ ( e ) => props.filterSort( e.currentTarget.value ) }>
                            <option value="menu_order">Default Sorting</option>
                            <option value="popularity">Delivery</option>
                            <option value="rating">Pickup</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="toolbox-right">
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