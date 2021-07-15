import React, { useEffect, useLayoutEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { findProductById } from "../../../utils";
import { isStateHandled } from "./../../../../src/utils/index.js";

import imagesLoaded from "imagesloaded";
import Breadcrumb from "../../common/breadcrumb";
import HorizontalThumbnail from "./common/thumbnails/horizontal-thumbnail";
import SingleDetail from "./common/details/single-detail";
import SingleTab from "./common/tabs/single-tab";
import FeaturedProductsOne from "./common/product-groups/featured-products-one";
import AuctionDetail from "./common/details/auction-detail";

import swal from "sweetalert";
import LoaderContext from "../../../context/Loading";
import { AuctionContext } from "../../../context/Auctions";
import Loading from "../../features/Loader/Loading";



function RedeemAuction(props) {
  const { getSingleClaim, singleClaimState } = useContext(AuctionContext);
  const { loading } = useContext(LoaderContext);
  const [claimData, setClaimData] = useState({});

  const getURLParameter = (param) => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const getParameterValue = params.get(param);

    return getParameterValue;
  };

  useEffect(() => {
    const claim_data = {
      auction_ref_no: getURLParameter("auction_ref_no"),
      member_no: getURLParameter("member_no"),
    };

    getSingleClaim(claim_data);
  }, []);

  useEffect(() => {
    if (
      isStateHandled(singleClaimState) &&
      !isStateHandled(singleClaimState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(singleClaimState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(singleClaimState) &&
      isStateHandled(singleClaimState).status
    ) {
      setClaimData(singleClaimState.data.data);
    }
  }, [singleClaimState.data]);

  let products = props.products;
  let product = findProductById(products, props.productId);

  if (!product) {
    window.location = process.env.PUBLIC_URL + "/pages/404";
  }

  useLayoutEffect(() => {
    document.querySelector(".skeleton-body") &&
      document.querySelector(".skeleton-body").classList.remove("loaded");
  }, [props.productId]);

  useEffect(() => {
    let imgLoad = imagesLoaded(".product-single-gallery");

    imgLoad.on("done", function() {
      document.querySelector(".skeleton-body") &&
        document.querySelector(".skeleton-body").classList.add("loaded");
    });
  }, [props.productId]);

  return (
    <>
      {loading ? <Loading /> : ""}
      <Helmet>
        <title>Customer Portal - Redeem Auction</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Redeem Auction</h1>

      <div className="main">
        <Breadcrumb current="Product" path="Auction" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12 product-page skeleton-body skel-shop-products">
              <div className="product-single-container product-single-default">
                <div className="row">
                  <HorizontalThumbnail
                    addClass="col-lg-5 col-md-6"
                    product={product}
                  />

                  <div className="col-lg-7 col-md-6">
                    <AuctionDetail auction product={claimData} />
                  </div>
                </div>
              </div>

              <SingleTab product={product} />
            </div>
          </div>
        </div>

        <FeaturedProductsOne />
      </div>
    </>
  );
}

const mapStateToProps = (state, props) => {
  return {
    products: state.data.products ? state.data.products : [],
    productId: props.match.params.id ? props.match.params.id : 1,
  };
};

export default connect(mapStateToProps, {})(RedeemAuction);
