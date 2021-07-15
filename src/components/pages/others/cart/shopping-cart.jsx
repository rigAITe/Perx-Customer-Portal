import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { SlideToggle } from "react-slide-toggle";

import Breadcrumb from "../../../common/breadcrumb";

import {
  removeFromCart,
  clearCart,
  moveFromCartToWishlist,
} from "../../../../action";

import "./cart.css";
import RemoveCartItem from "../../../common/modals/removeCartItem";

function ShoppingCart(props) {
  const { cartItmes, removeFromCart } = props;
  const [showRemoveCartModal, setshowRemoveCartModal] = useState(false);
  const clearCart = (e) => {
    e.preventDefault();

    if (props.cartItmes.length > 0) props.clearCart();
  };

  const moveToWishlist = (e, item) => {
    e.preventDefault();
    props.moveFromCartToWishlist(item);
  };
  
  const openRemoveCartModal = (e) => {
      e.preventDefault();
      setshowRemoveCartModal(true);
  };
  
  const closeRemoveCartModal = () => {
    setshowRemoveCartModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Customer Portal - Shopping Cart </title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Shopping Cart</h1>

      <div className="main">
        <Breadcrumb current="Shopping Cart" />

        <div className="container">
          {cartItmes.length === 0 ? (
            <div className="align-left mt-3">
              <div className="cart-title ">
                <h2>My Shopping Cart</h2>
              </div>

              <div className="box-content">
                <table
                  className="table-cart"
                  data-pagination="no"
                  data-per-page="5"
                  data-page="1"
                  data-id=""
                  data-token=""
                >
                  <thead className="d-none">
                    <tr>
                      <th className="product-thumbnail"></th>

                      <th className="product-name">
                        <span className="nobr">Product</span>
                      </th>

                      <th className="product-price">
                        <span className="nobr">price</span>
                      </th>

                      <th className="product-stock-status">
                        <span className="nobr">Stock status</span>
                      </th>

                      <th className="product-add-to-cart">
                        <span className="nobr">Actions</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="wishlist-items-wrapper">
                    <tr className="border-0 py-0">
                      <td colSpan="6" className="px-3 py-2 text-center">
                        <i className="icon-bag-1 cart-empty"></i>
                      </td>
                    </tr>
                    <tr className="border-0 py-0">
                      <td
                        colSpan="6"
                        className="px-3 py-2 text-center cart-empty"
                      >
                        No products added to the cart
                      </td>
                    </tr>
                    <tr className="border-0 py-0">
                      <td colSpan="6" className="px-3 text-center">
                        <Link
                          className="btn btn-go-shop"
                          to={`${process.env.PUBLIC_URL}/categories/full-width`}
                        >
                          GO SHOP
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <>
              <h5 className="mt-4">My Shopping Cart</h5>

              <div className="row">
                <div className="col-lg-9">
                  <div className="wishlist-table-container">
                    <table className="table table-order table-wishlist">
                      <thead>
                        <tr>
                          <th className="product-col">Image</th>
                          <th className="price-col">Redemption Type</th>
                          <th className="qty-col">Unit Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItmes.map((item, index) => (
                          <React.Fragment key={"CartItem" + index}>
                            <tr className="product-row">
                              <td className="product-col">
                                <figure className="product-image-container">
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                                    className="product-image"
                                  >
                                    <img
                                      src={`${process.env.PUBLIC_URL}/${item.pictures[0]}`}
                                      alt="product"
                                    />
                                  </Link>

                                  <Link
                                    to="#"
                                    className="btn-remove icon-cancel"
                                    title="Remove Product"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      openRemoveCartModal(e);
                                      return;
                                      removeFromCart(item);
                                    }}
                                  ></Link>
                                </figure>
                                <h2 className="product-title">
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                                  >
                                    Premium Spandex Cotton Turtle Neck Colour:
                                    Red / Size M13.5
                                  </Link>
                                </h2>
                              </td>
                              <td>Delivery/Pickup</td>
                              <td>10,500 Rubies</td>
                              <td>
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
                                </div>
                              </td>
                              <td>10,500 Rubies</td>
                            </tr>
                            <tr className="product-action-row">
                              <td colSpan="5" className="clearfix">
                                <div className="float-left">
                                  <Link
                                    to="#"
                                    className="btn-move"
                                    onClick={(e) => moveToWishlist(e, item)}
                                  >
                                    Move to Wishlist
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>

                      <tfoot>
                        <tr>
                          <td colSpan="5" className="clearfix">
                            <div className="float-left">
                              <Link
                                to={`${process.env.PUBLIC_URL}/categories/full-width`}
                                className="btn btn-outline-secondary"
                              >
                                Continue Shopping
                              </Link>
                            </div>

                            <div className="float-right">
                              <Link
                                to="#"
                                className="mr-2 btn btn-outline-secondary btn-clear-cart"
                                onClick={clearCart}
                              >
                                Clear Shopping Cart
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-outline-secondary btn-update-cart"
                              >
                                Update Shopping Cart
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="wishlist-table-container">
                    <h5>Summary</h5>
                    <table className="table table-totals">
                      <tbody>
                        <tr>
                          <td>Grand Total</td>
                          <td>10,500 Rubies</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="checkout-methods">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/checkout/shipping`}
                        className="cart-checkout-btn btn btn-block btn-sm btn-primary"
                      >
                        Go to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mb-6"></div>
        {showRemoveCartModal ? <RemoveCartItem hidemodal={() => closeRemoveCartModal()} /> : ""}
      </div>
    </>
  );
}

const getCartTotal = (items) => {
  let total = 0;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      total += parseInt(items[i].sum, 10);
    }
  }
  return total;
};

const mapStateToProps = (state) => {
  return {
    cartItmes: state.cartList.cart ? state.cartList.cart : [],
  };
};

export default connect(mapStateToProps, {
  removeFromCart,
  clearCart,
  moveFromCartToWishlist,
})(ShoppingCart);
