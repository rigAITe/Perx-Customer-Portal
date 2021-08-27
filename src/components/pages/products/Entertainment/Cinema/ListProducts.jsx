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
  const { addClass, imageA, buttonTitle, buttonLink = "" } = props;

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
          {/* <Link to={`${process.env.PUBLIC_URL}/products/default`}> */}
            <span>
              <img src={imageA} className="first-image" alt="product" />
            </span>
            <span className="product-image-hover">
              <img src={silverbird} className="last-image" alt="product" />
            </span>
          {/* </Link> */}
          <Link to={{pathname:"/pages/entertainment/cinema/single/1", query: {
            data: props.data,
            cinema: props.name
          }}} className="btn-quickview" title="View Branches">
            {buttonTitle}
          </Link>
        </figure>
        <div className="product-details">
          <div className="price-box width-100">
            <div>
              <p className="medium-text text-dark">
                {props.name}
              </p>
            </div>
            <div className="mt-2">
              <div className="pb-2 muted-text small-text">Location: {props.location}</div>
              <div className="muted-text small-text">State: {props.state}</div>
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
