import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuctionContext } from "../../../../../context/Auctions";

import Breadcrumb from "../../../../common/breadcrumb";
import BidWinner from "../../../../common/partials/bid-winner";

import "../bid-history.css";
import "../../../../../../src/components/pages/products/Discount/discount.css";
import tescoLogo from "../../../../../../src/components/pages/products/Discount/assets/tesco.png";

function DiscountOrderReceipts() {
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
              <div class="text-dark col-12 alert alert-secondary" role="alert">
                Get 30% off on all polo bags when you buy a polo t-shirt
              </div>
              <div class="text-dark col-12 alert alert-secondary" role="alert">
                Get 30% off on all polo bags when you buy a polo t-shirt
              </div>
              <div>
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
                  </tbody>
                </table>
              </div>
              <div>
                <BidWinner
                  show
                  // text2="Delivery redemptions, your items will be delivered to your address within 15 days period An agent will contact you for unavailability of an item For complaints or enquires please call +234 812 345 6789 or send an email to connect@companyrewards.com"
                  // height={80}
                  text="E-voucher redemptions, your item(s) will be avialable for pick up at your selected location within the period of 15 days after which your voucher expires"
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <div className="card cap-table">
                <div className="card-body">
                  <h5>Discount Info</h5>
                  <div className="row d-flex">
                    <img
                      className="modal-logo"
                      src={tescoLogo}
                      alt="Logo"
                    />
                    <h5 className="ml-2 text-dark">Tesco Lekki</h5>
                  </div>
                  <p>Redemption Type: <br/> <span>Pickup</span> </p>
                  
                  <p>Voucher Number: <br/> <span>SP115614DD639D21</span> </p>
                  
                  <p>Status: <br /><span>Expired</span></p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscountOrderReceipts;
