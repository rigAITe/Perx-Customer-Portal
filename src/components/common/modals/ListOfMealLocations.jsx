import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import beer from "../../../../src/components/pages/products/Meal/assets/company-logos/beerhugs.svg";
import "../../../../src/components/pages/products/Discount/discount.css";

Modal.setAppElement("#root");

function ListOfMealLocations(props) {
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
  };

  return (
    <>
      <Modal
        isOpen={open}
        contentLabel="addCartModal"
        className="add-cart-modal modal"
        id="addCartModal"
        shouldFocusAfterRender={false}
        portalClassName="ReactModalPortal add-to-cart-portal"
        overlayClassName="cart-modal-overlay"
        style={customStyles}
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
              <h5>List of locations/restaurants</h5>
              <div className="d-flex justify-content-center">
                <img className="modal-logo" src={beer} alt="logo" />
              </div>
              <p className="d-flex justify-content-between font-weight-bold mb-1 p-4 beneficiary-list">
                <div>BeerHugz Lekki</div>
                <div className="explore">
                  <Link to={`${process.env.PUBLIC_URL}/pages/meal/location/1`}>
                    View Menu
                  </Link>
                  <i class="ml-2 float-right fas fa-chevron-right"></i>{" "}
                </div>
              </p>
              <p className="d-flex justify-content-between font-weight-bold mb-1 p-4 beneficiary-list">
                <div>BeerHugz Ikeja</div>
                <div className="explore">
                  <Link to={`${process.env.PUBLIC_URL}/pages/meal/location/1`}>
                    View Menu
                  </Link>{" "}
                  <i class="ml-2 float-right fas fa-chevron-right"></i>{" "}
                </div>
              </p>
              <p className="d-flex justify-content-between font-weight-bold mb-1 p-4 beneficiary-list">
                <div>BeerHugz Maryland</div>
                <div className="explore">
                  <Link to={`${process.env.PUBLIC_URL}/pages/meal/location/1`}>
                    View Menu
                  </Link>{" "}
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

export default ListOfMealLocations;
