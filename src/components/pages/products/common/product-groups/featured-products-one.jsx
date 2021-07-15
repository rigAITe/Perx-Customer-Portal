import React from 'react';
import { connect } from 'react-redux';

import ProductTypeTwo from '../../../../features/product/product-type-two';
import Carousel from '../../../../features/carousel';

import { productFilter } from '../../../../../utils';
import { owlSetting1 } from '../../../../../utils/settings';

function FeaturedProductsOne( props ) {
    const { addClass, isContainer = true, link = "default" } = props;
    let featured = productFilter( props.products, "featured" );

    return (
        <section className={ `products-section ${ addClass }` }>
            <div className={ isContainer ? 'container' : 'container-fluid' }>
                <h2 className="carousel-title">Related Products</h2>
                <Carousel addClass="product-intro" settings={ owlSetting1 }>
                    {
                        featured.slice( 0, 5 ).map( ( item, index ) => (
                            <ProductTypeTwo addClass="inner-quickview inner-icon" product={ item } link={ link } key={ "product-type-2" + index } />
                        ) )
                    }
                </Carousel>
            </div>
        </section>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, {} )( FeaturedProductsOne );