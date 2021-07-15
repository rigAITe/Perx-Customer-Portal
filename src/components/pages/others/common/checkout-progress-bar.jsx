import React from 'react';

function CheckoutProgessBar( props ) {
    const { active = 1 } = props;

    return (
        <ul className="checkout-progress-bar">
            <li className={ active === 1 ? 'active' : '' }>
                <span>Shipping</span>
            </li>
            <li className={ active === 2 ? 'active' : '' }>
                <span>Review &amp; Payments</span>
            </li>
        </ul>
    )
}

export default React.memo( CheckoutProgessBar );