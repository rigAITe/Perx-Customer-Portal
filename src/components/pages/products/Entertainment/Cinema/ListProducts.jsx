import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../../../src/action/index.js";
import { findIndex } from "../../../../../../src/utils/index.js";
import silverbird from "./../assets/silverbird.svg";

function ListCinemaProducts(props) {
  const { addClass, imageA, buttonTitle = "", buttonLink = "" } = props;

  let isInWishlist = props.product
    ? findIndex(props.wishlist, props.product.id)
      ? true
      : false
    : false;

  const onWishlistClick = (e) => {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(props.product);
    }
  };

  return (
    <>
      <div className={`product-default ${addClass}`}>
        <figure>
          <Link to={`${process.env.PUBLIC_URL}/products/default`}>
            <span>
              <img src={imageA} className="first-image" alt="product" />
            </span>
            <span className="product-image-hover">
              <img src={silverbird} className="last-image" alt="product" />
            </span>
          </Link>

          <Link to={buttonLink} className="btn-quickview" title="View Branches">
            {buttonTitle}
          </Link>
        </figure>
        <div className="product-details">
          <div className="price-box width-100">
            <div>
              <p className="medium-text text-dark">
                Genesis Cinema, Palms, Lekki
              </p>
            </div>
            <div className="mt-2">
              <div className="pb-2 muted-text small-text">Location: Lekki</div>
              <div className="muted-text small-text">State: Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </>
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
})(ListCinemaProducts);
