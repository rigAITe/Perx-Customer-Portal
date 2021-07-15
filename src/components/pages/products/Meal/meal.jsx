import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";

import Breadcrumb from "../../../common/breadcrumb";
import GridProduct from "./grid-meal-products";
import Pagination from "../../../features/pagination";
import { setParallax } from "../../../../utils";

import headerPlate from "./assets/headerPlate.svg";
import headerPlate2 from "./assets/headerPlate2.svg";
import headerPlate3 from "./assets/headerPlate3.svg";

function Meal(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);

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
        <title>Customer Portal - Meal</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Meal</h1>

      <div class="jumbotron jumbotron-fluid">
        <div class="container jumbotron-container d-flex">
          <img
            className="location-logo header-plate"
            src={headerPlate}
            alt="Logo"
          />
          <div className="mx-auto">
            <Breadcrumb current="Fashion" parent="Meal" />
            <div>
              <h4 className="font-weight-bold text-dark col-md-6 p-0 pt-2">
                Redeem Delicious Meals and get them Delivered to your Door Step
              </h4>

              <form className="row d-flex col-sm-12">
                <div class="form-group col-md-4">
                  <label for="formGroupExampleInput">State</label>
                  <select
                    name="orderby"
                    className="form-control"
                    placeholder="State"
                  >
                    <option value="menu_order" selected>
                      Lagos
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>{" "}
                </div>
                <div class="form-group col-md-4">
                  <label for="formGroupExampleInput2">City</label>
                  <select name="orderby" className="form-control">
                    <option value="menu_order" selected>
                      City
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>{" "}
                </div>

                <div class="form-group col-md-4 d-flex align-items-end">
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i> Find Restaurant
                  </button>
                </div>
              </form>
            </div>
          </div>
          <img
            className="location-logo header-plate2"
            src={headerPlate2}
            alt="Logo"
          />
          <img
            className="location-logo header-plate3"
            src={headerPlate3}
            alt="Logo"
          />
        </div>
      </div>

      <div className="main">
        <div className="container skeleton-body skel-shop-products">
          <hr class="hr-text" data-content="Top Restaurants/Vendors" />
          <div className="product-wrapper mt-2">
            <GridProduct
              curPage={curPage}
              discount
              type={layout}
              productType="flex-grid"
              productCount={onChangeProductCount}
              displayCount={displayCount}
            />
          </div>
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
    </>
  );
}

const mapStateToProps = (state, props) => ({
  filter: state.filter ? state.filter : [],
});

export default connect(mapStateToProps, {})(Meal);
