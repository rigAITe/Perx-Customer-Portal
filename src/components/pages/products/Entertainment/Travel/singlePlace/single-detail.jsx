import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { findIndex, getPrice } from "../../../../../../utils/index.js";
import LoaderContext from "../../../../../../context/Loading.js";
import Loading from "../../../../../features/Loader/Loading.jsx";
import { isStateHandled, formatNumber } from "../../../../../../utils/index.js";
import swal from "sweetalert";
import SuccessfulBidModal from "../../../../../common/modals/SuccessfulBidModal.jsx";
import flatpickr from "flatpickr";

import "./singlePlace.css";

function SingleDetail(props) {
  const { loading } = useContext(LoaderContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { wishlist, product, isSticky = false, auction, auction_bid } = props;
  let isInWishlist = findIndex(wishlist, product.id) ? true : false;
  let maxPrice,
    minPrice = 0;

  useEffect(() => {
    const config = {
      defaultDate: "2021-11-11",
    };
    const myInput = document.getElementById("myInput");
    console.log(myInput);

    const fp = flatpickr(myInput, config); // flatpickr
  });

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
          <h4>1D Private Liwa 4x4 Safari ex Abu Dhabi</h4>
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-2 bold text-dark d-flex align-items-center">
            10,500
            <span class="ruby-tag"> Rubies</span>
          </div>
          <div>
            <label htmlFor="">Select Date</label>
            <input className="form-control" type="text" id="myInput" />
          </div>
        </div>
        <p className="text-dark bold">Location:</p>
        <div className="text-dark mb-2">
          Al Musalla, United Arab Emirates, Abu Dhabi, Abu Dhabi
        </div>

        <p className="text-dark bold">Availabilities:</p>
        <div className="text-dark mb-2">
          <Link
            to={`${process.env.PUBLIC_URL}/categories/full-width`}
            className="btn form-btn btn-outline-primary col-md-4"
          >
            <i className="fas fa-calendar"></i> 04/05/20
          </Link>{" "}
        </div>

        <p className="text-dark medium-text bold">Seats available: 60 </p>
        <p className="text-dark medium-text bold">
          Start time: Mar 31, 2020 8:30 AM
        </p>
        <p className="text-dark medium-text bold">
          End time: Apr 1, 2020 2:30 AM{" "}
        </p>
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
                  <td colSpan="5" className="clearfix">
                    <h6>Fill the forms below to complete booking</h6>
                    <div className="medium-text form-subtext d-flex justify-content-between">
                      <div>
                        Participant 1 (Required){" "}
                        <span style={{ color: "darkred" }}>*</span>
                      </div>
                      <div>
                        <i className="fas fa-minus-circle"></i>
                      </div>
                    </div>
                    <form action="">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="">Age</label>
                          <input
                            placeholder="Email Address"
                            className="form-control"
                            type="text"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="">Salutation</label>
                          <input
                            placeholder="Phone Number"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="">First Name</label>
                          <input
                            placeholder="Email Address"
                            className="form-control"
                            type="text"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="">Last Name</label>
                          <input
                            placeholder="Phone Number"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="">Email Address</label>
                          <input
                            placeholder="Email Address"
                            className="form-control"
                            type="text"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="">Phone Number</label>
                          <input
                            placeholder="Phone Number"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex mb-1 justify-content-end col-md-12">
                          <Link
                            to={`${process.env.PUBLIC_URL}/categories/full-width`}
                            className="btn form-btn btn-outline-primary col-md-4"
                          >
                            Update
                          </Link>
                        </div>
                      </div>
                    </form>
                    <hr className="divider" />
                    <div className="medium-text form-subtext d-flex justify-content-between">
                      <div>
                        Participant 2 (Required){" "}
                        <span style={{ color: "darkred" }}>*</span>
                      </div>
                      <div>
                        <i className="fas fa-minus-circle"></i>
                      </div>
                    </div>
                    <hr className="divider" />
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
