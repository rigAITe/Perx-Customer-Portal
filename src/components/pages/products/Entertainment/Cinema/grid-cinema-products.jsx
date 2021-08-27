import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import ProductTypeOne from "./ListProducts";
import { shopFilterProducts } from "../../../../../../src/utils";
import filmhouse from "./../assets/filmhouse.svg";
import genesisCinema from "./../assets/genesisCinema.svg";
import imax from "./../assets/imax.svg";
import silverbird from "./../assets/silverbird.svg";
import { CinemaContext } from "../../../../../context/Cinema";

function GridProduct(props) {

  const { getCinemaList, cinemas } = useContext(CinemaContext)
  const { displayCount, cols = 3, productType = "", curPage, discount } = props;
  let subClass = getClass(cols);
  let products = props.products;
  products = shopFilterProducts(products, props.filter);
  const buttonTitle = "View Movies";
  const buttonLink = "/pages/entertainment/cinema/single/1";

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

  const [cinemasList, setCinemasList] = useState([])

  useEffect(() => {
    getCinemaList();
  }, [])

  useEffect(() => {
    if (cinemas.data !== null) {
      if (cinemas.success == true && cinemas.status == 1) {
        setCinemasList(cinemas.data)
        console.log(cinemas.data)
      }
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
      {cinemasList.map((res) =>
        <div className="col-6 col-md-3 p-0">
          <div className="skel-pro skel-pro-grid"></div>
          <ProductTypeOne
            buttonTitle={buttonTitle}
            // buttonLink={buttonLink}
            imageA={filmhouse}
            discount
            addClass="inner-quickview inner-icon pl-3 pr-3"
            product={null}
            key={"flex-grid"}
            name={res.name}
            location={res.location}
            state={res.state}
            data={res}
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
