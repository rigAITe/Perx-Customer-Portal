// React hooks and context
import React, { useState, useContext, useEffect, useRef } from "react";
import { AuctionContext } from "../../../../../../context/Auctions.js";

// COmponents
import DisplayProducts from "./display-shop-products.jsx";
import LoaderContext from "../../../../../../context/Loading.js";
import Loading from "../../../../../features/Loader/Loading.jsx";

// CSS
import swal from "sweetalert";

import shoe1 from "./assets/shoe1.svg";
import shoe2 from "./assets/shoe2.svg";
import bag from "./assets/bag.svg";
import sweater from "./assets/sweater.svg";
import speakers from "./assets/speakers.svg";

function AuctionProducts(props) {
  const { listAuctions, listAuctionState } = useContext(AuctionContext);
  const { loading } = useContext(LoaderContext);
  const [getProducts, setProducts] = useState([]);

  useEffect(() => {
    listAuctions();
  }, []);

  useEffect(() => {
    if (listAuctionState.data !== null) {
      if (
        listAuctionState.data.status === 1 &&
        listAuctionState.data.success === true
      ) {
        setProducts(listAuctionState.data.data);
      }

      if (
        listAuctionState.data.status === 0 &&
        listAuctionState.data.success === false
      ) {
        swal({
          title: "Oops!",
          text: listAuctionState.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  }, [listAuctionState]);

  const displayProducts = getProducts.map((product) => {
    return (
      <>
        <DisplayProducts
          image={shoe1}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={shoe2}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={sweater}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={bag}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={speakers}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={bag}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={shoe2}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
        <DisplayProducts
          image={shoe1}
          discount={true}
          addClass="inner-quickview inner-icon pl-3 pr-3"
          product={product}
          key={"flex-grid" + "1 increasing"}
        />
      </>
    );
  });

  return (
    <div className={`product-group row mx-0 divide-line up-effect`}>
      {loading ? <Loading /> : ""}
      {displayProducts}
    </div>
  );
}

export default AuctionProducts;
