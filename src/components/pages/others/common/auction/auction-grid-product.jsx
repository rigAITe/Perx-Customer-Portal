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
    if (listAuctionState !== null) { 
      setProducts(listAuctionState);
    } else {
      swal({
        title: "Oops!",
        text: listAuctionState.message,
        icon: "error",
        button: "Ok",
      });
    }
  })

  // useEffect(() => {
  //   if (listAuctionState !== null) {
  //     if (
  //       listAuctionState.status === 1 &&
  //       listAuctionState.success === true
  //     ) {
  //       setProducts(listAuctionState);
  //     }

  //     if (
  //       listAuctionState.data.status === 0 &&
  //       listAuctionState.data.success === false
  //     ) {
  //       swal({
  //         title: "Oops!",
  //         text: listAuctionState.data.message,
  //         icon: "error",
  //         button: "Ok",
  //       });
  //     }
  //   }
  // }, [listAuctionState]);

  console.log('LIST AUCTION STATE ', listAuctionState)

  // const displayProducts = listAuctionState.map((product) => {
    
  //   return (
  //     <DisplayProducts
  //       discount={true}
  //       addClass="inner-quickview inner-icon pl-3 pr-3"
  //       product={product}
  //       key={"flex-grid" + "1 increasing"}
  //     />
  //   );
  // });

  return (
    <div className={`product-group row mx-0 divide-line up-effect`}>
      {loading ? <Loading /> : ""}
      {listAuctionState.map(res => 
        <DisplayProducts
        discount={true}
        addClass="inner-quickview inner-icon pl-3 pr-3"
        product={res}
        key={"flex-grid" + "1 increasing"}
      />
      )}
    </div>
  );
}

export default AuctionProducts;
