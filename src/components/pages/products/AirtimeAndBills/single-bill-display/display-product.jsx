import React, { useEffect, useState, useContext } from "react";

// Components
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../../../../src/components/common/breadcrumb.jsx";
import HorizontalThumbnail from "./horizontal-thumbnail";
import SingleDetail from "./single-detail";

// Context

// UI
import swal from "sweetalert";
import { AuctionContext } from "../../../../../context/Auctions.js";
import Loading from "../../../../features/Loader/Loading.jsx";
import LoaderContext from "../../../../../context/Loading.js";

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
      {/* {loading ? <Loading /> : ""} */}
      <Helmet>
        <title>Customer Portal - Redeem Cable Bills</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Redeem Cable Bills</h1>

      <div className="main">
        <Breadcrumb current="Bills" path="Cable Bills" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12 product-page skeleton-body skel-shop-products loaded">
              <div className="product-single-container product-single-default">
                <div className="row">
                  <HorizontalThumbnail
                    addClass="col-lg-5 col-md-6"
                    product={{ image: [1, 2, 3, 4] }}
                  />

                  <div className="col-lg-7 col-md-6">
                    <SingleDetail auction product={getProduct} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewSingleAuction;
