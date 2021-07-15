import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import tesco from "../../../../src/components/pages/products/Discount/assets/tesco.png";
import "../../../../src/components/pages/products/Discount/discount.css";

Modal.setAppElement("#root");

function ListOfLocations(props) {
  const { addClass = "header-icon" } = props;
  const [open, setOpen] = useState(true);

  const customStyles = {
    content: {
      width: "35%",
      margin: "0 auto",
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    props.close();
    // setOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={open}
        // onRequestClose={close}
        contentLabel="addCartModal"
        className="add-cart-modal modal"
        id="addCartModal"
        shouldFocusAfterRender={false}
        portalClassName="ReactModalPortal add-to-cart-portal"
        overlayClassName="cart-modal-overlay"
        style={customStyles}
        // onAfterOpen={afterOpenModal}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body p-5">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={closeModal}
              >
                ×
              </button>
              <h5>List of locations/stores</h5>
              <div className="d-flex justify-content-center">
                <img className="modal-logo" src={tesco} alt="logo" />
              </div>
              <p className="d-flex justify-content-between font-weight-bold mb-1 p-4 beneficiary-list">
                <div>Tesco Lekki</div>
                <div className="explore">
                  <Link to="#">Explore</Link>
                  <i class="ml-2 float-right fas fa-chevron-right"></i>{" "}
                </div>
              </p>
              <p className="d-flex justify-content-between font-weight-bold mb-1 p-4 beneficiary-list">
                <div>Tesco Ikeja</div>
                <div className="explore">
                  <Link to="#">Explore</Link>{" "}
                  <i class="ml-2 float-right fas fa-chevron-right"></i>{" "}
                </div>
              </p>
              <p className="d-flex justify-content-between font-weight-bold mb-1 p-4 beneficiary-list">
                <div>Tesco Maryland</div>
                <div className="explore">
                  <Link to="#">Explore</Link>{" "}
                  <i class="ml-2 float-right fas fa-chevron-right"></i>{" "}
                </div>
              </p>
              <div className="btn-actions">
                <Link to="#" onClick={closeModal}>
                  <button className="btn btn-danger">Close</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ListOfLocations;
