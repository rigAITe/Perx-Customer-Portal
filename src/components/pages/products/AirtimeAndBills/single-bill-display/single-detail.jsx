import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { findIndex, getPrice } from "../../../../../../src/utils/index.js";
import NoticeContainer from "../../../../../../src/components/common/partials/notify-bidder.jsx";
import {
  isStateHandled,
  formatNumber,
} from "../../../../../../src/utils/index.js";
import swal from "sweetalert";
import { AuctionContext } from "../../../../../context/Auctions.js";
import Loading from "../../../../features/Loader/Loading.jsx";
import LoaderContext from "../../../../../context/Loading.js";
// import SuccessfulBidModal from "../../../../../common/modals/SuccessfulBidModal.jsx";
import "../airtimebills.css";

function SingleDetail(props) {
  const { placeBid, placeBidState, setInputs, inputs } = useContext(
    AuctionContext
  );
  const { loading } = useContext(LoaderContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { wishlist, product, isSticky = false, auction, auction_bid } = props;
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

  const callPlaceBid = () => {
    const data = {
      auction_ref_no: product.auction_ref_no,
      member_no: product.member_no,
      amount: inputs.amount,
    };

    placeBid(data);
  };

  useEffect(() => {
    isStateHandled(placeBidState);
    if (
      isStateHandled(placeBidState) &&
      !isStateHandled(placeBidState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(placeBidState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (isStateHandled(placeBidState) && isStateHandled(placeBidState).status) {
      setShowSuccessModal(true);
    }
  }, [placeBidState.data]);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      {/* {loading ? <Loading /> : ""} */}
      <div className="skel-pro skel-detail"></div>
      <div className="product-single-details">
        <div className="product-desc">
          <h6 className="medium-text">DSTV Subscription - Compact</h6>
        </div>
        <div className="row less-margin">
          <div className="col-md-3 col-lg-3 col-6">
            <div>
              <p className="black-text bold">
                10,500 <span className="ruby-tag">Rubies</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          {product.highest_bidder ? <NoticeContainer width={"30rem"} /> : ""}
        </div>

        <div className="product-action">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12">
              <div>
                <label htmlFor="email opacity">
                  Enter your DSTV Smartcard Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Bid Amount"
                  required
                  name="amount"
                  onChange={handleInputChange}
                  value={inputs.amount}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12">
              <Link
                to={`${process.env.PUBLIC_URL}/pages/cablebills/single`}
                className="btn btn-primary add-cart"
                title="Place Bid"
                // onClick={() => callPlaceBid()}
              >
                Redeem
              </Link>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 col-lg-6 col-12">
              <Link
                to={`${process.env.PUBLIC_URL}/pages/cablebills/single`}
                className="btn btn-primary add-cart"
                title="Place Bid"
                // onClick={() => callPlaceBid()}
              >
                Validating... <i className="fas fa-hourglass-start"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <div>
              <label htmlFor="email opacity">Email Address</label>
              <input
                type="number"
                className="form-control"
                placeholder="Bid Amount"
                required
                name="amount"
                onChange={handleInputChange}
                value={inputs.amount}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <div>
              <label htmlFor="email opacity">Phone Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Bid Amount"
                required
                name="amount"
                onChange={handleInputChange}
                value={inputs.amount}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/cablebills/single`}
              className="btn btn-primary add-cart"
              title="Place Bid"
              // onClick={() => callPlaceBid()}
            >
              Validate
            </Link>
          </div>
        </div>
      </div>
      {/* {showSuccessModal ? (
        <SuccessfulBidModal
          amount={inputs.amount}
          messageTitle="Bid Submitted Successully"
          messageBody="Your bid has been submitted"
        />
      ) : (
        ""
      )} */}
    </>
  );
}

export default SingleDetail;
