import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";

import ProductTypeOne from "./ListProducts";

import { shopFilterProducts } from "../../../../../../../src/utils";
import movie1 from "../../assets/movies/movie1.svg";
import movie2 from "../../assets/movies/movie2.svg";
import movie3 from "../../assets/movies/movie3.svg";
import movie4 from "../../assets/movies/movie4.svg";
import { LoaderContext } from "../../../../../../context/Loading";

function GridProduct(props) {
  const { displayCount, cols = 3, productType = "", curPage, discount } = props;
  const { toggleLoading } = useContext(LoaderContext)
  let subClass = getClass(cols);
  let products = props.products;
  products = shopFilterProducts(products, props.filter);
  const buttonTitle = "View";
  const buttonLink = "/pages/entertainment/movie/single/1";

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

  const [data, setData] = useState([])
  const [cinema, setCinema] = useState()

  useEffect(() => {
    toggleLoading(true)
    if (props.data != undefined) {
      toggleLoading(false)
      setData(props.data.data.tickets)
      setCinema(props.data.cinema)
    }
  })

  return (
    <div
      className={`product-group ${productType === "flex-grid" && props.type === "grid"
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
      {data.map((res) =>
        <div className="col-6 col-md-3 p-0" key={"flex-grid"}>
          <div className="skel-pro skel-pro-grid"></div>
          <ProductTypeOne
            buttonTitle={buttonTitle}
            buttonLink={buttonLink}
            imageA={res.artworkThumbnail}
            discount
            addClass="inner-quickview inner-icon pl-3 pr-3"
            product={null}
            key={"flex-grid"}
            title={res.title}
            duration={res.duration}
            genre={res.genre}
            cinema={cinema}
            featuredImage={res.featuredImage}
            data={res}
            // thumbnail={}
          />
        </div>
      )}
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
