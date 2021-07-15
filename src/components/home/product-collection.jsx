import React from 'react';
import { connect } from 'react-redux';

import ProductTypeFive from '../features/product/product-type-five';
import Carousel from '../features/carousel';

import { productFilter } from '../../utils';
import { owlSetting2, owlSetting3 } from '../../utils/settings';

function ProductCollection ( props ) {
    let { title, type } = props;
    let products = productFilter( props.products, type );

    let productSlider;

    if ( type === "featured" ) {
        productSlider = { ...owlSetting3, nav: true, dots: false, navText: [ '<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>' ] };
    } else {
        productSlider = { ...owlSetting2, nav: true, dots: false, margin: 20, navText: [ '<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>' ] };
    }

    return (
        <>
            <h2 className="section-title heading-border ls-20 border-0">{ title }</h2>

            <Carousel addClass="products-slider custom-products nav-outer show-nav-hover nav-image-center" settings={ productSlider }>
                {
                    type === "featured" ?
                        products.slice( 0, 6 ).map( ( item, index ) => (
                            <ProductTypeFive product={ item } key={ "featured" + index } />
                        ) )
                        :
                        products.slice( 0, 6 ).map( ( item, index ) => (
                            <ProductTypeFive product={ item } key={ "no-featured" + index } width={ 220 } height={ 220 } />
                        ) )
                }
            </Carousel>
        </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( ProductCollection )