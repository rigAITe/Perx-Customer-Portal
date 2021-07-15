import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import imagesLoaded from "imagesloaded";

import Breadcrumb from "../../../../common/breadcrumb";
import GridProduct from "./grid-experience-products";
import "./experience.css";
import ListProducts from "./ListProducts";

import place1 from "./../assets/places/place1.svg";
import place2 from "./../assets/places/place2.svg";
import place3 from "./../assets/places/place3.svg";
import place4 from "./../assets/places/place4.svg";

function Experience(props) {
  const [curPage, setCurPage] = useState(1);
  const [layout, setLayout] = useState("grid");
  const [productCount, setProductCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(12);
  const buttonTitle = "View";
  const buttonLink = "/pages/entertainment/experience/single/1";
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

      <div class="jumbotron experience-jumbotron jumbotron-fluid">
        <div class="container jumbotron-container d-flex">
          <div className="mx-3">
            <Breadcrumb current="Fashion" parent="Cinema" />
            <div>
              <h4 className="experience-banner-text font-weight-bold col-md-10 p-0 pt-2">
                Experience Amazing Places and Events.<br></br>
                Book your Activities and Tours Now
              </h4>

              <form className="row d-flex p-0 col-sm-12">
                <div class="form-group col-md-4">
                  <label for="formGroupExampleInput">Country</label>
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
                    <i className="fas fa-search"></i> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="container skeleton-body skel-shop-products loaded">
          <h2 className="mt-3 mb-3 section-title heading-border ls-20 border-0">
            Top Destinations
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

        <h5 className="col-6 carousel-title text-uppercase">
          Top Destinations
        </h5>
        <div className={`product-group row mx-0 divide-line up-effect`}>
          <div className="p-0 col-6 col-md-3 p-0" key={"flex-grid"}>
            <div className="skel-pro skel-pro-grid"></div>
            <ListProducts
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              imageA={place1}
              discount
              addClass="inner-quickview inner-icon pl-3 pr-3"
              product={null}
              key={"flex-grid"}
            />
          </div>
          <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
            <div className="skel-pro skel-pro-grid"></div>
            <ListProducts
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              imageA={place2}
              discount
              addClass="inner-quickview inner-icon pl-3 pr-3"
              product={null}
              key={"flex-grid"}
            />
          </div>
          <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
            <div className="skel-pro skel-pro-grid"></div>
            <ListProducts
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              imageA={place3}
              discount
              addClass="inner-quickview inner-icon pl-3 pr-3"
              product={null}
              key={"flex-grid"}
            />
          </div>
          <div className="mb-4 col-6 col-md-3 p-0" key={"flex-grid"}>
            <div className="skel-pro skel-pro-grid"></div>
            <ListProducts
              buttonTitle={buttonTitle}
              buttonLink={buttonLink}
              imageA={place4}
              discount
              addClass="inner-quickview inner-icon pl-3 pr-3"
              product={null}
              key={"flex-grid"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
