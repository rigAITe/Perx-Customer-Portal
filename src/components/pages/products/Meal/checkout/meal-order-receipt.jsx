import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuctionContext } from "../../../../../context/Auctions";

import Breadcrumb from "../../../../../../src/components/common/breadcrumb.jsx";

import dodo from "./../assets/company-logos/dodo.svg";
import "./../meal.css";

function MealOrderReceipts() {
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
              <div
                class="d-flex justify-content-between text-dark col-12 alert alert-secondary"
                role="alert"
              >
                <div>Beef Shawarma with Double Hotdog x2</div>
                <div class="black-text subtext">
                  2,000 <span class="ruby-tag">Rubies</span>
                </div>
              </div>
              <div
                class="d-flex justify-content-between text-dark col-12 alert alert-secondary"
                role="alert"
              >
                <div>Beef Shawarma with Double Hotdog x2</div>
                <div class="black-text subtext">
                  2,000 <span class="ruby-tag">Rubies</span>
                </div>
              </div>
              <div className="card receipt-card">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="opacity subtext">Order No:</td>
                      <td className="subtext">201283</td>
                    </tr>
                    <tr>
                      <td className="opacity subtext">Date</td>
                      <td className="subtext">Mon,9 Nov, 2020 / 1048 AM</td>
                    </tr>
                    <tr>
                      <td className="opacity subtext">Delivery Address</td>
                      <td className="subtext">
                        66, Old Yaba Road, Yaba , Lagos
                      </td>
                    </tr>
                    <tr>
                      <td className="opacity subtext">Total Cost</td>
                      <td className="subtext">10,500 Rubies</td>
                    </tr>
                    <tr>
                      <td className="opacity subtext">Delivery Cost</td>
                      <td className="subtext">0 Rubies</td>
                    </tr>
                    <tr>
                      <td className="opacity subtext">Grand Total</td>
                      <td className="subtext">10,500 Rubies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <div className="card cap-table">
                <div className="card-body">
                  <h5>Item Info</h5>
                  <div className="row d-flex">
                    <img className="modal-logo" src={dodo} alt="Logo" />
                    <h6 className="subtext col-md-6 ml-2 text-dark ruby-tag">
                      Chicken Republic - E-centre - Big Chops.
                    </h6>
                  </div>
                  <p>
                    <div>Price</div>
                    <div class="black-text bold subtext">
                      2,000 <span class="ruby-tag">Rubies</span>
                    </div>{" "}
                  </p>
                  <p>
                    <div>Delivery Type</div>
                    <div class="black-text bold subtext">Delivery</div>{" "}
                  </p>
                  <p>
                    <div>Voucher Number</div>
                    <div class="black-text bold subtext">
                      AU115614DD639D21
                    </div>{" "}
                  </p>
                  <p>
                    <div>Status</div>
                    <div class="black-text bold subtext">Delivered</div>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealOrderReceipts;
