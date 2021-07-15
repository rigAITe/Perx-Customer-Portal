import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import imagesLoaded from "imagesloaded";
import { setParallax } from "../../../../../../src/utils/index.js";

import Breadcrumb from "../../../../../../src/components/common/breadcrumb.jsx";
import SuccessModalWithButton from "../../../../../../src/components/common/modals/SuccessModalWithButton";

import beer from "../../../../../../src/components/pages/products/Meal/assets/company-logos/beerhugs.svg";
import dodo from "../../../../../../src/components/pages/products/Meal/assets/headerPlate3.svg";

// import "./discount.css";

function ViewSingleMealLocation(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setShowSuccess(true);
  };

  useEffect(() => {
    let imgLoad = imagesLoaded(".product-group");

    if (document.querySelector(".skeleton-body")) {
      document.querySelector(".skeleton-body").classList.remove("loaded");
      imgLoad.on("done", function() {
        document.querySelector(".skeleton-body") &&
          document.querySelector(".skeleton-body").classList.add("loaded");
      });
    }
  });
  useEffect(() => {
    if (document.querySelector(".parallax")) {
      document.addEventListener("scroll", setParallax);
    }

    document.querySelector(".menu") &&
      document.querySelector(".menu").firstChild.classList.add("active");
    document.querySelector(".mobile-menu") &&
      document.querySelector(".mobile-menu").firstChild.classList.add("active");
  });

  const gridType = (layoutParam) => {
    if (layout !== layoutParam) {
      setLayout(layoutParam);
    }
  };

  const onChangeProductCount = (countParam) => {
    if (productCount !== countParam) setProductCount(countParam);
  };

  const onChangeCurPage = (curPageParam) => {
    if (curPage !== curPageParam) {
      setCurPage(curPageParam);
    }
  };

  const onChangeDisplayCount = (countParam) => {
    if (displayCount !== countParam) {
      setDisplayCount(countParam);
    }
  };

  return (
    <>
      <Helmet>
        <title>Customer Portal - Discount</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Discount</h1>

      <div class="jumbotron jumbotron-fluid">
        <div class="container jumbotron-container">
          <Breadcrumb current="Dine In" parent="Meal" />

          <div className="d-flex">
            <img className="location-logo mr-4" src={beer} alt="Logo" />
            <div>
              <p className="font-weight-bold text-dark">Bheerhuugz lekki</p>
              <div className="row">
                <div className="col-md-8">
                  <div className="d-inline fas fa-map-marker-alt"></div>
                  <div className="pl-2 d-inline single-menu-subtext">
                    No 66, Old Yaba Road, Off Herbert Macoulay Way
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container skeleton-body skel-shop-products">
          <div className="row product-wrapper mt-2">
            <div className="col-md-2 widget widget-categories">
              <h4 className="widget-title">
                <button className="w-100 btn btn-primary">
                  <i className="fas fa-chevron-left"></i> Go Back
                </button>
              </h4>

              <ul className="border list">
                <li>
                  <Link to="#">Popular Products</Link>
                </li>
                <li>
                  <Link to="#">Sides</Link>
                </li>
                <li>
                  <Link to="#">Desert</Link>
                </li>
                <li>
                  <Link to="#">Combo</Link>
                </li>
                <li>
                  <Link to="#">Wine</Link>
                </li>
                <li>
                  <Link to="#">Soft Drinks</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 widget widget-categories border">
              <div className="cap-table">
                <h4 className="widget-title">Popular Products</h4>
                <div className="widget-sub-title text-dark d-flex justify-content-between">
                  <p>Meal</p>
                  <p>Add Quantity</p>
                </div>

                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img className="location-logo mr-4" src={dodo} alt="Logo" />
                    <div>
                      <div className="text-dark">
                        Beef Shawarma with Double Hotdog
                      </div>
                      <div class="black-text bold subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </div>{" "}
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img className="location-logo mr-4" src={dodo} alt="Logo" />
                    <div>
                      <div className="text-dark">
                        Beef Shawarma with Double Hotdog
                      </div>
                      <div class="black-text bold subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </div>{" "}
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img className="location-logo mr-4" src={dodo} alt="Logo" />
                    <div>
                       <div className="text-dark">
                        Beef Shawarma with Double Hotdog
                      </div>
                      <div class="black-text bold subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </div>{" "}
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>

                <h4 className="widget-title mt-5">Popular Products</h4>
                <div className="widget-sub-title text-dark d-flex justify-content-between">
                  <p>Meal</p>
                  <p>Add Quantity</p>
                </div>

                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img className="location-logo mr-4" src={dodo} alt="Logo" />
                    <div>
                       <div className="text-dark">
                        Beef Shawarma with Double Hotdog
                      </div>
                      <div class="black-text bold subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </div>{" "}
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img className="location-logo mr-4" src={dodo} alt="Logo" />
                    <div>
                       <div className="text-dark">
                        Beef Shawarma with Double Hotdog
                      </div>
                      <div class="black-text bold subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </div>{" "}
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img className="location-logo mr-4" src={dodo} alt="Logo" />
                    <div>
                       <div className="text-dark">
                        Beef Shawarma with Double Hotdog
                      </div>
                      <div class="black-text bold subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </div>{" "}
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ width: "30%" }}
              className="ml-2 px-2 border widget widget-categories"
            >
              <div className="cap-table">
                <div className="mt-2 ml-2 d-flex justify-content-between">
                  <h4 className="widget-title">Your Order</h4>
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="text-dark p-4">
                  <div className="w-100 d-flex justify-content-start mb-1">
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-minus-circle"></i>{" "}
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="text-dark subtext">
                        Beef Shawarma with Double Hotdog x2
                      </div>
                    </div>
                    <p class="black-text mt-2 subtext">
                      2,000 <span class="ruby-tag">Rubies</span>
                    </p>
                  </div>
                  <div className="w-100 d-flex justify-content-start mb-1">
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-minus-circle"></i>{" "}
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="text-dark subtext">
                        Beef Shawarma with Double Hotdog x2
                      </div>
                    </div>
                    <p class="black-text mt-2 subtext">
                      2,000 <span class="ruby-tag">Rubies</span>
                    </p>
                  </div>
                  <div className="w-100 d-flex justify-content-start mb-1">
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-minus-circle"></i>{" "}
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="text-dark subtext">
                        Beef Shawarma with Double Hotdog x2
                      </div>
                    </div>
                    <p class="black-text mt-2 subtext">
                      2,000 <span class="ruby-tag">Rubies</span>
                    </p>
                  </div>

                  <div className="w-100 d-flex mt-2 justify-content-between mb-1">
                    <div className="black-text bold">Total</div>
                    <div>
                      <p class="black-text subtext">
                        2,000 <span class="ruby-tag">Rubies</span>
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="widget-title">
                  <button
                    onClick={() => openModal()}
                    className="w-100 btn btn-primary"
                  >
                    Pay{" "}
                  </button>
                </h4>
              </div>
            </div>
          </div>
          <div className="mb-5"></div>
        </div>
        {showSuccess ? (
          <SuccessModalWithButton
            hidemodal={() => setShowSuccess(false)}
            data={{
              messageTitle: `Order Successful`,
              messageBody: `Your order has been submited successfully`,
              buttonText: `View Order Details`,
              link: `${process.env.PUBLIC_URL}/pages/order_receipts/meal`,
            }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state, props) => ({
  filter: state.filter ? state.filter : [],
});

export default connect(mapStateToProps, {})(ViewSingleMealLocation);
