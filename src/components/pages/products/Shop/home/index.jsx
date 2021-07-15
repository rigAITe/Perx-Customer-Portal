import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { setParallax } from "../../../../../../src/utils/index.js";
import { owlSettingShop } from "../../../../../../src/utils/settings.js";

import NewsletterModal from "../../../../../../src/components/features/modal/newsletter-modal";
import Carousel from "../../../../../../src/components/features/carousel.jsx";
import ProductTypeFive from "./product-template";

import playstation from "./../assets/playstation.svg";
import bag from "./redeem-products/assets/bag.svg";
import shoe1 from "./redeem-products/assets/shoe1.svg";
import shoe2 from "./redeem-products/assets/shoe2.svg";
import sweater from "./redeem-products/assets/sweater.svg";
import speakers from "./redeem-products/assets/speakers.svg";

import "./shop.css";

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
        <title>Customer Portal | Shop </title>
      </Helmet>

      <h1 className="d-none">Customer Portal | Shop </h1>

      <div className="d-flex align-items-end carousel-image slide-bg">
        <div className="row d-flex justify-content-center ml-5 mb-5 carousel-button">
          <Link
            to={`${process.env.PUBLIC_URL}/categories/full-width`}
            className="btn btn-dark btn-lg ls-10"
          >
            Redeem Now <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>

      <div className="main mt-4" style={{overflow: 'scroll'}}>
        <div className="container" >
          <div className="d-flex" >
            <div className="d-flex sub-section p-3 m-2">
              <div className="image-section p-4" style={{width: '125px'}}>
                <img className="w-75" src={playstation} />
              </div>
              <div className="p-5">
                <div className="mb-1 black-text bold">Games</div>
                <Link
                  to={`${process.env.PUBLIC_URL}/categories/full-width`}
                  className="btn btn-sm btn-primary ls-10"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="d-flex sub-section p-3 m-2">
              <div className="image-section p-4" style={{width: '125px'}}>
                <img className="w-75" src={playstation} />
              </div>
              <div className="p-5">
                <div className="mb-1 black-text bold">Games</div>
                <Link
                  to={`${process.env.PUBLIC_URL}/categories/full-width`}
                  className="btn btn-sm btn-primary ls-10"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="d-flex sub-section p-3 m-2">
              <div className="image-section p-4" style={{width: '125px'}}>
                <img className="w-75" src={playstation} />
              </div>
              <div className="p-5">
                <div className="mb-1 black-text bold">Games</div>
                <Link
                  to={`${process.env.PUBLIC_URL}/categories/full-width`}
                  className="btn btn-sm btn-primary ls-10"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <section className="new-products-section">
          <div className="container">
            <h2 className="section-title heading-border ls-20 border-0">
              Featured Products
            </h2>

            <Carousel
              addClass="products-slider custom-products nav-outer show-nav-hover nav-image-center"
              settings={productSlider}
            >
              <ProductTypeFive
                product={null}
                image={bag}
                width={220}
                height={220}
              />
              <ProductTypeFive
                product={null}
                image={shoe1}
                width={220}
                height={220}
              />
              <ProductTypeFive
                product={null}
                image={shoe2}
                width={220}
                height={220}
              />
              <ProductTypeFive
                product={null}
                image={speakers}
                width={220}
                height={220}
              />
            </Carousel>
          </div>
        </section>
      </div>

      <div className="d-flex justify-content-center align-items-center banner2-image banner banner-big-sale mb-5">
        <div className="ml-5 mb-5 carousel-button">
          <Link
            to={`${process.env.PUBLIC_URL}/categories/full-width`}
            className=" btn btn-dark btn-lg ls-10"
          >
            Redeem Now <i className="ml-3 fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <section className="new-products-section">
            <div className="container">
              <h2 className="section-title heading-border ls-20 border-0">
                New Arrivals
              </h2>

              <Carousel
                addClass="products-slider custom-products nav-outer show-nav-hover nav-image-center"
                settings={productSlider}
              >
                <ProductTypeFive product={null} image={bag} />
                <ProductTypeFive product={null} image={shoe1} />
                <ProductTypeFive product={null} image={shoe2} />
                <ProductTypeFive product={null} image={speakers} />
              </Carousel>
            </div>
          </section>
        </div>
      </div>
      <NewsletterModal />
    </>
  );
}
