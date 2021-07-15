import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  isStateHandled,
  formatNumber,
} from "./../../../../../../src/utils/index.js";
import { AuctionContext } from "../../../../../context/Auctions";
import moment from "moment";

import { findIndex, getPrice } from "../../../../../utils";
import { quickAddToCart, addToWishList } from "../../../../../action";

import AddressBar from "../../../../common/address-bar";
import LoaderContext from "../../../../../context/Loading";
import BidWinner from "../../../../common/partials/bid-winner";
import Loading from "../../../../features/Loader/Loading";
import swal from "sweetalert";
import SuccessModalWithButton from "../../../../common/modals/SuccessModalWithButton.jsx";

function AuctionDetail(props) {
  const { checkoutOnPickup, checkoutState, setOrderReceipt } = useContext(
    AuctionContext
  );
  const { loading } = useContext(LoaderContext);

  const [deliveryPage, setDeliveryPage] = useState(null);
  const [currentPage, setCurrentPage] = useState("pickup");
  const [showPickupInfoPage, setPickupInfoPage] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  let history = useHistory();

  const { wishlist, product, isSticky = false, auction } = props;
  let isInWishlist = findIndex(wishlist, product.id) ? true : false;
  let maxPrice,
    minPrice = 0;

  if (product.variants) {
    maxPrice = getPrice(product.variants);
    minPrice = getPrice(product.variants, "min");
  }

  const selectGroup = (e) => {
    e.preventDefault();
    if (props.noSelect === undefined)
      document
        .querySelector(".product-single-gallery .owl-item.active img")
        .setAttribute("src", e.currentTarget.getAttribute("data-src"));

    e.currentTarget.parentElement.parentElement.querySelector(".active") &&
      e.currentTarget.parentElement.parentElement
        .querySelector(".active")
        .classList.remove("active");
    e.currentTarget.parentElement &&
      e.currentTarget.parentElement.classList.add("active");
  };

  function addToCart(e) {
    e.preventDefault();
    let val = 1;
    if (e.currentTarget.parentElement.querySelector(".horizontal-quantity"))
      val = parseInt(
        e.currentTarget.parentElement
          .querySelector(".horizontal-quantity")
          .getAttribute("value")
      );
    props.quickAddToCart(props.product, val);
  }

  function onWithWishClick(e) {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(props.product);
    }
  }

  const setDelieveryTypes = () => {
    if (
      product.redemption_method &&
      product.redemption_method[0].id === 1 &&
      product.redemption_method[1].id === 2
    ) {
      setDeliveryPage("both");
      return;
    }

    if (product.redemption_method && product.redemption_method[0].id === 1) {
      setDeliveryPage("pickup");
      return;
    }

    if (product.redemption_method && product.redemption_method[0].id === 2) {
      setDeliveryPage("delivery");
      setCurrentPage("delivery");
      setPickupInfoPage(false);
      return;
    }
  };

  useEffect(() => {
    setDelieveryTypes();
  });

  const switchTabs = (id) => {
    switch (id) {
      case "pickup":
        document.getElementById(id).classList.add("pickup-btn");
        document.getElementById("delivery").classList.remove("pickup-btn");

        setPickupInfoPage(true);
        setCurrentPage("pickup");
        break;

      case "delivery":
        document.getElementById(id).classList.add("pickup-btn");
        document.getElementById("pickup").classList.remove("pickup-btn");

        setPickupInfoPage(false);
        setCurrentPage("delivery");
        break;
      default:
        break;
    }
  };

  const checkout = () => {
    if (currentPage === "pickup") {
      const redemption_method = 1;

      const data = {
        auction_ref_no: product.auction_ref_no,
        redemption_method,
        delivery_address: product.address,
        city_id: product.city_id,
        phone_no: product.phone,
        email: product.email,
      };
      checkoutOnPickup(data);
      return;
    }

    history.push(`${process.env.PUBLIC_URL}/pages/order_receipts`);
  };

  useEffect(() => {
    console.log(checkoutState.data);
    if (
      isStateHandled(checkoutState) &&
      !isStateHandled(checkoutState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(checkoutState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (isStateHandled(checkoutState) && isStateHandled(checkoutState).status) {
      const data = {
        date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        order_no: checkoutState.data.data.tracking_no,
        pickup_location: product.address,
        total_cost: product.current_bid,
        voucher_no: checkoutState.data.data.voucher_no,
        redemption_type: product.delivery_type,
        status: "expired",
        delivery_cost: 0,
      };

      setOrderReceipt(data);
      setShowSuccess(true);
    }
  }, [checkoutState.data]);

  return (
    <>
      {loading ? <Loading /> : ""}
      <div className="skel-pro skel-detail"></div>
      <div className="product-single-details">
        <div className="added-margin-rem">
          <BidWinner text="You won this bid" width={"15rem"} height={22} />
        </div>
        <h1 className="product-title auction-winner">{product.auction_name}</h1>
        <div className="less-margin">
          <p>
            Location:{" "}
            <span style={{ color: "black" }}>{product.City_name}</span>
          </p>
          <div className="mb-1"></div>
          <div>
            <div>
              <p>Your Bid:</p>
              <p className="black-text bold">
                {product.current_bid ? formatNumber(product.current_bid) : ""}{" "}
                <span className="ruby-tag">Rubies</span>
              </p>
            </div>
          </div>
        </div>

        <div className="product-action">
          <div className="flex-container width-23rem">
            {deliveryPage === "pickup" || deliveryPage === "both" ? (
              <div>
                <div>
                  <button
                    id="pickup"
                    onClick={() => switchTabs("pickup")}
                    type="button"
                    className={`btn btn-outline-secondary pickup-btn`}
                  >
                    Pick up
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            {deliveryPage === "delivery" || deliveryPage === "both" ? (
              <div>
                <div>
                  <div>
                    <button
                      id="delivery"
                      onClick={() => switchTabs("delivery")}
                      type="button"
                      className={`btn btn-outline-secondary delivery-btn`}
                    >
                      Delivery
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="mb-1"></div>
          {showPickupInfoPage ? (
            <div className="pickup-locations">
              <p>Pick up locations info</p>
              <AddressBar text2={product.address} text1="Address" />
              <AddressBar text2={product.phone} text1="Phone number:" />
              <AddressBar text2={product.email} text1="Email address" />
            </div>
          ) : (
            ""
          )}

          <div className="mb-2"></div>
          <button
            to="#"
            className="btn btn-primary add-cart"
            title="Place Bid"
            onClick={() => checkout()}
          >
            Checkout
          </button>
        </div>
      </div>
      {showSuccess === true ? (
        <SuccessModalWithButton
          hidemodal={() => setShowSuccess(false)}
          data={{
            messageTitle: `Order Successful`,
            messageBody: `Your order has been submited successfully`,
            buttonText: `View Order Details`,
            link: `${process.env.PUBLIC_URL}/pages/order_receipts`,
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = (state, props) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default connect(mapStateToProps, { quickAddToCart, addToWishList })(
  AuctionDetail
);
