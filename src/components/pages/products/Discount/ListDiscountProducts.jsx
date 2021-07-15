import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../action/index.js";
import { findIndex } from "../../../../utils/index.js";

import ListOfLocations from "../../../common/modals/ListOfLocations.jsx";

import "./discount.css";

function ListDiscountProducts(props) {
  const { addClass, product, showQuickView, addToCart, discount } = props;
  const [showLocationList, setShowLocationList] = useState(false);

  let isInWishlist = props.product
    ? findIndex(props.wishlist, props.product.id)
      ? true
      : false
    : false;
  if (!product) return <div></div>;

  const onWishlistClick = (e) => {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(props.product);
    }
  };

  const openModal = () => {
    setShowLocationList(true);
    console.log(showLocationList)
  };

  const closeModal = () => {
    setShowLocationList(false);
  };

  return (
    <>
      <div className={`product-default ${addClass}`}>
        <figure>
          <Link to={`${process.env.PUBLIC_URL}/products/default/${product.id}`}>
            <span>
              <img
                src={process.env.PUBLIC_URL + "/" + product.pictures[0]}
                className="first-image"
                alt="product"
              />
            </span>
            {product.pictures[1] ? (
              <span className="product-image-hover">
                <img
                  src={process.env.PUBLIC_URL + "/" + product.pictures[1]}
                  className="last-image"
                  alt="product"
                />
              </span>
            ) : (
              ""
            )}
          </Link>

          <button
            onClick={() => openModal()}
            className="btn-quickview"
            title="View Branches"
          >
            View Branches
          </button>
        </figure>
        <div className="product-details">
          <div className="price-box width-100">
            <div>
              <p className="text-uppercase muted-text">FASHION</p>
            </div>
            <div>
              <p className="text-dark font-weight-bold">David Wej</p>
            </div>
            <p className="muted-text">3 Locations</p>
          </div>
        </div>
      </div>
      {showLocationList ? (
        <ListOfLocations close={() => setShowLocationList(false)} />
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

export default connect(mapStateToProps, {
  addToCart,
  addToWishList,
  showQuickView,
})(ListDiscountProducts);
