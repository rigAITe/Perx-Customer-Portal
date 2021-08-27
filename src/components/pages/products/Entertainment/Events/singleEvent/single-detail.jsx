import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { findIndex, getPrice } from "../../../../../../utils/index.js";
import Loading from "../../../../../features/Loader/Loading.jsx";
import { isStateHandled, formatNumber } from "../../../../../../utils/index.js";
import swal from "sweetalert";
import SuccessfulBidModal from "../../../../../common/modals/SuccessfulBidModal.jsx";
import { LoaderContext } from "../../../../../../context/Loading.js";
import "./singleEvent.css";
import AddRow from "./AddRow.jsx";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function SingleDetail(props) {
  const { toggleLoading } = useContext(LoaderContext);

  const [data, setData] = useState([])
  const [ticket, setTicket] = useState([])
  const [description, setDescription] = useState()
  const { loading } = useContext(LoaderContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { wishlist, product, isSticky = false, auction, auction_bid } = props;
  let isInWishlist = findIndex(wishlist, product.id) ? true : false;
  let maxPrice,
    minPrice = 0;

  if (product.variants) {
    maxPrice = getPrice(product.variants);
    minPrice = getPrice(product.variants, "min");
  }

  const selectGroup = (e) => {
    e.preventDefault();
    if (props.noSelect === undefined)
      document
        .querySelector(".product-single-gallery .owl-item.active img")
        .setAttribute("src", e.currentTarget.getAttribute("data-src"));

    e.currentTarget.parentElement.parentElement.querySelector(".active") &&
      e.currentTarget.parentElement.parentElement
        .querySelector(".active")
        .classList.remove("active");
    e.currentTarget.parentElement &&
      e.currentTarget.parentElement.classList.add("active");
  };

  function addToCart(e) {
    e.preventDefault();
    let val = 1;
    if (e.currentTarget.parentElement.querySelector(".horizontal-quantity"))
      val = parseInt(
        e.currentTarget.parentElement
          .querySelector(".horizontal-quantity")
          .getAttribute("value")
      );
    props.quickAddToCart(props.product, val);
  }

  function onWithWishClick(e) {
    if (!isInWishlist) {
      e.preventDefault();
      props.addToWishList(props.product);
    }
  }

  useEffect(() => {
    toggleLoading(true);
    if (props.data && props.data.ticketClassses !== undefined) {
      toggleLoading(false);
      setData(props.data)
      setTicket(props.data.ticketClassses)
      setDescription(props.data.description)
    }
  });

  // console.log('DATA ', (ticket))


  return (
    <>
      {/* {loading ? <Loading /> : ""} */}
      <div className="skel-pro skel-detail"></div>
      <div className="product-single-details">
        <div className="col-md-8 row less-margin">
          <h4>{data.title}</h4>
        </div>
        <div className="muted-text bold">Date:</div>
        <div className="muted-text bold">{data.date}</div>
        <h5 className="mt-3">Tickets</h5>
        <div className="p-0 col-lg-12">
          <div className="wishlist-table-container">
            <table className="table table-order table-wishlist">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {
                  ticket.map((res) =>{
                    res.quantity = 1
                    // setValue( res.quantity )
                    console.log('This is the res ', res.quantity)
                    return (
                      <AddRow
                        title={res.title}
                        venue={res.venue}
                        price={res.price}
                        point_name={res.point_name}
                        // value={res.quantity}
                        id={res.classid}
                        key={res.classid}
                      />
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="clearfix">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="">Email Address</label>
                        <input
                          placeholder="Email Address"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="">Phone Number</label>
                        <input
                          placeholder="Phone Number"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="d-flex mb-1 justify-content-end col-md-12">
                        <Link
                          to={`${process.env.PUBLIC_URL}/categories/full-width`}
                          className="btn btn-outline-primary col-md-4"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-dark bold medium-text">Grand Total</div>
          <div className="text-dark bold mb-2">
            10,500
            <span class="ruby-tag"> Rubies</span>
          </div>{" "}
          <div>
            {" "}
            <Link
              to={`${process.env.PUBLIC_URL}/categories/full-width`}
              className="btn btn-primary"
            >
              Redeem
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Tabs
          className={`mb-5 product-single-tabs`}
          selectedTabClassName="active"
          selectedTabPanelClassName="show"
        >
          <TabList className="nav nav-tabs nav-border-anim">
            <Tab className="nav-link">More Info</Tab>
          </TabList>
          <TabPanel className="tab-pane fade">
            {/* <div className="text-dark product-desc-content"> */}
              {description}
            {/* </div> */}
          </TabPanel>
        </Tabs>
      </div>
      {showSuccessModal ? (
        <SuccessfulBidModal
          // amount={inputs.amount}
          messageTitle="Bid Submitted Successully"
          messageBody="Your bid has been submitted"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SingleDetail;
