import React, { useEffect, useState, useContext } from "react";

// Components
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../../../../../src/components/common/breadcrumb.jsx";
import HorizontalThumbnail from "./horizontal-thumbnail";
import SingleDetail from "./single-detail";
import SingleTab from "./single-tab";
import FeaturedProductsOne from "./featured-products-one.jsx";

// Context
import { AuctionContext } from "../../../../../../context/Auctions.js";
import LoaderContext from "../../../../../../context/Loading.js";

// UI
import swal from "sweetalert";
import Loading from "../../../../../features/Loader/Loading.jsx";

function ViewSingleAuction(props) {
  const { getSingleAuction, singleAuctionState } = useContext(AuctionContext);
  const { loading } = useContext(LoaderContext);
  const [getProduct, setProduct] = useState([]);

  useEffect(() => {
    getSingleAuction(getAuctionRefNo());
  }, []);

  const getAuctionRefNo = () => {
    const pathname = window.location.pathname;
    const auctionRefNo = pathname.split("/")[3];
    return auctionRefNo;
  };

  useEffect(() => {
    if (singleAuctionState.data !== null) {
      if (
        singleAuctionState.data.status === 1 &&
        singleAuctionState.data.success === true
      ) {
        setProduct(singleAuctionState.data.data);
      }

      if (
        singleAuctionState.data.status === 0 &&
        singleAuctionState.data.success === false
      ) {
        swal({
          title: "Oops!",
          text: singleAuctionState.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  }, [singleAuctionState.data]);

  return (
    <>
      {loading ? <Loading /> : ""}
      <Helmet>
        <title>Customer Portal - Product Product Id here</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Product Product Id here</h1>

      <div className="main">
        <Breadcrumb current="Product" path="Auction" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12 product-page skeleton-body skel-shop-products loaded">
              <div className="product-single-container product-single-default">
                <div className="row">
                  <HorizontalThumbnail
                    addClass="col-lg-5 col-md-6"
                    product={getProduct}
                  />

                  <div className="col-lg-7 col-md-6">
                    <SingleDetail auction product={getProduct} />
                  </div>
                </div>
              </div>

              {/* <SingleTab product={null} /> */}
            </div>
          </div>
        </div>

        <FeaturedProductsOne />
      </div>
    </>
  );
}

export default ViewSingleAuction;
