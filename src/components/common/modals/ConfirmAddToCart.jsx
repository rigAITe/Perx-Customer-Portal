import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import bag from "../../../../src/components/pages/products/Shop/home/redeem-products/assets/bag.svg";

Modal.setAppElement("#root");

function ConfirmAddToCart(props) {
  const { data, hidemodal, addClass = "header-icon" } = props;
  const [open, setOpen] = useState(true);

  const customStyles = {
    content: {
      // width: "100%",
      margin: "0 auto",
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    hidemodal();
  };

  return (
    <>
      <Link
        to="#"
        className={`login-link ${addClass}`}
        onClick={openModal}
        title="Login"
      >
        <i className="icon-user-2"></i>
      </Link>
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
        <div className="modal-dialog modal-lg" role="document">
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

              <div className="text-muted text-center">
                Youʼve just added this product to the cart:
              </div>
              <h5 className="bold text-dark my-3 text-center additional-message">
                Nike Air Jordan 13 XIII Retro Low Clot Terracotta Sepia Size 13
              </h5>
              <div className="d-flex justify-content-center">
                <img className="w-25" src={bag} alt="logo" />
              </div>
              <div className="d-flex justify-content-center mt-2">
                <div className="col-6">
                  <Link to="#" className="w-100 btn btn-primary">
                    Go to Cart
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="#" className="w-100 btn btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ConfirmAddToCart;
