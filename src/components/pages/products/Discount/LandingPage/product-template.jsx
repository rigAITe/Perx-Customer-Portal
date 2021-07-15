import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "react-modal";


import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../../../src/action/index.js";
import { findIndex, getPrice } from "../../../../../../src/utils/index.js";
import "./discountLanding.css";
// import ConfirmAddToCart from "../../../../common/modals/ConfirmAddToCart.jsx";
import DiscountModal from "../../../../common/modals/DiscountModal";

function ProductTypeFive(props) {
  const [showAddToCart, setshowAddToCart] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setshowAddToCart(true);
  };

  const closeModal = () => {
    setshowAddToCart(false);
  };

  let isInWishlist = props.product
    ? findIndex(props.wishlist, props.product.id)
      ? true
      : false
    : false;

  let {
    image,
    addClass,
    link = "default",
    noAction = false,
    product = {},
    addToCart,
    showQuickView,
  } = props;
  let priceMax,
    priceMin = 0;

  const onWishlistClick = (e) => {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(product);
    }
  };

  return (
    <div className={"product-default " + addClass} style={{padding: '7px'}}>
      <figure>
        <Link to={`${process.env.PUBLIC_URL}/products/${link}`}>
          <div className="lazy-overlay bg-3"></div>

          <LazyLoadImage
            alt="product"
            src={image}
            threshold={500}
            effect="black and white"
          />
        </Link>
      </figure>
      <div className="product-action ">
          <button className="btn btn-primary disc-button" onClick={(e) => openModal(e)}>
            View Branches
          </button>
        </div>
      <div className="">
        <div class="category-wrap mb-1">
          <div class="category-list">
            <a
              class="product-category docs-creator"
              // href="/categories/full-width"
            >
              Medplus
            </a>
          </div>
        </div>
        <div className="text-dark mb-1 medium-text">
          <b>David Wej</b>{" "}
        </div>
        <div>
          <p style={{fontSize: '13px'}}>3 Locations</p>
        </div>
        {/* <div className="product-action">
          <button className="btn btn-primary" onClick={(e) => openModal(e)}>
            View Item
          </button>
        </div> */}
      </div>
      {showAddToCart ? <DiscountModal hidemodal={() => closeModal()} /> : ""}

    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default connect(mapStateToProps, {
  addToCart,
  addToWishList,
  showQuickView,
})(ProductTypeFive);
