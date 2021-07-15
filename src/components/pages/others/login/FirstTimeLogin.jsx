import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./login.css";
import { useHistory } from "react-router-dom";
import toastr from "toastr";
import swal from "sweetalert";

import Breadcrumb from "../../../common/breadcrumb";
import { LoginContext } from "../../../../context/Auth";
import Loading from "../../../features/Loader/Loading.jsx";
import LoaderContext from "../../../../context/Loading";

function FirstTimeLogin() {
  const { firstTimeLogin, setInputs, inputs, state } = useContext(
    LoginContext
  );
  const { loading } = useContext(LoaderContext);

  const [checked, setChecked] = useState(false);
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

  useEffect(() => {
    if (state.data !== null) {
      console.log(state.data.data);
      if (state.data.status === 1 && state.data.success === true) {
        history.push("/pages/dashboard/board");
      }

      if (state.data.status === 0 && !state.data.data) {
        swal({
          title: "Oops!",
          text: state.data.message,
          icon: "error",
          button: "Ok",
        });
        return;
      }

      if (state.data.status === 0 && state.data.data) {
        const errorMessages = state.data.data;

        for (const error in errorMessages) {
          toastr.error(errorMessages[error], "Validation Error!", {
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

  const handleChange = (event) => {
    event.persist();
    setChecked(event.target.checked);
    const terms = event.target.checked === true ? 1 : 0;
    setInputs((data) => ({
      ...data,
      [event.target.name]: terms,
    }));
  };

  return (
    <>
      <Helmet>
        <title>FIRST TIME LOGIN PAGE </title>
      </Helmet>
      {loading ? <Loading /> : ""}
      <h1 className="d-none">Customer Portal - First Time Login Page</h1>

      <div className="main">
        <div className="">
          <Breadcrumb current="First Time Login" />
          <div className="row">
            <div className="col-md-6 col-lg-6 login-bg"></div>
            <div className="col-md-3 col-lg-3 first-login-container login-container">
              <div className="heading">
                <h4 className="title">First Time Login</h4>
                <p>Please change your password</p>
              </div>

              <form className="form-group" action="#">
                <label htmlFor="email">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  required
                  name="new_password"
                  onChange={handleInputChange}
                  value={inputs.new_password}
                />
                <label htmlFor="email">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                  name="confirm_password"
                  onChange={handleInputChange}
                  value={inputs.confirm_password}
                />

                <p className="text-muted terms-condition my-3">
                  Kindly indicate your acceptance of the company rewards{" "}
                  <Link
                    to={`${process.env.PUBLIC_URL}`}
                    className="forget-pass"
                  >
                    {" "}
                    Terms & Conditions
                  </Link>{" "}
                  by clicking on the link below
                </p>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked={checked}
                    name="terms"
                    onChange={handleChange}
                  />
                  <span className="ml-3 font-weight-bold terms-condition">
                    I Agree to the GemZones Terms & Conditions
                  </span>
                </div>

                <div className="form-footer">
                  <button
                    onClick={firstTimeLogin}
                    type="button"
                    className="btn btn-primary"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="mb-5"></div> */}
      </div>
    </>
  );
}

export default FirstTimeLogin;
