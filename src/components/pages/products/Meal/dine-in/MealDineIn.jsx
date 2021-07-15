import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";

import Breadcrumb from "../../../../common/breadcrumb";
import GridProduct from "./grid-meal-products";
import Pagination from "../../../../features/pagination";
import { setParallax } from "../../../../../utils";

function MealDineIn(props) {
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

  const changeLayout = (e) => {
    e.preventDefault();
    props.gridType(e.currentTarget.getAttribute("title"));
    setLayout(e.currentTarget.getAttribute("title"));
  };

  return (
    <>
      <Helmet>
        <title>Customer Portal - Meal</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Meal</h1>

      <div className="main">
        <Breadcrumb current="Dine In" parent="Meal" />
        <div className="row d-flex justify-content-end">
          <div className="toolbox-item layout-modes float-right pull-right">
            <Link
              to="#"
              className={`layout-btn btn-grid ${
                layout === "grid" ? "active" : ""
              }`}
              title="grid"
              onClick={changeLayout}
            >
              <i className="icon-mode-grid"></i>
            </Link>
            <Link
              to="#"
              className={`layout-btn btn-list ${
                layout === "list" ? "active" : ""
              }`}
              title="list"
              onClick={changeLayout}
            >
              <i className="icon-mode-list"></i>
            </Link>
          </div>
        </div>

        <div className="container skeleton-body skel-shop-products">
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

export default connect(mapStateToProps, {})(MealDineIn);
