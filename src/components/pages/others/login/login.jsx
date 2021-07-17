import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./login.css";
import { useHistory } from "react-router-dom";
import toastr from "toastr";

import Breadcrumb from "../../../common/breadcrumb";
import { LoginContext } from "../../../../context/Auth";
import Loading from "../../../features/Loader/Loading";
import LoaderContext from "../../../../context/Loading";
import Visible from '../common/assets/invisibility.svg'
import Invisible from '../common/assets/visibility.svg'


function Login() {
  const { login, setInputs, inputs, state } = useContext(LoginContext);
  const { loading } = useContext(LoaderContext);
  const [ visible, setVisible ] = useState(false)

  const visibility = () => {
    setVisible(!visible)
  }
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
      if (state.data.status === 1 && state.data.success === true) {
        //   check first login, if first login, redirect to accept terms and conditions
        const origin = window.location.origin;
        window.location.href = `${origin}/pages/dashboard/board`;

        if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
          console.log("development login");
          window.location.href = `${origin}/pages/dashboard/board`;
        } else {
          const origin = window.location.origin;
          // const path = "demo_perx2_season/portals/customer";
          console.log("production login");
          window.location.href = `${origin}/pages/dashboard/board`;
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
        <title>LOGIN PAGE </title>
      </Helmet>
      {loading ? <Loading /> : ""}

      <h1 className="d-none">Customer Portal - Login Page</h1>

      <div className="row">
        <div className="col-md-6 col-lg-6 login-bg">
          <Breadcrumb current="Login" />
        </div>
        <div className="col-md-4 col-lg-6 login-container">
          <div className="heading">
            <h4 className="title">Hello, Let's get you started</h4>
            <p>If you have an account with us, please log in.</p>
          </div>

          <form className="form-group" action="#">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
              name="username"
              onChange={handleInputChange}
              value={inputs.username}
            />
            <label htmlFor="email">Password</label>
            <div style={{display: 'flex', border: '1px solid #dad6d6', paddingRight: '10px'}}>
                    <input style={{border: 'none'}} 
                    type={visible ? "text" : "password" }  
                    placeholder="Password" 
                    className="form-control" 
                    name="password" 
                    required  
                    onChange={handleInputChange} 
                    value={inputs.password}/>
                    <img src={ visible ? Visible : Invisible} alt="Password" onClick={() => visibility()}/>
                  </div>
            {/* <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              name="password"
              onChange={handleInputChange}
              value={inputs.password}
            /> */}

            <div className="form-footer">
              <button onClick={login} type="button" className="btn btn-primary">
                LOGIN
              </button>
              <Link
                to={`${process.env.PUBLIC_URL}/pages/forgot-password`}
                className="forget-pass"
              >
                {" "}
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
