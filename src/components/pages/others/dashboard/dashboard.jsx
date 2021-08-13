import React from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../../common/breadcrumb';
import AccountSidebar from '../common/account-sidebar';
import Board from '../common/board';
import Account from '../common/account';
import SidebarToggle from '../../products/common/sidebars/sidebar-toggle';
import AuctionBidHistory from '../../products/Auction/auction-bid-history';
import TransferPoints from "../common/transfer-points/transfer-points";
import ChangePassword from '../common/change-password';
import AddressBook from '../common/address-book';
import TierStatus from '../common/tier-status';
import Statement from '../common/statement';
import OrderHistory from '../common/order-history';
import AuctionBidhistory from '../../products/Auction/auctionBidHistory';

function Dashboard(props) {

  function selectBoard() {
    switch (props.match.params.board) {
      case "board":
        return (<Board />);
      case "account":
        return (<Account />);
      case 'change_password':
        return (<ChangePassword />);
      case "auction_history":
        return (<AuctionBidHistory />);
      case "auction_bid_history":
        return (<AuctionBidhistory />);
      case "transfer_points":
        return (<TransferPoints />);
      case "address_book":
        return (<AddressBook />);
      case "tier_status":
        return (<TierStatus />);
      case "statement":
        return (<Statement />);
      case "order_history":
        return (<OrderHistory />);
      default:
    }
  }

  if (
    props.match.params.board !== "board" &&
    props.match.params.board !== "account" &&
    props.match.params.board !== "auction_history" &&
    props.match.params.board !== "auction_bid_history" &&
    props.match.params.board !== "transfer_points" &&
    props.match.params.board !== "change_password" &&
    props.match.params.board !== "address_book" &&
    props.match.params.board !== "tier_status" &&
    props.match.params.board !== "statement" &&
    props.match.params.board !== "order_history"

  ) {
    window.location = process.env.PUBLIC_URL + "/pages/404";
  }

  return (
    <>
      <Helmet>
        <title>Customer Portal - My Account </title>
      </Helmet>

      <h1 className="d-none">Customer Portal - My Account</h1>

      <div className="main">
        <Breadcrumb current="My Account" parent="pages" />

        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-last dashboard-content">
              {
                selectBoard()
              }
            </div>
            <SidebarToggle />
            <AccountSidebar board={props.match.params.board} />
          </div>
        </div>
        <div className="mb-5"></div>
      </div>
    </>
  )
}

export default Dashboard;