import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { setParallax } from "../../../../../../src/utils/index.js";
import { owlSettingShop } from "../../../../../../src/utils/settings.js";

import NewsletterModal from "../../../../../../src/components/features/modal/newsletter-modal";
import Carousel from "../../../../../../src/components/features/carousel.jsx";
import ProductTypeFive from "./product-template";

import landingImage1 from "./../assets/landingImage1.svg";
import landingImage2 from "./../assets/landingImage2.svg";
import landingImage3 from "./../assets/landingImage3.svg";
import brand1 from "../assets/tesco.png";
// import brand2 from "./../assets/brands/brand2.svg";
// import brand3 from "./../assets/brands/brand3.svg";
// import brand4 from "./../assets/brands/brand4.svg";

import "./discountLanding.css";
import Breadcrumb from "../../../../common/breadcrumb.jsx";

export default function HomePage() {
  let productSlider;

  productSlider = {
    ...owlSettingShop,
    nav: true,
    dots: false,
    margin: 20,
    navText: [
      '<i class="icon-angle-left"></i>',
      '<i class="icon-angle-right"></i>',
    ],
  };

  useEffect(() => {
    if (document.querySelector(".parallax")) {
      document.addEventListener("scroll", setParallax);
    }

    document.querySelector(".menu") &&
      document.querySelector(".menu").firstChild.classList.add("active");
    document.querySelector(".mobile-menu") &&
      document.querySelector(".mobile-menu").firstChild.classList.add("active");
  });

  return (
    <>
      <Helmet>
        <title>Customer Portal | Discount </title>
      </Helmet>

      <h1 className="d-none">Customer Portal | Discount </h1>

      <div className="landing-image">
        <Breadcrumb current="Discount" />
      </div>

      <div className="main mt-4">
        <div className="container">
          <div className="d-flex">
            <div className="mx-3">
              <img className="" src={landingImage1} />
            </div>
            <div className="mx-3">
              <img className="" src={landingImage2} />
            </div>
            <div className="mx-3">
              <img className="" src={landingImage3} />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <section className="new-products-section">
          <div className="container">
            <h2 className="mb-4 section-title heading-border ls-20 border-0">
              Trending Offers
            </h2>

            <Carousel
              addClass="products-slider custom-products nav-outer show-nav-hover nav-image-center"
              settings={productSlider}
            >
              <ProductTypeFive
                product={null}
                image={brand1}
                width={220}
                height={220}
              />
              <ProductTypeFive
                product={null}
                image={brand1}
                width={220}
                height={220}
              />
              <ProductTypeFive
                product={null}
                image={brand1}
                width={220}
                height={220}
              />
              <ProductTypeFive
                product={null}
                image={brand1}
                width={220}
                height={220}
              />
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
}
