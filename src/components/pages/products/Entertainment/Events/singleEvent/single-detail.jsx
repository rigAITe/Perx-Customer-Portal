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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserDetail from "./UserDetail.jsx";
import EventSuccessModal from "../../../../../common/modals/EventSuccessModal.jsx";

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

  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false)
  const [info, setInfo] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)

  const toggle = (x) => {
    setModal(!modal)
    setInfo(x)
  };

  console.log('visibility ', info)

  return (
    <>
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
                  ticket.map((res) => {
                    return (
                      <AddRow
                        title={res.title}
                        venue={res.venue}
                        price={res.price}
                        point_name={res.point_name}
                        id={res.classid}
                        key={res.classid}
                        data={res}
                        toggle={toggle}
                      />
                    )
                  })
                }
              </tbody>
            </table>
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
            {description}
          </TabPanel>
        </Tabs>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} contentClassName="address-modal">
          <ModalHeader toggle={toggle} charCode="x">User Information</ModalHeader>
          <ModalBody>
            <UserDetail
              info={info}
              setModal={setModal}
              setShowSuccess={setShowSuccess}
            />
          </ModalBody>
        </Modal>
      </div>
      {showSuccess ? (
        <EventSuccessModal
          messageTitle="Event Redeemed Successfully"
          messageBody="Your redeem was submitted successfully"
        />
      ) : (
        ""
      )}
    </>
  );
}

export default SingleDetail;
