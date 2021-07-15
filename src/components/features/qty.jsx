import React, { useEffect, useState } from 'react';

function Qty( props ) {
    const [ count, setCount ] = useState( 1 );
    let id = ( Math.random() * 10000 ).toFixed( 0 );
    const { addClass = 'product-single-qty' } = props;

    useEffect( () => {
        document.querySelector( `#product-qty-${ id } input` ) && document.querySelector( `#product-qty-${ id } input` ).setAttribute( "value", count );
    }, [] )

    useEffect( () => {
        document.querySelector( `#product-qty-${ id } input` ) && document.querySelector( `#product-qty-${ id } input` ).setAttribute( "value", count );
    } )

    const countUp = () => {
        let quantity = parseInt( document.querySelector( '.horizontal-quantity' ).value );
        if ( quantity < ( props.stock ? props.stock : 5 ) ) {
            setCount( quantity + 1 );

            let inputs = document.querySelectorAll( '.horizontal-quantity' );
            for ( let i = 0; i < inputs.length; i++ ) {
                inputs[ i ].value = quantity + 1;
            }
        }
    }

    const countDown = () => {
        let quantity = parseInt( document.querySelector( '.horizontal-quantity' ).value );
        if ( quantity > 1 ) {
            setCount( quantity - 1 );

            let inputs = document.querySelectorAll( '.horizontal-quantity' );
            for ( let i = 0; i < inputs.length; i++ ) {
                inputs[ i ].value = quantity - 1;
            }
        }
    }

    const setQty = ( e ) => {
        if ( e.target.value > 0 ) {
            setCount( parseInt( e.target.value ) );

            let inputs = document.querySelectorAll( '.horizontal-quantity' );
            for ( let i = 0; i < inputs.length; i++ ) {
                inputs[ i ].value = e.target.value;
            }
        }
        else
            e.preventDefault();
    }

    return (
        <div className={ `${ addClass }` } id={ `product-qty-${ id }` }>
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                <span className="input-group-btn input-group-prepend">
                    <button className="btn btn-outline btn-down-icon bootstrap-touchspin-down" onClick={ countDown } type="button"></button>
                </span>
                <input className="horizontal-quantity form-control" type="number" min="1" max={ props.stock } value={ count } onChange={ ( e ) => { setQty( e ) } } />
                <span className="input-group-btn input-group-append">
                    <button className="btn btn-outline btn-up-icon bootstrap-touchspin-up" onClick={ countUp } type="button"></button>
                </span>
            </div>
        </div>
    )
}

export default Qty;