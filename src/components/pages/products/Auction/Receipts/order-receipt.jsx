import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../bid-history.css";

import Breadcrumb from "../../../../common/breadcrumb";
import BidWinner from "../../../../common/partials/bid-winner";
import { AuctionContext } from "../../../../../context/Auctions";

function OrderReceipts() {
  const { orderReceipt } = useContext(AuctionContext);
  console.log("orderReceipt", orderReceipt);
  return (
    <>
      <Helmet>
        <title>ORDER RECEIPTS </title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Order Receipts</h1>

      <div className="main">
        <Breadcrumb current="Order Receipt" />

        <div className="mb-2"></div>
        <div className="container">
          <h4>Order Receipt </h4>
          <div className="row">
            <div className="col-md-8 col-lg-8 col-12">
              <div className="card">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="opacity">Order No:</td>
                      <td>201283</td>
                    </tr>
                    <tr>
                      <td className="opacity">Date:</td>
                      <td>Mon, 9 Nov, 2020 / 10:48 AM</td>
                    </tr>
                    <tr>
                      <td className="opacity">Pick up location::</td>
                      <td>
                        Grand Square Victoria Island, No 8 Adetokunbo
                        AdemolaVictoria Island
                      </td>
                    </tr>
                    <tr>
                      <td className="opacity">Total cost:</td>
                      <td>10,500 Rubies</td>
                    </tr>
                    <tr>
                      <td className="opacity">Delivery cost:</td>
                      <td>0 Rubies</td>
                    </tr>
                    <tr>
                      <td className="opacity">Grand Total cost:</td>
                      <td>10,500 Rubies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <BidWinner
                  show
                  text2="Delivery redemptions, your items will be delivered to your address within 15 days period An agent will contact you for unavailability of an item For complaints or enquires please call +234 812 345 6789 or send an email to connect@companyrewards.com"
                  height={80}
                  text="E-voucher redemptions, your item(s) will be avialable for pick up at your selected location within the period of 15 days after which your voucher expires"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <div className="card cap-table">
                <div className="card-body">
                  <h5>Item Info</h5>
                  <div className="row">
                    <div className="col-md-2 col-lg-2 col-2"></div>
                    <div className="col-md-10 col-lg-10 col-10">
                      <h5 className="ruby-tag underline">
                        Nike Air Jordan 13 XIII Retro Low Clot Terracotta Sepia
                        Size 13
                      </h5>
                    </div>
                  </div>
                  <p>
                    Price:{" "}
                    <span>
                      10,500 <span className="ruby-tag">Rubies</span>
                    </span>
                  </p>
                  <p>
                    Redemption Type: <span>Pickup</span>
                  </p>
                  <p>
                    Voucher Number: <span>SP115614DD639D21</span>
                  </p>
                  <p>
                    Status: <span>Expired</span>
                  </p>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/checkout/shipping/two`}
                    className="btn btn-block btn-sm btn-primary"
                  >
                    Go to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderReceipts;
