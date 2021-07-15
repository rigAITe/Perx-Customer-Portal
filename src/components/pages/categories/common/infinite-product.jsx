import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactScroll from 'react-infinite-scroll-component';

import ProductTypeThree from '../../../features/product/product-type-three';
import ProductTypeTwo from '../../../features/product/product-type-two';

import { shopFilterProducts } from '../../../../utils';

function InfiniteProduct( props ) {
    const [ infiniteTotal, setInfiniteTotal ] = useState( 12 );
    let products = props.products;
    products = shopFilterProducts( products, props.filter );
    let total = infiniteTotal;

    function fetchData() {
        if ( total < props.products.length ) {
            // a fake async api call
            setTimeout( () => {
                setInfiniteTotal( total + 3 );
            }, 2000 );
        }
    }

    return (
        <ReactScroll
            dataLength={ infiniteTotal } //This is important field to render the next data
            next={ fetchData }
            hasMore={ infiniteTotal >= products.length ? false : true }
            style={ { overflow: 'visible' } }
            loader={ <div className="loader">
                <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div> }>
            <div className={ `row row-sm position-relative ${ props.type === "list" ? "product-intro" : "" }` }>

                {
                    props.type === "grid" ?
                        products.slice( 0, total ).map( ( product, index ) => (
                            <div className={ `col-6 col-md-4 fadeInDownShorter` } style={ { animationDuration: 1 + 's' } } key={ "product" + index }>
                                <ProductTypeTwo addClass="inner-quickview inner-icon" product={ product } />
                            </div>
                        ) )
                        :
                        products.slice( 0, total ).map( ( product, index ) => (
                            <div className="col-6 col-sm-12 fadeInDownShorter" style={ { animationDuration: 1 + 's' } } key={ "product" + index } >
                                <ProductTypeThree addClass="left-details product-list mb-4" product={ product } />
                            </div>
                        ) )
                }
            </div>
        </ReactScroll>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        filter: state.filter ? state.filter : [],
        products: state.data.products ? state.data.products : ''
    }
}

export default connect( mapStateToProps )( InfiniteProduct );