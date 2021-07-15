import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { LoginContext } from "../../../../context/Auth";
import LoaderContext from "../../../../context/Loading";
import toastr from "toastr";

import "../login/login.css";
import swal from "sweetalert";
import Breadcrumb from "../../../common/breadcrumb";
import { isStateHandled } from "../../../../../src/utils/index.js";
import Loading from "../../../features/Loader/Loading";

function ForgetPassword() {
  const { forgotPassword, resetLinkState, inputs, setInputs } = useContext(
    LoginContext
  );
  const { loading } = useContext(LoaderContext);

  useEffect(() => {
    if (resetLinkState.data !== null) {
      if (resetLinkState.data.status === 0 && resetLinkState.data.data) {
        console.log(resetLinkState.data.data);
        const errorMessages = resetLinkState.data.data;

        for (const error in errorMessages) {
          toastr.error(errorMessages[error], "Validation Error!", {
            iconClass: "toast-error",
          });
        }
        return;
      }
    }

    if (
      isStateHandled(resetLinkState) &&
      !isStateHandled(resetLinkState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(resetLinkState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(resetLinkState) &&
      isStateHandled(resetLinkState).status
    ) {
      swal({
        title: "Success!",
        text: `A password reset link has been sent to your email`,
        icon: "success",
        button: "Ok",
      });
      return;
    }
  }, [resetLinkState.data]);

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      {loading ? <Loading /> : ""}
      <Helmet>
        <title>FORGOT PASSWORD PAGE </title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Forgot Password Page</h1>

      {/* <div className="main">
        <div className=""> */}
          <div className="row">
            <div className="col-md-6 col-lg-6 forget-bg">
              <Breadcrumb current="Forgot Password" />
            </div>
            <div className="col-md-6 col-lg-6 login-container">
              <div className="heading forgotpassword">
                <h4 className="title">Forgot Password</h4>
                <p>Do a password reset here.</p>
              </div>

              <form className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                  name="email"
                  onChange={handleInputChange}
                  value={inputs.email}
                />
                <div className="form-footer">
                  <button
                    onClick={forgotPassword}
                    type="button"
                    className="btn btn-primary"
                  >
                    Reset Password
                  </button>
                  <button
                    style={{ visibility: "hidden" }}
                    className="forget-pass"
                  >
                    {" "}
                    Forgot your password?
                  </button>
                </div>
              </form>
            </div>
          </div>
        {/* </div> */}

        {/* <div className="mb-5"></div> */}
      {/* // </div> */}
    </>
  );
}

export default ForgetPassword;
