// React hooks and context
import React, { useState, useContext, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import { shopFilterProducts } from "../../../../../utils";
import LoaderContext from "../../../../../context/Loading.js";
import { AuctionContext } from "../../../../../context/Auctions.js";

// COmponents
import DisplayProducts from "./display-auction-products.jsx";
import Loading from "../../../../features/Loader/Loading.jsx";

// CSS
import swal from "sweetalert";

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
      <DisplayProducts
        discount={true}
        addClass="inner-quickview inner-icon pl-3 pr-3"
        product={product}
        key={"flex-grid" + "1 increasing"}
      />
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
