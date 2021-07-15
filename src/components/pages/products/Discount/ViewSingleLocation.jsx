import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import imagesLoaded from "imagesloaded";
import { setParallax } from "../../../../utils";

import Breadcrumb from "../../../common/breadcrumb";
import SuccessModalWithButton from "../../../common/modals/SuccessModalWithButton";

import tescoLogo from "./assets/tesco.png";
import "./discount.css";

function ViewSingleLocation(props) {
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
          <Breadcrumb current="Fashion" parent="Discount" />
          <div className="d-flex">
            <img className="location-logo mr-4" src={tescoLogo} alt="Logo" />
            <div>
              <p className="font-weight-bold text-dark">Tesco Lekki</p>
              <p>
                Address:
                <span className="text-dark">
                  No 66, Old Yaba Road, Yaba, Lagos
                </span>
              </p>
              <div>
                <button className="btn btn-primary">
                  <i className="fas fa-map-marker-alt"></i> Locate Address on
                  Map
                </button>
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

              {/* <ul className="border list">
                <li>
                  <Link to="#">Women Fashion</Link>
                </li>
                <li>
                  <Link to="#">Mens Fashion</Link>
                </li>
                <li>
                  <Link to="#">Womens Shoes</Link>
                </li>
                <li>
                  <Link to="#">Mens Shoes</Link>
                </li>
                <li>
                  <Link to="#">Wrist Watch</Link>
                </li>
                <li>
                  <Link to="#">Belts</Link>
                </li>
              </ul> */}
              <div style={{borderWidth: '1px', borderColor: 'lightgrey', borderStyle: 'solid', marginBottom: '2rem', padding: '0.7rem'}}>
                <select style={{width: '100%', borderColor: 'grey', border: 'none', outline: 'none'}}>
                  <option>Women Fashion</option>
                  <option>Men's Fashion</option>
                  <option>Women Shoes</option>
                  <option>Men Shoes</option>
                  <option>Wrist Watch</option>
                  <option>Belts</option>
                </select>
              </div>
            </div>

            <div className="col-md-6 widget widget-categories border">
              <div className="cap-table">
                <h4 className="widget-title">Women Fashion</h4>
                <div className="widget-sub-title text-dark d-flex justify-content-between">
                  <p>Discount</p>
                  <p>Order</p>
                </div>

                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img
                      className="location-logo mr-4"
                      src={tescoLogo}
                      alt="Logo"
                    />
                    <div>
                      <p className="text-dark">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-dark"> John Doe - 37456890</p>
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img
                      className="location-logo mr-4"
                      src={tescoLogo}
                      alt="Logo"
                    />
                    <div>
                      <p className="text-dark">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-dark"> John Doe - 37456890</p>
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
                <div className="text-dark mb-1 p-4 beneficiary-list">
                  <div className="d-flex justify-content-between">
                    <img
                      className="location-logo mr-4"
                      src={tescoLogo}
                      alt="Logo"
                    />
                    <div>
                      <p className="text-dark">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <p className="text-dark"> John Doe - 37456890</p>
                    </div>
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-plus-circle"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{width: "30%"}} className="ml-2 px-2 border widget widget-categories">
              <div className="cap-table">
                <div className="mt-2 ml-2 d-flex justify-content-between">
                  <h4 className="widget-title">Women Fashion</h4>
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="text-dark p-4">
                  <div className="w-100 d-flex justify-content-start mb-1">
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-minus-circle"></i>{" "}
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="text-dark">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-start mb-1">
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-minus-circle"></i>{" "}
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="text-dark">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-start mb-1">
                    <div className="d-flex align-self-center">
                      <i class="float-right fas fa-minus-circle"></i>{" "}
                    </div>
                    <div className="ml-3 mt-2">
                      <div className="text-dark">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="widget-title">
                  <button
                    onClick={() => openModal()}
                    className="w-100 btn btn-primary"
                  >
                    Redeem{" "}
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
              link: `${process.env.PUBLIC_URL}/pages/order_receipts/discount`,
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

export default connect(mapStateToProps, {})(ViewSingleLocation);
