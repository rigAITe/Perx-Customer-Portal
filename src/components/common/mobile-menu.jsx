import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SlideToggle } from "react-slide-toggle";
import { LoginContext } from "../../context/Auth";

//Import Utils
import { isIEBrowser } from "../../utils";

function MobileMenu() {

  const {
    logout,
    isAuthenticatedState,
  } = useContext(LoginContext);

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  });

  useEffect(() => {
    document
      .querySelector(".mobile-menu-overlay")
      .addEventListener("click", closeMobileMenu);
    document
      .querySelector(".mobile-menu-close")
      .addEventListener("click", closeMobileMenu);

    return () => {
      if (document.querySelector("body").classList.contains("mmenu-active")) {
        document.querySelector("body").classList.remove("mmenu-active");
      }
    };
  });

  const closeMobileMenu = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.remove("mmenu-active");
    if (document.querySelector(".menu-toggler")) {
      document.querySelector(".menu-toggler").classList.remove("active");
    }

    if (
      isIEBrowser() &&
      !document.querySelector("body").classList.contains("mmenu-active")
    ) {
      document.querySelector(".mobile-menu-container").style.transform =
        "translateX(-100%)";
    } 
  };
  return (
    <>
      <div className="mobile-menu-overlay"></div>
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-cancel"></i>
          </span>
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li
                className={
                  path === process.env.PUBLIC_URL + "/" ? "active" : ""
                }
              >
                <Link to={`${process.env.PUBLIC_URL}`}>Home</Link>
              </li>    
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      SHOP
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/shop`}
                        >
                          Fashion
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-slider`}
                        >
                          Baby & Kids
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-image`}
                        >
                          Gadget
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/sidebar-left`}
                        >
                          Beauty
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/sidebar-right`}
                        >
                          Groceries
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/flex-grid`}
                        >
                          Appliances
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle>
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      MEAL
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/meal`}
                        >
                          Take In
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/meal/dine-in`}
                        >
                          Dine In
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle>            
              <li
                className={path.indexOf("categories/") > -1 ? "active" : ""}
              >
                <Link
                  to="#"
                  rel="noopener noreferrer"
                  to={`${process.env.PUBLIC_URL}`}
                >
                  Auction
                </Link>
              </li>
              <li
                className={path.indexOf("categories/") > -1 ? "active" : ""}
              >
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/entertainment/cinema`}
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/login`}
                  rel="noopener noreferrer"
                >
                  Uber Voucher
                </Link>
              </li>
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      Airtime and Bills
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/full-width`}
                        >
                          Transport and Toll Payment
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-slider`}
                        >
                          Cable Bills
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/full-width`}
                        >
                          Utilities
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-slider`}
                        >
                          Airtime
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/full-width`}
                        >
                          Data
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-slider`}
                        >
                          School and Exams
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle>
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      SURVEY
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/survey`}
                        >
                          Available Survey
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/meal/dine-in`}
                        >
                          Incomplete Survey
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle>
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      DISCOUNT
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                        to={`${process.env.PUBLIC_URL}/pages/discount`}
                        >
                          Fashion
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-slider`}
                        >
                          Baby & Kids
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/boxed-image`}
                        >
                          Gadget
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/sidebar-left`}
                        >
                          Beauty
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/sidebar-right`}
                        >
                          Groceries
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/flex-grid`}
                        >
                          Appliances
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle>
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      TRAVEL & EXPERIENCE
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/experience&travel/experience`}
                        >
                          Experience
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/experience&travel/travel`}
                        >
                          Travel
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle> 
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <li
                    className={path.indexOf("categories/") > -1 ? "active" : ""}
                  >
                    <Link
                      to="#"
                      data-toggle="collapse"
                      onClick={onToggle}
                      className={toggleState.toLowerCase()}
                    >
                      SWEEPSTAKES
                      <span className="mmenu-btn"></span>
                    </Link>
                    <ul ref={setCollapsibleElement}>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/sweepstake`}
                        >
                          All Sweepstakes
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/sweepstake_history`}
                        >
                          History
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </SlideToggle>
              <li
                className={path.indexOf("categories/") > -1 ? "active" : ""}
              >
                <Link
                  to="#"
                  rel="noopener noreferrer"
                  to={`${process.env.PUBLIC_URL}/pages/promocode`}
                  
                >
                  PROMO CODE
                </Link>
              </li>

              <li>
                <Link
                onClick={() => logout()}
                  rel="noopener noreferrer"
                >
                  { isAuthenticatedState ? 'Logout ' : 'Login'}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="social-icons">
            <Link to="#" className="social-icon" target="_blank">
              <i className="icon-facebook"></i>
            </Link>
            <Link to="#" className="social-icon" target="_blank">
              <i className="icon-twitter"></i>
            </Link>
            <Link to="#" className="social-icon" target="_blank">
              <i className="icon-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
