import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";

import Breadcrumb from "../../../../../common/breadcrumb";
import GridProduct from "./grid-singlecinema-products";
import "../cinema.css";

function SingleCinema(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);

  // to use lazy loading
  // useEffect(() => {
  //   let imgLoad = imagesLoaded(".product-group");

  //   if (document.querySelector(".skeleton-body")) {
  //     document.querySelector(".skeleton-body").classList.remove("loaded");
  //     imgLoad.on("done", function() {
  //       document.querySelector(".skeleton-body") &&
  //         document.querySelector(".skeleton-body").classList.add("loaded");
  //     });
  //   }
  // });
  // useEffect(() => {
  //   if (document.querySelector(".parallax")) {
  //     document.addEventListener("scroll", setParallax);
  //   }

  //   document.querySelector(".menu") &&
  //     document.querySelector(".menu").firstChild.classList.add("active");
  //   document.querySelector(".mobile-menu") &&
  //     document.querySelector(".mobile-menu").firstChild.classList.add("active");
  // });

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
        <title>Customer Portal - Movies</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Movies</h1>

      <div className="main">
        <div className="mx-3">
          <Breadcrumb current="Fashion" parent="Cinema" />
        </div>
        <div className="container skeleton-body skel-shop-products loaded">
          <div className="product-wrapper">
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
      </div>
    </>
  );
}

export default SingleCinema;
