import React, { useEffect, useState, useContext } from "react";

// Components
import { Helmet } from "react-helmet";
import Breadcrumb from "../../../../../common/breadcrumb.jsx";
import HorizontalThumbnail from "./horizontal-thumbnail";
import SingleDetail from "./single-detail";
import SingleTab from "./single-tab";

// Context
import { AuctionContext } from "../../../../../../context/Auctions.js";
import LoaderContext from "../../../../../../context/Loading.js";

// UI
import swal from "sweetalert";
import Loading from "../../../../../features/Loader/Loading.jsx";
import FeaturedProducts from "./ListProducts";

import event1 from "../../assets/events/event1.svg";
import event2 from "../../assets/events/event2.svg";
import event3 from "../../assets/events/event3.svg";
import event4 from "../../assets/events/event4.svg";

function SinglePlace(props) {
  const { loading } = useContext(LoaderContext);
  const [getProduct, setProduct] = useState([]);
  const buttonTitle = "View";
  const buttonLink = "/pages/entertainment/movie/single/1";
  const getAuctionRefNo = () => {
    const pathname = window.location.pathname;
    const auctionRefNo = pathname.split("/")[3];
    return auctionRefNo;
  };

  return (
    <>
      {loading ? <Loading /> : ""}
      <Helmet>
        <title>Customer Portal - Movie</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Movie</h1>

      <div className="main">
        <Breadcrumb current="Product" path="Movie" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12 product-page skeleton-body skel-shop-products loaded">
              <div className="product-single-container product-single-default">
                <div className="row">
                  <HorizontalThumbnail
                    addClass="col-lg-4 col-md-4"
                    product={{ image: [1] }}
                  />
                  <div className="col-lg-8 col-md-8">
                    <SingleDetail auction product={getProduct} />
                  </div>
                </div>
              </div>

              <SingleTab product={null} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePlace;
