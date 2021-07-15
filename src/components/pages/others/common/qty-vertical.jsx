import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { incrementQty, decrementQty } from '../../../../action';

function QtyVertical( props ) {

    useEffect( () => {
        document.querySelector( `#${ props.id } input` ) && ( document.querySelector( `#${ props.id } input` ).value = props.product.qty );
    } )

    function countUp( e ) {
        props.incrementQty( props.product );
    }

    function countDown( e ) {
        if ( props.product.qty > 1 ) {
            props.decrementQty( props.product );
        }
    }

    return (
      <div
        className="input-group bootstrap-touchspin bootstrap-touchspin-injected"
        id={props.id}
      >
        <input
          className="vertical-quantity form-control"
          type="text"
          defaultValue={props.product.qty}
        />
        <span className="input-group-btn-vertical">
          <button
            className="btn btn-outline bootstrap-touchspin-up icon-up-dir"
            onClick={countUp}
            type="button"
          ></button>
          <button
            className="btn btn-outline bootstrap-touchspin-down icon-down-dir"
            onClick={countDown}
            type="button"
          ></button>
        </span>
      </div>
    );
}

export default connect( null, { incrementQty, decrementQty } )( QtyVertical );