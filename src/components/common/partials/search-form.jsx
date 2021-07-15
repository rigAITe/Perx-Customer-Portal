import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchForm( props ) {
    useEffect( () => {
        document.querySelector( "body" ).addEventListener( "click", onBodyClick );
        document.querySelector( ".header-search .header-search-wrapper" ).addEventListener( "click", function ( e ) {
            e.stopPropagation();
        } )
        window.addEventListener( "resize", onWindowResize );

        return () => {
            document.querySelector( "body" ).removeEventListener( "click", onBodyClick );
            window.removeEventListener( "resize", onWindowResize );
        }
    } )

    const onSearchClick = ( e ) => {
        e.preventDefault();

        if ( document.querySelector( ".header-search" ) )
            document.querySelector( ".header-search" ).classList.toggle( "show" );

        if ( document.querySelector( ".header-search-wrapper" ) )
            document.querySelector( ".header-search-wrapper" ).classList.toggle( "show" );

        if ( window.innerWidth < 768 ) {
            document.querySelector( ".header-search-wrapper" ).style.left = 15 - document.querySelector( ".header-search" ).offsetLeft + "px";
            document.querySelector( ".header-search-wrapper" ).style.right = 15 + document.querySelector( ".header-search" ).offsetLeft + document.querySelector( ".header-search" ).clientWidth - window.innerWidth + "px";
        }
    }

    const onWindowResize = () => {
        let searchWrapper = document.querySelector( ".header-search-wrapper" );
        let headerSearch = document.querySelector( ".header-search" );

        if ( window.innerWidth < 576 ) {
            searchWrapper.style.left = 15 - headerSearch.offsetLeft + "px";
            searchWrapper.style.right = 15 + headerSearch.offsetLeft + headerSearch.clientWidth - window.innerWidth + "px";
        }
    }

    const onBodyClick = ( e ) => {
        if ( document.querySelector( ".header-search-wrapper" ) ) {
            if ( document.querySelector( ".header-search-wrapper" ).classList.contains( "show" ) ) {
                document.querySelector( ".header-search-wrapper" ).classList.remove( "show" );
                document.querySelector( "body" ).classList.remove( "is-search-active" );
            }

            if ( document.querySelector( ".header-search" ).classList.contains( "show" ) ) {
                document.querySelector( ".header-search" ).classList.remove( "show" );
            }
        }
    }

    const { addClass, iconClass = "icon-magnifier", placeholder = "Search...", isCat = true, text, btnAClass } = props;

    return (
        <div className={ "header-search " + addClass }>
            <Link to="#" className="search-toggle" role="button" onClick={ onSearchClick }><i className={ iconClass }></i>{ text }</Link>
            <form action="#" method="get">
                <div className="header-search-wrapper">
                    <input type="search" className="form-control" name="q" id="q" placeholder={ placeholder } required />
                    {
                        isCat ?
                            <div className="select-custom">
                                <select id="cat" name="cat">
                                    <option value="">All Categories</option>
                                    <option value="4">Fashion</option>
                                    <option value="12">- Women</option>
                                    <option value="13">- Men</option>
                                    <option value="66">- Jewellery</option>
                                    <option value="67">- Kids Fashion</option>
                                    <option value="5">Electronics</option>
                                    <option value="21">- Smart TVs</option>
                                    <option value="22">- Cameras</option>
                                    <option value="63">- Games</option>
                                    <option value="7">Garden</option>
                                    <option value="11">Motors</option>
                                    <option value="31">- Cars </option>
                                    <option value="34">- Boats</option>
                                </select>
                            </div>
                            : ""

                    }
                    <button className={ iconClass + " btn " + btnAClass } type="submit"></button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;