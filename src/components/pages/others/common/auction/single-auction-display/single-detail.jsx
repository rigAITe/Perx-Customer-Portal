import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { findIndex, getPrice } from "../../../../../../../src/utils/index.js";
import NoticeContainer from "../../../../../../../src/components/common/partials/notify-bidder.jsx";
import { AuctionContext } from "../../../../../../context/Auctions.js";
import LoaderContext from "../../../../../../context/Loading.js";
import Loading from "../../../../../features/Loader/Loading.jsx";
import {
  isStateHandled,
  formatNumber,
} from "../../../../../../../src/utils/index.js";
import swal from "sweetalert";
import SuccessfulBidModal from "../../../../../common/modals/SuccessfulBidModal.jsx";

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
      {loading ? <Loading /> : ""}
      <div className="skel-pro skel-detail"></div>
      <div className="product-single-details">
        <h1 className="product-title">{product.auction_name}</h1>
        <hr className="divider" />
        <div className="product-desc">
          <p>{product.auction_description}</p>
        </div>
        <div className="row less-margin">
          <div className="col-md-3 col-lg-3 col-6">
            <div>
              <p>Current bid</p>
              <p className="black-text bold">
                {product.current_bid
                  ? formatNumber(props.product.current_bid)
                  : ""}{" "}
                <span className="ruby-tag">Rubies</span>
              </p>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-6">
            <div>
              <p>Bids</p>
              <p className="black-text bold">
                {product.bid_count} bids{" "}
                <span className="ruby-tag">
                  <Link
                    className="blue-anchor"
                    to={`${process.env.PUBLIC_URL}/pages/bid_history`}
                    href="#"
                  >
                    View bids
                  </Link>
                </span>
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
                <label htmlFor="email opacity">Enter your maximum bid</label>
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
              <p style={{ fontSize: 11 }}>Enter {product.current_bid
                  ? formatNumber(props.product.current_bid)
                  : ""}{" "} or more</p>
            </div>
            <div className="col-md-6 col-lg-6 col-12">
              <div className="mt-25">
                <Link
                  to="#"
                  className="btn btn-primary add-cart"
                  title="Place Bid"
                  onClick={() => callPlaceBid()}
                >
                  Place bid
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="divider mb-1" />

        {/* <div className="product-single-share">
          <div className="social-icons mr-2">
            <Link
              to="#"
              className="social-icon social-facebook icon-facebook"
              target="_blank"
            ></Link>
            <Link
              to="#"
              className="social-icon social-twitter icon-twitter"
              target="_blank"
            ></Link>
            <Link
              to="#"
              className="social-icon social-linkedin fab fa-linkedin-in"
              target="_blank"
            ></Link>
            <Link
              to="#"
              className="social-icon social-gplus fab fa-google-plus-g"
              target="_blank"
            ></Link>
            <Link
              to="#"
              className="social-icon social-mail icon-mail-alt"
              target="_blank"
            ></Link>
          </div>
          <Link
            to={`${process.env.PUBLIC_URL}/pages/wishlist`}
            className={`paction add-wishlist ${
              isInWishlist === true ? "checked" : ""
            }`}
            title={isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
            onClick={onWithWishClick}
          >
            {isInWishlist ? "Go to Wishlist" : "Add to Wishlist"}
          </Link>
        </div> */}
      </div>
      {showSuccessModal ? (
        <SuccessfulBidModal
          amount={inputs.amount}
          messageTitle="Bid Submitted Successully"
          messageBody="Your bid has been submitted"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SingleDetail;
