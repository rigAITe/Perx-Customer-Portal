import React from 'react';
import { connect } from 'react-redux';

import ProductTypeFour from '../../../../features/product/product-type-four';
import Carousel from '../../../../features/carousel';

import { productFilter } from '../../../../../utils';

function FeaturedProductsTwo( props ) {
    const { link = "default" } = props;
    let featured = productFilter( props.products, "featured" );

    return (
        <div className="widget widget-featured">
            <h3 className="widget-title">Featured</h3>

            <div className="widget-body">
                <Carousel addClass="widget-featured-products" isTheme={ false } settings={ { nav: true } }>
                    <div className="featured-col">
                        {
                            featured.slice( 0, 3 ).map( ( item, index ) => (
                                <ProductTypeFour addClass="left-details product-widget" link={ link } product={ item } key={ "product-type-4" + index } />
                            ) )
                        }
                    </div>
                    <div className="featured-col">
                        {
                            featured.slice( 3, 6 ).map( ( item, index ) => (
                                <ProductTypeFour addClass="left-details product-widget" link={ link } product={ item } key={ "product-type" + index } />
                            ) )
                        }
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( FeaturedProductsTwo );