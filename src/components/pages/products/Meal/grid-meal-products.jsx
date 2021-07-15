import React from "react";
import { connect } from "react-redux";

import ProductTypeOne from "./ListMealProducts";
import ProductTypeThree from "../../../features/product/product-type-three";
import ProductTypeTwo from "../../../features/product/product-type-two";

import { shopFilterProducts } from "../../../../utils";
import dodo from "./assets/company-logos/dodo.svg";
import beerhugs from "./assets/company-logos/beerhugs.svg";
import place from "./assets/company-logos/place.svg";
import road from "./assets/company-logos/road.svg";

function GridProduct(props) {
  const { displayCount, cols = 3, productType = "", curPage, discount } = props;
  let subClass = getClass(cols);
  let products = props.products;
  products = shopFilterProducts(products, props.filter);

  function getClass(cols) {
    let subClass = "";
    if (cols === 4) {
      subClass = "col-xl-3";
    } else if (cols === 5) {
      subClass = "col-xl-5col";
    } else if (cols === 6) {
      subClass = "col-xl-2 col-lg-3";
    } else if (cols === 7) {
      subClass = "col-xl-7col col-lg-3";
    } else if (cols === 8) {
      subClass = "col-xl-8col col-lg-3";
    }
    return subClass;
  }

  return (
    <div
      className={`product-group ${
        productType === "flex-grid" && props.type === "grid"
          ? "row mx-0 divide-line up-effect"
          : "row row-sm position-relative " +
            (props.type === "list" ? "product-intro list-style" : "")
      } `}
    >
      {products.length === 0 ? (
        <h4 className="mt-3 ml-4 text-dark" style={{ fontWeight: 400 }}>
          <i className="fas fa-info-circle text-primary mr-2"></i>No products
          were found matching your selection.
        </h4>
      ) : (
        ""
      )}
      <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
        <div className="skel-pro skel-pro-grid"></div>
        <ProductTypeOne
          imageA={dodo}
          discount
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={null}
          key={"flex-grid"}
        />
      </div>
      <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
        <div className="skel-pro skel-pro-grid"></div>
        <ProductTypeOne
          imageA={beerhugs}
          discount
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={null}
          key={"flex-grid"}
        />
      </div>
      <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
        <div className="skel-pro skel-pro-grid"></div>
        <ProductTypeOne
          imageA={place}
          discount
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={null}
          key={"flex-grid"}
        />
      </div>
      <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
        <div className="skel-pro skel-pro-grid"></div>
        <ProductTypeOne
          imageA={road}
          discount
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={null}
          key={"flex-grid"}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    filter: state.filter ? state.filter : [],
    products: state.data.products ? state.data.products : "",
  };
};

export default connect(mapStateToProps)(GridProduct);
