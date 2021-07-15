import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb( props ) {
    const { addClass, current, ...parent } = props;
    let path = [];
    let x;
    let url = "";

    for ( x in parent ) {
        path.push( parent[ x ] );
    }

    switch ( path[ 0 ] ) {
        case "categories":
            url = "categories/full-width";
            break;
        case "products":
            url = "products/default/15"
            break;
        case "pages":
            url = "pages/about";
            break;
        default:
            break;
    }

    return (
        <nav aria-label="breadcrumb" className={ `breadcrumb-nav ${ addClass }` } >
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={ `${ process.env.PUBLIC_URL }` }><i className="icon-home"></i></Link></li>
                    {
                        path.map( ( item, index ) => (
                            <li className="breadcrumb-item" key={ "breadcrumb-item" + index }><Link to={ `${ process.env.PUBLIC_URL }/${ url }` }>{ item }</Link></li>
                        ) )
                    }
                    <li className="breadcrumb-item active" aria-current="page">{ current }</li>
                </ol>
            </div>
        </nav>
    )
}