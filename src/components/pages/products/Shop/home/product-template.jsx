import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../../../src/action/index.js";
import { findIndex, getPrice } from "../../../../../../src/utils/index.js";
import "./shop.css";
import ConfirmAddToCart from "../../../../common/modals/ConfirmAddToCart.jsx";

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
    <div className={"product-default " + addClass}>
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

      <div className="product-details">
        <div class="category-wrap mb-1">
          <div class="category-list">
            <a
              class="product-category docs-creator"
              href="/categories/full-width"
            >
              FASHION
            </a>
          </div>
        </div>
        <h3 className="product-title mb-1">
          <Link to={`${process.env.PUBLIC_URL}/products/${link}`}>
            {" "}
            David web Men casual shoe
          </Link>
        </h3>
        <div class="d-flex justify-content-center price-box width-100">
          <div class="flex-container">
            <div>
              <p>
                10,500
                <span class="ruby-tag"> Rubies</span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-action">
          {noAction === true ? (
            ""
          ) : (
            <Link
              to={`${process.env.PUBLIC_URL}/pages/wishlist`}
              className={`btn-icon-wish ${isInWishlist ? "checked" : ""}`}
              onClick={onWishlistClick}
            >
              <i className="icon-heart"></i>
            </Link>
          )}
          <button
            id="add-to-cart"
            // style={{ backgroundColor: "#0037b0" }}
            className="btn-add-cart"
            onClick={(e) => openModal(e)}
            // onClick={ () => addToCart( product ) }
          >
            ADD TO CART
          </button>
          {noAction === true ? (
            ""
          ) : (
            <Link
              to={`${process.env.PUBLIC_URL}/pages/shop/AUC_5PLf`}
              className="btn-quickview"
              title="Quick View"
            >
              <i className="fas fa-external-link-alt"></i>
            </Link>
          )}
        </div>
      </div>
      {showAddToCart ? <ConfirmAddToCart hidemodal={() => closeModal()} /> : ""}
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
