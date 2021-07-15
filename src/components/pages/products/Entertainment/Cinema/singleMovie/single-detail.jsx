import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { findIndex, getPrice } from "../../../../../../../src/utils/index.js";
import LoaderContext from "../../../../../../context/Loading.js";
import Loading from "../../../../../features/Loader/Loading.jsx";
import {
  isStateHandled,
  formatNumber,
} from "../../../../../../../src/utils/index.js";
import swal from "sweetalert";
import SuccessfulBidModal from "../../../../../common/modals/SuccessfulBidModal.jsx";

import "./singleMovie.css";

function SingleDetail(props) {
  const { loading } = useContext(LoaderContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { wishlist, product, isSticky = false, auction, auction_bid } = props;
  let isInWishlist = findIndex(wishlist, product.id) ? true : false;
  let maxPrice,
    minPrice = 0;

  if (product.variants) {
    maxPrice = getPrice(product.variants);
    minPrice = getPrice(product.variants, "min");
  }

  const selectGroup = (e) => {
    e.preventDefault();
    if (props.noSelect === undefined)
      document
        .querySelector(".product-single-gallery .owl-item.active img")
        .setAttribute("src", e.currentTarget.getAttribute("data-src"));

    e.currentTarget.parentElement.parentElement.querySelector(".active") &&
      e.currentTarget.parentElement.parentElement
        .querySelector(".active")
        .classList.remove("active");
    e.currentTarget.parentElement &&
      e.currentTarget.parentElement.classList.add("active");
  };

  function addToCart(e) {
    e.preventDefault();
    let val = 1;
    if (e.currentTarget.parentElement.querySelector(".horizontal-quantity"))
      val = parseInt(
        e.currentTarget.parentElement
          .querySelector(".horizontal-quantity")
          .getAttribute("value")
      );
    props.quickAddToCart(props.product, val);
  }

  function onWithWishClick(e) {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(props.product);
    }
  }

  return (
    <>
      {/* {loading ? <Loading /> : ""} */}
      <div className="skel-pro skel-detail"></div>
      <div className="product-single-details">
        <div className="col-md-8 row less-margin">
          <h4>Zack Snyder's Justice League</h4>
        </div>
        <div className="black-text bold">Show time</div>
        <div className="my-3">
          <div className="mb-2">
            <p className="text-dark small-text">Friday, 12th April:</p>
            <div>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary active-btn`}
              >
                6:10am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                8:35am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                14:35pm
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                8:35am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                14:35pm
              </button>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-dark small-text">Saturday, 13th April:</p>
            <div>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary active-btn`}
              >
                6:10am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                8:35am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                14:35pm
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                8:35am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                14:35pm
              </button>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-dark small-text">Sunday, 14th April:</p>
            <div>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary active-btn`}
              >
                6:10am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                8:35am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                14:35pm
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                8:35am
              </button>
              <button
                id="pickup"
                type="button"
                className={`mr-2 btn btn-outline-secondary`}
              >
                14:35pm
              </button>
            </div>
          </div>
        </div>

        <h5 className="mt-3">Tickets</h5>
        <div className="p-0 col-lg-12">
          <div className="wishlist-table-container">
            <table className="table table-order table-wishlist">
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adult</td>
                  <td>
                    <div>
                      10,500
                      <span class="ruby-tag"> Rubies</span>
                    </div>
                  </td>
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
                  <td>
                    <div>
                      10,500
                      <span class="ruby-tag"> Rubies</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Student</td>
                  <td>
                    <div>
                      10,500
                      <span class="ruby-tag"> Rubies</span>
                    </div>
                  </td>
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
                  <td>
                    <div>
                      10,500
                      <span class="ruby-tag"> Rubies</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Children</td>
                  <td>
                    <div>
                      10,500
                      <span class="ruby-tag"> Rubies</span>
                    </div>
                  </td>
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
                  <td>
                    <div>
                      10,500
                      <span class="ruby-tag"> Rubies</span>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="4" className="clearfix">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="">Full Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="d-flex mb-1 align-items-end col-md-6">
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/full-width`}
                          className="btn btn-outline-primary"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-dark bold medium-text">Grand Total</div>
          <div className="text-dark bold mb-2">
            10,500
            <span class="ruby-tag"> Rubies</span>
          </div>{" "}
          <div>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/categories/full-width`}
              className="btn btn-primary"
            >
              Redeem
            </Link>
          </div>
        </div>
      </div>
      {showSuccessModal ? (
        <SuccessfulBidModal
          // amount={inputs.amount}
          messageTitle="Bid Submitted Successully"
          messageBody="Your bid has been submitted"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SingleDetail;
