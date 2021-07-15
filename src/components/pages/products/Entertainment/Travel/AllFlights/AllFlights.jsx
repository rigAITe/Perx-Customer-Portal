import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";
import { Link, useLocation } from "react-router-dom";

import Breadcrumb from "../../../../../../../src/components/common/breadcrumb.jsx";
import Pagination from "../../../../../../../src/components/features/pagination.jsx";
import { setParallax } from "../../../../../../../src/utils/index.js";

import arik from "./../assets/arik.svg";
import airpeace from "./../assets/airpeace.svg";
import arrow from "./../assets/arrow.svg";
import SetTripType from "../../../../../common/modals/SetTripType.jsx";
// import { ScrollToTopControlller } from "../../../../../ScrollToTop.jsx";



function AllFlights(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);
  const [showTripTypeModal, setShowTripTypeModal] = useState(false);


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

  const showModal = (value) => {
    setShowTripTypeModal(value);
  };
  
  const closeTripTypeModal = () => {
    setShowTripTypeModal(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <Helmet>
        <title>Customer Portal - All Flights</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - All Flights</h1>
    
      <div class="jumbotron jumbotron-fluid">
        {/* <ScrollToTopControlller/> */}

        <div class="container jumbotron-container">
          <div className="mx-auto">
            <Breadcrumb current="Flights" parent="All Flights" />
            <div className="mt-2">
              <p className="medium-text">Search result for</p>

              <div className="d-flex justify-content-between">
                
                <h5 className="font-weight-bold text-dark p-0 mt-0">
                  Flights from Lagos to Dubai <br></br>
                  21/04/2020 - 24/04/2020 | 1 Adult 0 Child 0 Infant | Economy{" "}
                </h5>
                <div className="change-flight-btn">
                  <button className="btn btn-outline-primary"
                    onClick={() => showModal(true)}
                  >Change</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <nav class="toolbox horizontal-filter filter-sorts">
          <div class="toolbox-item toolbox-sort select-custom">
            <div class="select-custom">
              <select name="orderby" class="form-control">
                <option value="menu_order" selected="">
                  Sort by: Cheapest
                </option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          {/* <div class="toolbox-item layout-modes"> */}
            {/* <a
              class="layout-btn btn-grid active docs-creator"
              title="grid"
              href="/categories/horizontal-filter2"
            >
              <i class="icon-mode-grid"></i>
            </a> */}
            {/* <a
              class="layout-btn btn-list docs-creator"
              title="list"
              href="/categories/horizontal-filter2"
            >
              <i class="icon-mode-list"></i>
            </a> */}
          {/* </div> */}
        </nav>

        <div className="flightss">
          
        <div class="all-flight-card">
          <div className="row">
            <div className="col-md-10">
              <div className="col-md-12 add-dashed-border d-flex align-items-center col-md-10">
                <img className="mr-5 carrier-logo" src={arik} alt="logo" />
                <div>
                  <div className="d-flex">
                    <span className="d-flex align-items-center">
                      LOS 06:00 hrs
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      2h 55m hours | 1 stop{" "}
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      PHC 08:50 hrs
                    </span>
                  </div>
                  <div className="mt-1 mx-auto d-flex justify-content-between">
                    <small>Flight arrives Tue, 21 Apr.</small>
                    <small className="mr-0 pr-0">Economy</small>
                  </div>
                </div>
              </div>

              <div className="col-md-12 d-flex align-items-center col-md-10">
                <img className="mr-5 carrier-logo" src={arik} alt="logo" />
                <div>
                  <div className="d-flex">
                    <span className="d-flex align-items-center">
                      LOS 06:00 hrs
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      2h 55m hours | 1 stop{" "}
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      PHC 08:55 hrs
                    </span>
                  </div>
                  <div className="mt-1 mx-auto d-flex justify-content-between">
                    <small>Flight arrives Tue, 21 Apr.</small>
                    <small className="mr-0 pr-0">Economy</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="right-flight-card">
                <p className="black-text bold">
                  10,500 <span className="ruby-tag">Rubies</span>
                </p>
                <Link to={{
                  pathname: `${process.env.PUBLIC_URL}/pages/travel/all-flights/flight-details`,
                  }}>
                  <button
                    // onClick={() => showModal()}
                    className="col-md-12 btn btn-primary medium-text"
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="all-flight-card">
          <div className="row">
            <div className="col-md-10">
              <div className="col-md-12 d-flex align-items-center col-md-10">
                <img className="mr-5 carrier-logo" src={airpeace} alt="logo" />
                <div>
                  <div className="d-flex">
                    <span className="d-flex align-items-center">
                      LOS 06:00 hrs
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      2h 55m hours | 1 stop{" "}
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      PHC 08:55 hrs
                    </span>
                  </div>
                  <div className="mt-1 mx-auto d-flex justify-content-between">
                    <small>Flight arrives Tue, 21 Apr.</small>
                    <small className="mr-0 pr-0">Economy</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="right-flight-card">
                <p className="black-text bold">
                  10,500 <span className="ruby-tag">Rubies</span>
                </p>
                <button
                  // onClick={() => showModal()}
                  className="col-md-12 btn btn-primary medium-text"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="all-flight-card">
          <div className="row">
            <div className="col-md-10">
              <div className="col-md-12 d-flex align-items-center col-md-10">
                <img className="mr-5 carrier-logo" src={arik} alt="logo" />
                <div>
                  <div className="d-flex">
                    <span className="d-flex align-items-center">
                      LOS 06:00 hrs
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      2h 55m hours | 1 stop{" "}
                    </span>
                    <img className="mx-5 right-arrow" src={arrow} alt="arrow" />
                    <span className="d-flex align-items-center">
                      PHC 08:55 hrs
                    </span>
                  </div>
                  <div className="mt-1 mx-auto d-flex justify-content-between">
                    <small>Flight arrives Tue, 21 Apr.</small>
                    <small className="mr-0 pr-0">Economy</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="right-flight-card">
                <p className="black-text bold">
                  10,500 <span className="ruby-tag">Rubies</span>
                </p>
                <button
                  // onClick={() => showModal()}
                  className="col-md-12 btn btn-primary medium-text"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>

        

        <div className="container skeleton-body skel-shop-products">
          <Pagination
            count={productCount}
            curPage={onChangeCurPage}
            productType="flex-grid"
            layout={layout}
            changeDisplay={onChangeDisplayCount}
            displayCount={displayCount}
            filters={props.filter}
          />
        </div>
        <div className="mb-5"></div>
      </div>
      {showTripTypeModal ? (
        <SetTripType closeModal={() => closeTripTypeModal()} />
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = (state, props) => ({
  filter: state.filter ? state.filter : [],
});

export default connect(mapStateToProps, {})(AllFlights);
