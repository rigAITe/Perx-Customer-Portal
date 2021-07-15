import React from 'react';
import { connect } from 'react-redux';

import ProductTypeFour from '../features/product/product-type-four';

import { productFilter } from '../../utils';

function SpecialCollection( props ) {
    const { type, title } = props;
    let products = productFilter( props.products, type ).slice( 0, 3 );

    return (
        <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
            <h4 className="section-sub-title mb-2">{ title }</h4>

            {
                products.map( ( item, index ) => (
                    <ProductTypeFour addClass=" left-details product-widget" product={ item } key={ title + index } />
                ) )
            }
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( SpecialCollection )