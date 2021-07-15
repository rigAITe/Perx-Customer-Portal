import React, { useEffect, useLayoutEffect, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import imagesLoaded from "imagesloaded";

import Breadcrumb from "../../../common/breadcrumb";
import SurveyContainer from "./survey-container";
import { findProductById } from "../../../../utils";
import { SurveyContext } from "../../../../context/Survey";

import swal from "sweetalert";

function Survey(props) {
  const { getSurveyList, surveyList } = useContext(SurveyContext);
  const [list, setList] = useState([]);

  let products = props.products;
  let product = findProductById(products, props.productId);

  //   if (!product) {
  //     window.location = process.env.PUBLIC_URL + "/pages/404";
  //   }

  useEffect(() => {
    getSurveyList();
  }, []);

  useEffect(() => {
    if (surveyList.data !== null) {
      if (surveyList.data.status === 1 && surveyList.data.success === true) {
        setList(surveyList.data.data);
      }

      if (surveyList.data.status === 0 && surveyList.data.success === false) {
        swal({
          title: "Oops!",
          text: surveyList.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  }, [surveyList.data]);

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
      <Helmet>
        <title>Customer Portal - Survey</title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Survey</h1>

      <div className="main">
        <Breadcrumb current="Survey" />

        <div className="container">
          <div className="row">
            <div className="col-lg-12 product-page skeleton-body skel-shop-products">
              {list &&
                list.map((survey) => {
                  return (
                    <SurveyContainer
                      surveyDetails={survey}
                      uri={require("./images/image1.png")}
                    />
                  );
                })}
            </div>
          </div>
          <div className="mb-2"></div>
        </div>
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

export default connect(mapStateToProps, {})(Survey);
