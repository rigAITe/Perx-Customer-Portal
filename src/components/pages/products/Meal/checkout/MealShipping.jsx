import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Modal from "react-modal";
import { isStateHandled } from "./../../../../../../src/utils/index.js";


import Breadcrumb from "./../../../../../../src/components/common/breadcrumb.jsx";
import ShippingForm from "./../../../../../../src/components/pages/others/common/shipping-form.jsx";
import EditShippingForm from "./../../../../../../src/components/pages/others/common/edit-shipping-form.jsx";
import SavedAddress from "./../../../../../../src/components/pages/others/common/saved-address.jsx";
import MealSummary from "./meal-summary.jsx";

import swal from "sweetalert";
import Loading from "../../../../features/Loader/Loading.jsx";

import { LoginContext } from "../../../../../context/Auth.js";
import LoaderContext from "../../../../../context/Loading.js";

Modal.setAppElement("#root");

function MealShipping() {
  const {
    getUserAddresses,
    updateUserAddress,
    updateAddressState,
    userAddressState,
    setEditInputs,
    editInputs,
  } = useContext(LoginContext);
  const { loading } = useContext(LoaderContext);

  const [open, setOpen] = useState(false);
  const [addressContainer, setAddressContainer] = useState(false);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getUserAddresses();
  }, []);

  useEffect(() => {
    console.log(userAddressState.data);
    if (
      isStateHandled(userAddressState) &&
      !isStateHandled(userAddressState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(userAddressState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(userAddressState) &&
      isStateHandled(userAddressState).status
    ) {
      setAddresses(userAddressState.data.data);
    }
  }, [userAddressState.data]);

  useEffect(() => {
    if (
      isStateHandled(updateAddressState) &&
      !isStateHandled(updateAddressState).status
    ) {
      swal({
        title: "Oops!",
        text: isStateHandled(updateAddressState).message,
        icon: "error",
        button: "Ok",
      });
      return;
    }

    if (
      isStateHandled(updateAddressState) &&
      isStateHandled(updateAddressState).status
    ) {
        swal({
          title: "Success!",
          text: isStateHandled(updateAddressState).message,
          icon: "success",
          button: "Ok",
        });
    }
  }, [updateAddressState.data]);

  const editAddressData = useRef({});

  const updateAddress = () => {
    updateUserAddress();
  };

  const openModal = (addressData) => {
    editAddressData.current = addressData;
    setEditInputs((inputs) => ({
      ...inputs,
      first_name: editAddressData.current.first_name,
      last_name: editAddressData.current.last_name,
      email: editAddressData.current.email,
      address: editAddressData.current.address,
      city_id: editAddressData.current.city_id || 1,
      phone_no: editAddressData.current.phone_no,
      state_id: editAddressData.current.state_id || 1,
      country_id: 1,
      address_id: editAddressData.current.address_id,
    }));
    setOpen(true);
  };

  const toggeleAddress = () => {
    setAddressContainer(!addressContainer);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      {loading ? <Loading /> : ""}
      <Helmet>
        <title>Customer Portal - Checkout Page </title>
      </Helmet>

      <h1 className="d-none">Customer Portal - Checkout Page</h1>

      <div className="main">
        <Breadcrumb current="Checkout" parent="pages" />

        <div className="container">
          {/* <CheckoutProgessBar /> */}
          <p>Review and payment</p>
          <div className="row">
            <div className="col-lg-7">
              <ul className="checkout-steps">
                <li>
                  <h2 className="step-title bold">Shipping Address</h2>
                  <div>
                    <p className="light">Saved Address</p>

                    {addresses &&
                      addresses.map((address) => {
                        return (
                          <SavedAddress
                            address={address}
                            onClick={() => openModal(address)}
                            active
                          />
                        );
                      })}
                  </div>
                  <Link
                    to="#"
                    className="btn btn-sm btn-outline-secondary btn-new-address"
                    onClick={toggeleAddress}
                  >
                    +Add New Address
                  </Link>
                  {addressContainer ? (
                    <div className="my-addressbar">
                      <ShippingForm />
                    </div>
                  ) : null}
                </li>
              </ul>
            </div>

            <div className="col-md-5">
              <MealSummary deliveryData={addresses} />
            </div>
          </div>
        </div>

        <div className="mb-6"></div>
      </div>

      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        shouldFocusAfterRender={false}
        contentLabel="Shipping Address Modal"
        className="shipping-popup"
        id="shipping-address-form"
        overlayClassName="cart-modal-overlay"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form style={{ marginBottom: "0" }}>
              <div className="modal-header">
                <h3 className="modal-title" id="addressModalLabel">
                  Edit Shipping Address
                </h3>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body custom-scrollbar">
                <EditShippingForm editData={editInputs} />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-link btn-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  onClick={() => updateAddress()}
                  type="button"
                  className="btn btn-primary btn-sm"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MealShipping;
