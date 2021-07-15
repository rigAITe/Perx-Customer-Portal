import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../action/index.js";
import { findIndex } from "../../../../utils/index.js";
import kwese from "./assets/company-logos/kwese.svg";

import "./airtimebills.css";

function ListAirtimeBillsProducts(props) {
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
              <img src={kwese} className="last-image" alt="product" />
            </span>
          </Link>

          <Link to={buttonLink} className="btn-quickview" title="View Branches">
            {buttonTitle}
          </Link>
        </figure>
        <div className="product-details">
          <div className="price-box width-100">
            <div>
              <p className="muted-text text-uppercase">Cable Bills</p>
            </div>
            <div>
              <p className="text-dark small-text">
                DSTV Subscription - Compact
              </p>
            </div>
            <div>
              <p className="text-dark medium-text">
                10, 500 <span className="ruby-tag">Rubies</span>
              </p>
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
})(ListAirtimeBillsProducts);
