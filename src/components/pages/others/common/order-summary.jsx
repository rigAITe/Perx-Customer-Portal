import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SlideToggle } from 'react-slide-toggle';

function OrderSummary( props ) {
    const { cartItmes } = props;

    return (
        <SlideToggle collapsed={ true }>
            {
                ( { onToggle, setCollapsibleElement, toggleState } ) => (
                    <div className="order-summary">
                        <h3>Summary</h3>

                        <h4>
                            <Link to="#" data-toggle="collapse" onClick={ onToggle } className={ toggleState.toLowerCase() }>{ cartItmes.length } products in Cart</Link>
                        </h4>

                        <div className="collapse show" ref={ setCollapsibleElement } style={ { overflow: 'hidden' } } id="order-cart-section">
                            <table className="table table-mini-cart">
                                <tbody>
                                    {
                                        cartItmes.map( ( item, index ) => (
                                            <tr key={ "cart-item" + index }>
                                                <td className="product-col">
                                                    <figure className="product-image-container">
                                                        <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ item.id }` } className="product-image">
                                                            <img src={ `${ process.env.PUBLIC_URL }/${ item.pictures[ 0 ] }` } alt="product" />
                                                        </Link>
                                                    </figure>
                                                    <div>
                                                        <h2 className="product-title">
                                                            <Link to={ `${ process.env.PUBLIC_URL }/products/default/${ item.id }` }>{ item.name }</Link>
                                                        </h2>

                                                        <span className="product-qty">Qty: { item.qty }</span>
                                                    </div>
                                                </td>
                                                <td className="price-col">${ item.sum.toFixed( 2 ) }</td>
                                            </tr>
                                        ) )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            }
        </SlideToggle>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        cartItmes: state.cartList.cart ? state.cartList.cart : []
    }
}

export default connect( mapStateToProps, {} )( OrderSummary );
