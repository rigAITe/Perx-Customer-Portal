import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../../../src/action/index.js";
import { findIndex } from "../../../../../../src/utils/index.js";
import event1 from "./../assets/events/event1.svg";

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
              <img src={event1} className="last-image" alt="product" />
            </span>``
          </Link>

          <Link to={{pathname:"/pages/entertainment/event/single/3", query: props.data}} className="btn-quickview" title="View Branches">
            {buttonTitle}
          </Link>
        </figure>
        <div className="product-details">
          <div className="mt-4 price-box width-100">
            <p className="text-uppercase medium-text muted-text">Event</p>
            <div className="bold medium-text text-dark">
              <p>{props.title}</p> <br></br>
              {props.date}
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
