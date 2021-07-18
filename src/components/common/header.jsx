import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { isStateHandled } from "../../../src/utils/index.js";
import { useHistory } from "react-router-dom";

import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";

import "./header.css";
import swal from "sweetalert";
import { isIEBrowser } from "../../utils";
import { LoginContext } from "../../context/Auth";
import Loading from "../features/Loader/Loading";
import LoaderContext from "../../context/Loading";
import Shop_subMenu from "./SubMenu.jsx";
import SubMenu from "./index.jsx";



function Header(props) {
  let history = useHistory();

  const {
    showProfile,
    getUserBalance,
    profileState,
    userBalanceState,
    isAuthenticatedState,
    logout,
    logoutState,
  } = useContext(LoginContext);
  const { loading } = useContext(LoaderContext);
  const [userData, setUserData] = useState({});

  const phoneImage = "assets/images/demo/phone.png",
    badgePos = 2;

  function handleClick(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-active");
    e.currentTarget.classList.toggle("active");
    if (
      isIEBrowser() &&
      document.querySelector("body").classList.contains("mmenu-active")
    ) {
      document.querySelector(
        ".mmenu-active .mobile-menu-container"
      ).style.transform = "translateX(0)";
    }
  }

  useEffect(() => {
    showProfile();
    getUserBalance();
  }, []);

  const balance =() => {

  }

  useEffect(() => {
    if (userBalanceState.data && userBalanceState.data !== null) {
      if (
        userBalanceState.data.status === 1 &&
        userBalanceState.data.success === true
      ) {
        const userData = userBalanceState.data.data;
        setUserData((data) => ({
          ...data,
          current_balance: userData.current_balance,
          point_name: userData.point_name,
        }));
      }
    }
  }, [userBalanceState]);

  useEffect(() => {

    // console.log('Profile Data',profileState.data)

    if (profileState.data && profileState.data !== null) {
      const userData = profileState.data.data;

      if (profileState.data === 401) {
        return;
      }


      setUserData((data) => ({
        ...data,
        first_name: userData.first_name,
        last_name: userData.last_name,
        middle_name: userData.middle_name,
        sex: userData.sex,
      }));
    }
  }, [profileState]);

  useEffect(() => {
    if (userBalanceState.data && userBalanceState.data !== null) {
      const userData = userBalanceState.data.data;

      setUserData((data) => ({
        ...data,
        balance: userData,
      }));
    }
  }, [userBalanceState]);

  useEffect(() => {
    if (isStateHandled(logoutState) && !isStateHandled(logoutState).status) {
      swal({
        title: "Oops!",
        text: isStateHandled(logoutState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (isStateHandled(logoutState) && isStateHandled(logoutState).status) {
      history.push("/pages/login");
    }
  }, [logoutState.data]);

  const isURLActive = (url) => {
    const pathname = window.location.pathname;

    if (pathname !== url) {
      return false;
    }

    return true;
  };

  return (
    <header className="header">
      {loading ? <Loading /> : ""}
      <div className="header-top">
        <div className="container">
          {/* <div className="header-left d-none d-sm-block">
            <p className="top-message ">
              Welcome to Company Rewards
            </p>
          </div> */}

          <div className="header-right header-dropdowns w-sm-100">
            <div className="header-dropdown dropdown-expanded d-none d-lg-block">
              <Link to="#">Links</Link>
              <div className="header-menu">
                <ul>
                  <li>
                    <Link
                      className={`${
                        isURLActive(`${process.env.PUBLIC_URL}/pages/shop`) ===
                        true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/shop`}
                    >
                      Shop{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                          isURLActive(`${process.env.PUBLIC_URL}/pages/meal`) || isURLActive(`${process.env.PUBLIC_URL}/pages/meal/dine-in` )===
                        true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/meal`}
                    >
                      Meal
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        isURLActive(`${process.env.PUBLIC_URL}/pages/auction`) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/auction`}
                    >
                      Auction
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        isURLActive(`${process.env.PUBLIC_URL}/pages/entertainment/cinema`) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/entertainment/cinema`}
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`${
                        isURLActive(`${process.env.PUBLIC_URL}/pages/contact`) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/contact`}>
                      Uber Voucher
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        isURLActive(
                          `${process.env.PUBLIC_URL}/pages/airtime_bills`
                        ) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/airtime_bills`}
                    >
                      Airtime and Bills
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`${
                        isURLActive(
                          `${process.env.PUBLIC_URL}/pages/survey`
                        ) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/survey`}>
                      Survey
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        isURLActive(
                          `${process.env.PUBLIC_URL}/pages/discount`
                        ) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/discount`}
                    >
                      Discount
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        isURLActive(
                          `${process.env.PUBLIC_URL}/pages/sweepstake`
                        ) || isURLActive(
                          `${process.env.PUBLIC_URL}/pages/view-sweepstake`
                        ) || isURLActive(
                          `${process.env.PUBLIC_URL}/pages/sweepstake_history`
                        )=== true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/sweepstake`}
                    >
                      Sweepstakes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        isURLActive(
                          `${process.env.PUBLIC_URL}/pages/experience&travel/experience` 
                        ) || isURLActive(
                          `${process.env.PUBLIC_URL}/pages/experience&travel/travel` 
                        ) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/experience&travel/experience`}
                      >
                      Travel & Experiences
                    </Link>
                  </li>
                  <li>
                    <Link 
                      className={`${
                        isURLActive(
                          `${process.env.PUBLIC_URL}/pages/promocode`
                        ) === true
                          ? "header-active"
                          : ""
                      }`}
                      to={`${process.env.PUBLIC_URL}/pages/promocode`}>
                      Promo Code
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <span className="separator"></span>

            <div className="social-icons">
              <Link
                to="#"
                className="social-icon social-instagram icon-instagram"
                target="_blank"
              ></Link>
              <Link
                to="#"
                className="social-icon social-twitter icon-twitter"
                target="_blank"
              ></Link>
              <Link
                to="#"
                className="social-icon social-facebook icon-facebook"
                target="_blank"
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-middle">
        <div className="container">
          <div className="header-left col-lg-2 w-auto pl-0">
            <button
              className="mobile-menu-toggler"
              type="button"
              onClick={handleClick}
            >
              <i className="icon-menu"></i>
            </button>
            <Link to={`${process.env.PUBLIC_URL}/`} className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/demo/logo.svg`}
                alt="Customer Logo"
              />
            </Link>
          </div>

          <div className="header-right w-lg-max ml-0">
            <SearchForm
              addClass="header-icon header-search-inline header-search-category w-lg-max pl-0"
              iconClass="icon-search-3"
            />

            {isAuthenticatedState ? (
              <>
                <div className="header-contact d-none d-lg-flex pl-4 ml-3 mr-xl-5 pr-4">
                  {/* <img alt="phone" src={ `${ process.env.PUBLIC_URL }/` + phoneImage } width="30" height="30" className="pb-1" /> */}
                  <h6>
                    HI {userData.first_name}
                    <Link to="#" className="font1">
                      {userData.current_balance}{" "}
                      <span className="rubies-span">{userData.point_name}</span>
                    </Link>
                  </h6>
                </div>

                <Link
                  to={`${process.env.PUBLIC_URL}/pages/dashboard/board`}
                  className="header-icon"
                  title="Profile"
                >
                  <i className="icon-user-2"></i>
                </Link>

                <Link
                  to={`${process.env.PUBLIC_URL}/pages/wishlist`}
                  className="header-icon"
                  title="Wishlist"
                >
                  <i className="icon-wishlist-2"></i>
                </Link>
              </> 
            ) : (
              ""
            )}

            <CartMenu btnClass="btn-dark" />

            {isAuthenticatedState ? (
              <Link
                onClick={() => logout()}
                className={`ml-2 header-text font-weight-bold`}
              >
                Logout
              </Link>
            ) : (
              <Link
                className={`header-text font-weight-bold`}
                to={`${process.env.PUBLIC_URL}/pages/login`}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* <div className="header-bottom sticky-header d-none d-lg-block">
        <div className="container">
          <MainMenu active={0} badgePos={badgePos} />
        </div>
      </div> */}

      <div className="header-bottom sticky-header d-none d-lg-block">
        <div className="container">
        { isURLActive(`${process.env.PUBLIC_URL}/pages/shop`) === true 
          ? <SubMenu.Shop_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/pages/airtime_bills`) === true 
          ? <SubMenu.AirtimeBill_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/`) === true
          ? <SubMenu.Auction_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/pages/discount`) === true
          ? <SubMenu.Discount_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/pages/meal`) || isURLActive(`${process.env.PUBLIC_URL}/pages/meal/dine-in` ) === true
          ? <SubMenu.Meals_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/pages/survey`) === true
          ? <SubMenu.Survey_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/pages/sweepstake`) || isURLActive(`${process.env.PUBLIC_URL}/pages/view-sweepstake`) || isURLActive(`${process.env.PUBLIC_URL}/pages/sweepstake_history`) === true
          ? <SubMenu.Sweepstake_subMenu/> : ""
        }
        { isURLActive(`${process.env.PUBLIC_URL}/pages/experience&travel/experience`) || isURLActive(`${process.env.PUBLIC_URL}/pages/experience&travel/travel`)  === true
          ? <SubMenu.Experience_Travel_subMenu/> : ""
        }
        </div>
      </div>
    </header>
  );
}

export default Header;
