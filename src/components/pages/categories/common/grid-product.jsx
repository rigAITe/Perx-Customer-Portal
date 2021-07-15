import React from 'react';
import { connect } from 'react-redux';

import ProductTypeOne from '../../../features/product/product-type-one';
import ProductTypeThree from '../../../features/product/product-type-three';
import ProductTypeTwo from '../../../features/product/product-type-two';

import { shopFilterProducts } from '../../../../utils';

function GridProduct( props ) {
    const { displayCount, cols = 3, productType = "", curPage, discount } = props;
    let subClass = getClass( cols );
    let products = props.products;
    products = shopFilterProducts( products, props.filter );

    function getClass( cols ) {
        let subClass = "";
        if ( cols === 4 ) {
            subClass = "col-xl-3";
        } else if ( cols === 5 ) {
            subClass = "col-xl-5col";
        } else if ( cols === 6 ) {
            subClass = "col-xl-2 col-lg-3";
        } else if ( cols === 7 ) {
            subClass = "col-xl-7col col-lg-3";
        } else if ( cols === 8 ) {
            subClass = "col-xl-8col col-lg-3";
        }
        return subClass;
    }

    console.log( 'Product is : ' , products)

    return (
        <div className={ `product-group ${ productType === "flex-grid" && props.type === "grid" ? "row mx-0 divide-line up-effect" : ( "row row-sm position-relative " + ( props.type === "list" ? "product-intro list-style" : "" ) ) } ` }>
            {
                products.length === 0 ?
                    <h4 className="mt-3 ml-4 text-dark" style={ { fontWeight: 400 } }><i className="fas fa-info-circle text-primary mr-2"></i>No products were found matching your selection.</h4>
                    : ''
            }
            {
                props.type === "grid" ?
                    products.slice( ( curPage - 1 ) * displayCount, curPage * displayCount ).map( ( product, index ) => (
                        productType === "flex-grid" ?
                            <div className="col-6 col-md-3 p-0" key={ "flex-grid" + index }>
                                <div className="skel-pro skel-pro-grid"></div>
                                {discount ? 
                                 <ProductTypeOne discount addClass="inner-quickview inner-icon pl-3 pr-3" product={ product } key={ "flex-grid" + index } />
                                : 
                                <ProductTypeOne addClass="inner-quickview inner-icon pl-3 pr-3" product={ product } key={ "flex-grid" + index } /> 
                            }
                              
                            </div>
                            :
                            <div className={ `col-6 col-md-4 ${ subClass }` } key={ "grid" + index }>
                                <div className="skel-pro skel-pro-grid"></div>
                                <ProductTypeTwo addClass="inner-quickview inner-icon" product={ product } noAction={ cols > 4 ? true : false } />
                            </div>
                    ) )
                    :
                    products.slice( ( curPage - 1 ) * displayCount, curPage * displayCount ).map( ( product, index ) => (
                        <React.Fragment key={ "list" + index }>
                            <div className="skel-pro skel-pro-list"></div>

                            <ProductTypeThree addClass="col-6 col-sm-12 left-details product-list mb-4" product={ product } />
                        </React.Fragment>
                    ) )
            }
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        filter: state.filter ? state.filter : [],
        products: state.data.products ? state.data.products : ''
    }
}

export default connect( mapStateToProps )( GridProduct );
