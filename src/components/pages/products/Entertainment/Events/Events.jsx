import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";
import Breadcrumb from "../../../../common/breadcrumb";
import GridProduct from "./grid-events-products";
import "./events.css";
import swal from "sweetalert";



function Events(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);
  const [list, setList] = useState([]);


  // useEffect(() => {
  //   if (surveyList.data !== null) {
  //     if (surveyList.data.status === 1 && surveyList.data.success === true) {
  //       setList(surveyList.data.data);
  //     }

  //     if (surveyList.data.status === 0 && surveyList.data.success === false) {
  //       swal({
  //         title: "Oops!",
  //         text: surveyList.data.message,
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     }
  //   }
  // }, [surveyList.data]);

  // console.log('EVENT ', even)

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
        <title>Customer Portal - Events</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Events</h1>

      <div class="jumbotron events-jumbotron jumbotron-fluid">
        <div class="container jumbotron-container d-flex">
          <div className="mx-3">
            <Breadcrumb current="Fashion" parent="Cinema" />
            <div>
              <h4 className="banner-text font-weight-bold col-md-10 p-0 pt-2">
                Redeem Event Tickets Today
              </h4>
              <div className="banner-text font-weight-normal w-75">
                Explore what is happening when and where
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container skeleton-body skel-shop-products loaded">
          <h2 className="mt-3 mb-3 section-title heading-border ls-20 border-0">
            All Upcoming Events
          </h2>
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

export default Events;
