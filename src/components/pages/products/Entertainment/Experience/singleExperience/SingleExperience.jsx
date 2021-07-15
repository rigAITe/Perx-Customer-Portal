import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";

import Breadcrumb from "../../../../../common/breadcrumb";
import GridProduct from "./grid-place-products";
import { setParallax } from "../../../../../../utils";
import Pagination from "../../../../../features/pagination";

function SingleExperience(props) {
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
          <div className="mx-auto">
            <Breadcrumb current="Fashion" parent="Meal" />
            <div>
              <form className="row d-flex col-md-12">
                <div className="col-md-3 ">
                  <div className="medium-text text-dark">
                    Search Results for
                  </div>
                  <h4 className="font-weight-bold text-dark p-0 pt-2">
                    United Arab Emirated <br />
                    Abu Dhabi
                  </h4>
                </div>
                <div class="form-group col-md-3">
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
                <div class="form-group col-md-3">
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

                <div class="mt-2 form-group col-md-3 d-flex align-items-center">
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container skeleton-body skel-shop-products">
          <div>
            <Link className="medium-text">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
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
        </div>
        <div className="mb-5"></div>
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
    </>
  );
}

const mapStateToProps = (state, props) => ({
  filter: state.filter ? state.filter : [],
});

export default connect(mapStateToProps, {})(SingleExperience);
