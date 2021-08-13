import React from "react";
import Countdown from "react-countdown";
import moment from "moment";

// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// import {
//   addToCart,
//   addToWishList,
//   showQuickView,
// } from "../../../../../action/index.js";
import { findIndex } from "../../../../../utils/index.js";

function HomeDisplayProducts(props) {
  const { product } = props;
  //   let isInWishlist = props.product
  //     ? findIndex(props.wishlist, props.product.id)
  //       ? true
  //       : false
  //     : false;
  // //   if (!product) return <div></div>;

  //   const onWishlistClick = (e) => {
  //     if (!isInWishlist) {
  //       e.preventDefault();
  //       props.addToWishList(props.product);
  //     }
  //   };
  const Completionist = () => (
    <span className="badge badge-danger">Expired!</span>
  );

  return (
    <div className="col-6 col-md-3 p-0" key={"flex-grid" + "1 increasing"}>
      <div className="skel-pro skel-pro-grid"></div>{" "}
      <div class="product-default inner-quickview inner-icon pl-3 pr-3">
        <figure>
          <a
            href={`/products/auction/${product.auction_ref_no}`}
            // href={`auction/single/${product.auction_ref_no}`}
            class="docs-creator"
          >
            <span>
              <img
                src="/assets/images/products/cap-1.jpg"
                class="first-image"
                alt="product"
              />
            </span>

            <span class="product-image-hover">
              <img
                src="/assets/images/products/cap-2.jpg"
                class="last-image"
                alt="product"
              />
            </span>
          </a>

          <div class="label-group"></div>
          <a
            class="btn-quickview docs-creator"
            title="Quick View"
            href={`/products/auction/${product.auction_ref_no}`}
            // href={`auction/single/${product.auction_ref_no}`}
          >
            Quick View
          </a>
        </figure>

        <div class="product-details">
          <div>
            <div class="category-wrap">
              <div class="category-list">
                <a
                  class="product-category docs-creator"
                  href="/categories/full-width"
                >
                  {product.category_name}
                </a>
              </div>
            </div>
            <h2 class="product-title">
              <a
                href={`/products/auction/${product.auction_ref_no}`}
                // href={`auction/single/${product.auction_ref_no}`}
                class="docs-creator"
              >
                {product.auction_name}
              </a>
            </h2>
            {/* <div class="ratings-container">
              <div class="product-ratings">
                <span class="ratings" style={{ width: "100%" }}></span>
                <span class="tooltiptext tooltip-top">5.00</span>
              </div>
            </div> */}
          </div>
          <div class="price-box width-100">
            <div class="flex-container">
              <div>
                <p>
                  {product.start_bid}
                  <span class="ruby-tag"> Rubies</span>
                  <p style={{paddingTop: '10px'}}>{product.delivery_method}</p>
                </p>
              </div>
              <div>
                <p>
                  <b>{product.bid_count} bids</b>
                </p>
                <p>
                  <p>
                    <b>Expires:</b>
                  </p>
                  <Countdown date={product.end_date}>
                    <Completionist />
                  </Countdown>
                </p>
              </div>
            </div>
            {/* <p>{product.delivery_method}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = (state, props) => {
//   return {
//     wishlist: state.wishlist.list ? state.wishlist.list : [],
//   };
// };

export default HomeDisplayProducts;
