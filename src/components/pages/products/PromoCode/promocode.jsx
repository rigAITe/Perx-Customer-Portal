import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./promocode.css";
import { useHistory } from "react-router-dom";
import toastr from "toastr";

import Breadcrumb from "../../../common/breadcrumb";
import { LoginContext } from "../../../../context/Auth";
import Loading from "../../../features/Loader/Loading";
import LoaderContext from "../../../../context/Loading";
import SuccessModal from "../../../common/modals/SuccessModal";

function PromoCode() {
  const { login, setInputs, inputs, state } = useContext(LoginContext);
  const { loading } = useContext(LoaderContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  let history = useHistory();

  toastr.options.progressBar = true;
  toastr.options = {
    toastClass: "alert",
    iconClasses: {
      error: "alert-error",
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
    },
  };

  const activatePromocode = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  useEffect(() => {
    if (state.data !== null) {
      if (state.data.status === 1 && state.data.success === true) {
        //   check first login, if first login, redirect to accept terms and conditions
        const origin = window.location.origin;
        window.location.href = `${origin}/pages/dashboard/board`;

        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
          console.log("development login");
          window.location.href = `${origin}/pages/dashboard/board`;
        } else {
          const origin = window.location.origin;
          const path = "demo_perx2_season/portals/customer";
          console.log("production login");
          window.location.href = `${origin}/${path}/pages/dashboard/board`;
        }
      }

      if (state.data.data.status === 0 && state.data.data.success === false) {
        if (state.data.data.message && !state.data.data.data) {
          toastr.error(state.data.message, "Login failed!", {
            iconClass: "toast-error",
          });
          return;
        }

        const errorMessages = state.data.data.data;

        for (const error in errorMessages) {
          toastr.error(errorMessages[error], "Login failed!", {
            iconClass: "toast-error",
          });
        }
      }
    }
  }, [history, state]);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>PROMOCODE PAGE </title>
      </Helmet>
      {loading ? <Loading /> : ""}

      <h1 className="d-none">Customer Portal - Promocode Page</h1>

      <div className="row">
        <div className="d-flex flex-column col-md-6 col-lg-6 promo-bg">
          <Breadcrumb current="Promo Code" />
          <div className="mx-auto mt-5">
            <h3 style={{ color: "#0037b0" }} className="">
              Promo Code
            </h3>
            <div className="p-0 col-md-8">
              Enter your promo code to start enjoying benefits
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 login-container">
          <div className="col-md-8 promo-code">
            <div className="heading">
              <h4 className="title">Enter Promo code</h4>
            </div>

            <form className="form-group" action="#">
              <label htmlFor="email">Promo code</label>
              <input
                type="email"
                className="form-control"
                placeholder="Promo code"
                required
                name="promocode"
                onChange={handleInputChange}
                value={inputs.username}
              />
              <div className="form-footer">
                <button
                  onClick={activatePromocode}
                  type="button"
                  className="btn btn-primary"
                >
                  Activate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccessModal ? (
        <SuccessModal
          closeSuccessModal={() => closeSuccessModal()}
          messageTitle="Success"
          messageBody="Promo code activated successfully"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default PromoCode;
