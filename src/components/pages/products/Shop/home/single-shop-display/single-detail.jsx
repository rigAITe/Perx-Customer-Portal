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

import "./../shop.css";

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
        <div className="col-md-8 row less-margin">
          <h4>
            Nike Air Jordan 13 XIII Retro Low Clot Terracotta Sepia Size 13
          </h4>
          <div>
            <p className="black-text bold">
              10,500 <span className="ruby-tag">Rubies</span>
            </p>
          </div>
        </div>
        <div className="my-2 text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero,
          ducimus dolorum minima dolores laudantium at aspernatur a cumque,
          porro quos cum tenetur necessitatibus iusto laboriosam inventore
          aperiam temporibus ratione.
        </div>
        <div className="my-5 d-flex justify-content-between">
          <div className="">
            <p className="text-dark">Size:</p>
            <div>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary active-btn`}
              >
                XL
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                L
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                M
              </button>
            </div>
          </div>
          <div className="">
            <p className="text-dark">Colour:</p>
            <div>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary active-btn options-btn`}
              >
                Yellow
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary options-btn`}
              >
                Black
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary options-btn`}
              >
                Green
              </button>
            </div>
          </div>
        </div>
        <div className="my-3">
          <p className="text-dark">Delivery Method</p>
          <div>
            <button
              id="pickup"
              type="button"
              className={`mr-2 btn btn-outline-secondary active-btn options-btn`}
            >
              Pickup
            </button>
            <button
              id="pickup"
              type="button"
              className={`mr-2 btn btn-outline-secondary options-btn`}
            >
              Delivery
            </button>
          </div>
        </div>
        <div className="my-3 p-0 col-md-8">
          <div className="text-dark">Pickup Locations</div>
          <div className="select-custom">
            <select
              name="orderby"
              className="form-control"
              defaultValue="menu_order"
            >
              <option value="menu_order" selected>
                Lagos
              </option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="date">Sort by newness</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>
        </div>
        <hr className="divider" />
        <div className="d-flex">
          <div className={`mt-1 product-single-qty`}>
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <span className="input-group-btn input-group-prepend">
                <button
                  className="btn btn-outline btn-down-icon bootstrap-touchspin-down"
                  type="button"
                ></button>
              </span>
              <input
                className="horizontal-quantity form-control"
                type="number"
                min="1"
                max="5"
                value="1"
              />
              <span className="input-group-btn input-group-append">
                <button
                  className="btn btn-outline btn-up-icon bootstrap-touchspin-up"
                  type="button"
                ></button>
              </span>
            </div>
          </div>
          <div className="mt-1 col-md-8">
            <Link
              to="#"
              className="col-md-8 btn btn-primary"
              title="Add to Cart"
            >
              Add to Cart
            </Link>
          </div>
        </div>
        <hr className="divider" />
        <div className="product-single-share">
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
        </div>
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
