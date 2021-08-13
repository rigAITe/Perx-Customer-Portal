import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// "order", "address", "billing", "profile",

const boards = [ "board", "account", "tier_status",  "address_book", "statement", "order_history", "auction_history", "auction_bid_history" , 'change_password',  'transfer_points', ];

function AccountSidebar( props ) {
    useEffect( () => {
        const index = boards.indexOf( props.board );
        if ( index >= 0 ) changeActive( index );
    }, [] )

    useEffect( () => {
        const index = boards.indexOf( props.board );
        if ( index >= 0 ) changeActive( index );
    } )

    const changeActive = ( index ) => {
        let list = document.querySelector( ".dashboard-sidebar .list" );
        if ( list.querySelector( ".active" ) )
            list.querySelector( ".active" ).classList.remove( "active" );
        list.childNodes[ index ].classList.add( "active" );
    }

    return (
      <aside className="dashboard-sidebar mobile-sidebar col-lg-3">
        <div className="widget widget-dashboard">
          <h3 className="widget-title">My Account</h3>

          <ul className="list">
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/board`}>
                Account Dashboard
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/account`}>
                Account Information
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/tier_status`}>
                Tier Status</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/address_book`}>
                Address Book</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/statement`}>
                Statement</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/order_history`}>
                Order History</Link>
            </li>
            <li>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/dashboard/auction_history`} >
                Auction Bid History
              </Link>
            </li>
            <li>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/dashboard/auction_bid_history`} >
                Auction History
              </Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/change_password`}>
                Change Password</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/transfer_points`}>
                Transfer Points
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
}

export default React.memo( AccountSidebar );
