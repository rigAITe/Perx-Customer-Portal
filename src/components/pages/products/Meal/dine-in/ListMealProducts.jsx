import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  addToWishList,
  showQuickView,
} from "../../../../../action/index.js";
import { findIndex } from "../../../../../utils/index.js";
import headerPlate from "./../assets/headerPlate.svg";
import ListOfMealLocations from "../../../../../../src/components/common/modals/ListOfMealLocations.jsx";
import "./../meal.css";

function ListDiscountProducts(props) {
  const { addClass, product, imageA, imageB } = props;
  const [showLocationList, setShowLocationList] = useState(false);

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

  const openModal = () => {
    setShowLocationList(true);
  };

  const closeModal = () => {
    setShowLocationList(false);
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
              <img src={headerPlate} className="last-image" alt="product" />
            </span>
          </Link>

          <Link
            onClick={() => openModal()}
            className="btn-quickview"
            title="View Branches"
          >
            View Branches
          </Link>
        </figure>
        <div className="product-details">
          <div className="price-box width-100">
            <div>
              <p className="muted-text">
                Weekdays: 9:00am - 5:pm, Weekends 10:00am-7:00pm
              </p>
            </div>
            <div>
              <p className="text-dark font-weight-bold">Chicken Republic</p>
            </div>
            <p className="muted-text">
              No 66, Old Yaba Road, Off Herbert Macoulay Way
            </p>
          </div>
        </div>
        {showLocationList ? (
          <ListOfMealLocations close={() => setShowLocationList(false)} />
        ) : (
          ""
        )}
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
})(ListDiscountProducts);
