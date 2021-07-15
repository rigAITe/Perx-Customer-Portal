import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { shopFilterProducts, isIEBrowser, isEdgeBrowser, isSafari } from '../../utils';

function Pagination( props ) {
    const { displayCount = 12, isShow = true, changeDisplay, isBlogCount, filters } = props;
    const [ curPage, setCurPage ] = useState( 1 );
    let count;

    if ( isBlogCount ) {
        count = isBlogCount;
    } else {
        count = shopFilterProducts( props.products, props.filter ).length;
    }

    const toTop = () => {
        let offTop = document.querySelector( ".skeleton-body" ).getBoundingClientRect().top + window.pageYOffset;
        if ( isIEBrowser() || isEdgeBrowser() || isSafari() ) {
            let pos = window.pageYOffset;
            let timer = setInterval( () => {
                if ( pos <= offTop ) {
                    if ( pos < offTop - 40 && pos <= offTop ) {
                        window.scrollTo( {
                            top: offTop - 90
                        } )
                        clearInterval( timer );
                    } else {
                        window.scrollBy( 0, 40 );
                        pos += 40;
                    }

                    window.scrollTo( {
                        top: offTop - 90
                    } )
                    clearInterval( timer );
                }

                if ( pos >= offTop ) {
                    if ( pos < offTop + 40 && pos >= offTop ) {
                        window.scrollTo( {
                            top: offTop - 90
                        } )
                        clearInterval( timer );
                    } else {
                        window.scrollBy( 0, -40 );
                        pos -= 40;
                    }
                }
            }, 1 );
        } else {
            window.scrollTo( {
                top: offTop - 90,
                behavior: "smooth"
            } )
        }
    }

    useEffect( () => {
        if ( document.querySelector( 'ul.pagination' ) ) {
            if ( count <= displayCount ) {
                document.querySelector( 'ul.pagination' ).style.visibility = "hidden";
                document.querySelector( 'ul.pagination' ).style.opacity = 0;
            } else {
                document.querySelector( 'ul.pagination' ).style.visibility = "visible";
                document.querySelector( 'ul.pagination' ).style.opacity = 1;
            }
        }
    } )

    useEffect( () => {
        setCurPage( 1 );
        props.curPage( 1 );

        setTimeout( () => {
            toTop();
        }, 100 );
    }, [ filters, displayCount ] )

    let cur = curPage;
    let pageCount = Math.ceil( count / displayCount );
    let res = getArray( count, cur, pageCount );
    if ( pageCount === 0 ) return ( <div></div> );

    function pageUpdate( e, item ) {
        e.preventDefault();
        setTimeout( () => {
            toTop();
        }, 100 );
        setCurPage( item );
        props.curPage( item );
    }

    function pageUpdatePrev( e ) {
        e.preventDefault();
        setTimeout( () => {
            toTop();
        }, 100 );
        if ( cur - 1 > 0 ) {
            props.curPage( cur - 1 );
            setCurPage( cur - 1 );
        }
    }

    function pageUpdateNext( e ) {
        e.preventDefault();
        setTimeout( () => {
            toTop();
        }, 100 );
        if ( cur < pageCount ) {
            props.curPage( cur + 1 );
            setCurPage( cur + 1 );
        }
    }

    function getArray( count, cur, pageCount ) {
        let pagination = [];
        let more = 1;

        if ( pageCount < 6 ) {
            more = 0;
            for ( let i = 1; i <= pageCount; i++ ) {
                pagination.push( i );
            }
        } else if ( cur <= pageCount - 4 ) {
            let init = cur;
            if ( cur - 1 > 0 )
                init = cur - 1;
            for ( let i = init; i < init + 5; i++ ) {
                pagination.push( i );
            }
        } else {
            more = 0;
            for ( let i = pageCount - 5; i <= pageCount; i++ ) {
                pagination.push( i );
            }
        }
        return { pagination: pagination, more: more };
    }

    return (
        <nav className="toolbox toolbox-pagination">
            {
                isShow ?
                    <div className="toolbox-item toolbox-show m-0">
                        <label>Show:</label>

                        <div className="select-custom">
                            <select name="count" className="form-control" onChange={ e => changeDisplay( e.currentTarget.value ) } value={ displayCount }>
                                {
                                    isBlogCount ?
                                        <>
                                            <option value={ 3 }>3</option>
                                            <option value={ 6 }>6</option>
                                            <option value={ 9 }>9</option>
                                        </>
                                        :
                                        <>
                                            <option value={ 12 }>12</option>
                                            <option value={ 24 }>24</option>
                                            <option value={ 36 }>36</option>
                                        </>
                                }
                            </select>
                        </div>
                    </div>
                    : ""
            }

            <ul className="pagination m-0">
                <li className={ `page-item ${ cur === 1 ? "disabled" : "" }` }>
                    <Link className="page-link page-link-btn" to="#" onClick={ ( e ) => pageUpdatePrev( e ) }><i className="icon-angle-left"></i></Link>
                </li>
                {
                    res.pagination.map( ( item, index ) => (
                        <li className={ `page-item ${ item === cur ? "active" : "" }` } key={ "page-item" + index }>
                            <Link className="page-link" to="#" onClick={ ( e ) => pageUpdate( e, item ) }>
                                { item }
                                <span className="sr-only"></span>
                            </Link>
                        </li>
                    ) )
                }
                {
                    res.more === 1 ? <li className="page-item"><span>...</span></li> : ""
                }
                <li className={ `page-item ${ cur === pageCount ? "disabled" : "" }` }>
                    <Link className="page-link page-link-btn" to="#" onClick={ ( e ) => pageUpdateNext( e ) }>
                        <i className="icon-angle-right"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : [],
        filter: state.filter ? state.filter : []
    }
}

export default connect( mapStateToProps )( Pagination );