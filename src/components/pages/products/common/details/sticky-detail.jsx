import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StickyBox from 'react-sticky-box';

import Qty from '../../../../features/qty';
import { findIndex, setStickyValues, stickyContentHandle } from '../../../../../utils';

import { quickAddToCart, addToWishList } from '../../../../../action'

function StickyDetail( props ) {
    const { wishlist, product } = props;
    let isInWishlist = findIndex( wishlist, product.id ) ? true : false;

    useEffect( () => {
        setStickyValues( 120 );
        window.addEventListener( 'scroll', stickyContentHandle, { passive: true } );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    const selectGroup = ( e ) => {
        e.preventDefault();
        e.currentTarget.parentElement.parentElement.querySelector( ".active" ) && e.currentTarget.parentElement.parentElement.querySelector( ".active" ).classList.remove( "active" );
        e.currentTarget.parentElement && e.currentTarget.parentElement.classList.add( "active" );
    }

    const addToCart = ( e ) => {
        e.preventDefault();
        let val = 1;
        if ( e.currentTarget.parentElement.parentElement.querySelector( ".horizontal-quantity" ) )
            val = parseInt( e.currentTarget.parentElement.parentElement.querySelector( ".horizontal-quantity" ).getAttribute( "value" ) );
        props.quickAddToCart( props.product, val );
    }

    const onWithWishClick = ( e ) => {
        if ( !props.isInWishlist ) {
            e.preventDefault();
            props.addToWishList( props.product );
        }
    }

    return (
        <div className="col-lg-3">
            <StickyBox className="sticky-sidebar" offsetTop={ 80 }>
                <div className="skel-pro skel-sticky"></div>
                <div className="product-single-details">

                    <div className="product-filters-container mb-1">
                        {
                            product.variants ?
                                product.variants.map( ( variant, index ) => (
                                    <div className="product-single-filter" key={ "varient" + index }>
                                        <label>{ variant.name }:</label>
                                        {
                                            variant.name === "size" ?
                                                <ul className="config-size-list">
                                                    {
                                                        variant.type.map( ( item, index ) => (
                                                            <li className={ index === 0 ? "active" : "" } key={ "size" + index } >
                                                                <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] }>{ item.size }</Link>
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                                : <ul className="config-swatch-list">
                                                    {
                                                        variant.type.map( ( item, index ) => (
                                                            <li className={ index === 0 ? "active" : "" } key={ "color" + index } >
                                                                {
                                                                    item.color ?
                                                                        <Link to="#" onClick={ selectGroup } data-src={ item.pictures[ 0 ] } style={ { backgroundColor: item.color } }></Link>
                                                                        : <Link to="#" data-src={ item.pictures[ 0 ] } onClick={ selectGroup } style={ { backgroundImage: `url(${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] })` } }></Link>
                                                                }
                                                            </li>
                                                        ) )
                                                    }
                                                </ul>
                                        }
                                    </div>
                                ) )
                                : ""
                        }
                        <hr className="divider" />

                        <div className="product-single-filter product-single-qty">
                            <label>QTY:</label>
                            <Qty addClass='' stock={ product.stock } />
                        </div>

                        <hr className="divider" />
                    </div>
                    <div className="product-action mb-2">

                        <Link to="#" className="btn btn-dark add-cart icon-shopping-cart mr-4" title="Add to Cart" onClick={ addToCart }>
                            <span>Add to Cart</span>
                        </Link>

                        <Link to={ `${ process.env.PUBLIC_URL }/pages/wishlist` } className={ `paction add-wishlist ${ isInWishlist === true ? 'checked' : '' }` } title={ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' } onClick={ onWithWishClick }>
                            <span>{ isInWishlist ? 'Go to Wishlist' : 'Add to Wishlist' }</span>
                        </Link>
                    </div>
                </div>
            </StickyBox>
        </div >

    )
}

const mapStateToProps = ( state, props ) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    };
}

export default connect( mapStateToProps, { quickAddToCart, addToWishList } )( StickyDetail );