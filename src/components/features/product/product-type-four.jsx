import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductTypeFour( props ) {
    let { addClass, link = "default", product, isCategory = false } = props;

    return (
        <div className={ `product-default ${ addClass }` }>
            <figure>
                <Link to={ `${ process.env.PUBLIC_URL }/products/${ link }/${ product.id }` }>
                    <div className="lazy-overlay bg-3"></div>

                    <LazyLoadImage
                        alt="product"
                        src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] }
                        threshold={ 500 }
                        effect="blur"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] }
                                threshold={ 500 }
                                effect="blur"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </Link>
            </figure>

            <div className="product-details">
                <div className="category-list">
                    {
                        isCategory ?
                            product.category.map( ( category, index ) => (
                                index === ( product.category.length - 1 ) ?
                                    <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }</Link>
                                    : <Link to={ `${ process.env.PUBLIC_URL }/categories/full-width` } className="product-category" key={ "category" + index }>{ category }, </Link>
                            ) )
                            : ""
                    }
                </div>

                <h2 className="product-title">
                    <Link to={ `${ process.env.PUBLIC_URL }d/products/${ link }/${ product.id }` }>{ product.name }</Link>
                </h2>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={ { width: 20 * product.rating + '%' } }></span>
                        <span className="tooltiptext tooltip-top">{ product.rating.toFixed( 2 ) }</span>
                    </div>
                </div>
                {
                    product.salePrice ?
                        <div className="price-box">
                            <span className="old-price">${ product.price.toFixed( 2 ) + " " }</span>
                            <span className="product-price">${ product.salePrice.toFixed( 2 ) }</span>
                        </div>
                        :
                        <div className="price-box">
                            <span className="product-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductTypeFour;