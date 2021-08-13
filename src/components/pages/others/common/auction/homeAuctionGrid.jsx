// React hooks and context
import React, { useState, useContext, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import { shopFilterProducts } from "../../../../../utils";
import LoaderContext from "../../../../../context/Loading.js";
import { AuctionContext } from "../../../../../context/Auctions.js";
import Pagination from "react-js-pagination";

// COmponents
import HomeDisplayProducts from "./homeDisplay.jsx";
import Loading from "../../../../features/Loader/Loading.jsx";

// CSS
import swal from "sweetalert";

function HomeAuctionProducts(props) {
  const { listHomeAuctionState, listHomeAuctions, auctionCurrentPage, auctionPerPage, auctionTotalPage } = useContext(AuctionContext);
  const { loading } = useContext(LoaderContext);
  const [getProducts, setProducts] = useState([]);

  useEffect(() => {
    listHomeAuctions(getAuctionCategory());
  }, [getAuctionCategory]);

  const getAuctionCategory = () => {
    const pathname = window.location.pathname;
    const auctionRefNo = pathname.split("/")[3];
    return auctionRefNo;
  };

  useEffect(() => {
    if (listHomeAuctionState !== null) {
      setProducts(listHomeAuctionState);
    } else {
      swal({
        title: "Oops!",
        text: listHomeAuctionState.message,
        icon: "error",
        button: "Ok",
      });
    }
  })

  console.log(' PER PAGE ', auctionTotalPage)

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
    <div>
      <div className={`product-group row mx-0 divide-line up-effect`}>
        {loading ? <Loading /> : ""}
        {getProducts.map(res =>
          <HomeDisplayProducts
            discount={true}
            addClass="inner-quickview inner-icon pl-3 pr-3"
            product={res}
            key={"flex-grid" + "1 increasing"}
          />
        )}
      </div>
      <div style={{ paddingTop: '20px' }}>
          <Pagination
            activePage={auctionCurrentPage}
            totalItemsCount={auctionTotalPage}
            itemsCountPerPage={auctionPerPage}
            onChange={(pageNumber) => listHomeAuctions(getAuctionCategory(), pageNumber)}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First"
            lastPageText="Last"
          />
        </div>
    </div>
  );
}

export default HomeAuctionProducts;
