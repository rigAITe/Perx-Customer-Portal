import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import SuccessModalWithButton from "../../../../../src/components/common/modals/SuccessModalWithButton.jsx";
import { AuctionContext } from "../../../../context/Auctions.js";
import LoaderContext from "../../../../context/Loading.js";
import Loading from "../../../features/Loader/Loading.jsx";
import swal from "sweetalert";
import { isStateHandled } from "../../../../../src/utils/index.js";

function AuctionSummary(props) {
  const { cartItmes, deliveryData } = props;
  const { calculateDelivery, deliveryState } = useContext(AuctionContext);
  const { loading } = useContext(LoaderContext);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (
      isStateHandled(deliveryState) &&
      !isStateHandled(deliveryState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(deliveryState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (isStateHandled(deliveryState) && isStateHandled(deliveryState).status) {
      setShowSuccess(true);
      return;
    }
  }, [deliveryState.data]);

  const proceedToPay = () => {
    const data = {
      auction_ref_no: deliveryData.auction_ref_no,
      member_no: deliveryData.member_no,
      to_city: deliveryData.city_id,
      to_address: deliveryData.address,
    };

    calculateDelivery(data);
  };
  return (
    <>
      {loading ? <Loading /> : ""}
      <div className="card cap-table grey-bg">
        <div className="card-body">
          <h5>Summary</h5>
          <div
            style={{ borderTop: "1px solid #DFDFDF", paddingTop: "10px" }}
            className="row"
          >
            <div className="col-md-2 col-lg-2 col-2">
              <img src={require("../../../../demo/bag-1.jpg")} alt="" />
            </div>
            <div className="col-md-6 col-lg-6 col-6">
              <h5 style={{ color: "#22242A" }}>
                Nike Air Jordan 13 XIII Retro Low Clot Terracotta Sepia Size 13
              </h5>
            </div>
            <div className="col-md-4 col-lg-4 col-4">
              <p className="bold">
                10, 500 <span className="ruby-tag">Rubies</span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginBottom: "0rem",
            border: "none",
            borderTop: "1px solid #DFDFDF",
          }}
          className="card"
        >
          <div className="card-body">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div>
                <p>Subtotal</p>
                <p>Delivery cost</p>
                <p className="bold">Grand total</p>
              </div>
              <div>
                <p>10,500 Rubies</p>
                <p>500 Rubies</p>
                <p className="bold">11,000 Rubies</p>
              </div>
            </div>
            <button
              onClick={() => proceedToPay()}
              className="btn btn-block btn-sm btn-primary float-right"
            >
              Process Order & Pay
            </button>
          </div>
        </div>
      </div>
      {showSuccess === true ? (
        <SuccessModalWithButton
          hidemodal={() => setShowSuccess(false)}
          data={{
            messageTitle: `Order Successful`,
            messageBody: `Your order has been submited successfully`,
            buttonText: `View Order Details`,
            link: `${process.env.PUBLIC_URL}/pages/order_receipts`,
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}

const mapStateToProps = (state, props) => {
  return {
    cartItmes: state.cartList.cart ? state.cartList.cart : [],
  };
};

export default connect(mapStateToProps, {})(AuctionSummary);
