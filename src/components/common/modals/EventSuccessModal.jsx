import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import success from "./../../../custom-images/success.svg";

Modal.setAppElement("#root");

function EventSuccessModal(props) {
  const { addClass = "header-icon", closeSuccessModal = false } = props;
  const [open, setOpen] = useState(true);

  const customStyles = {
    content: {
      width: "40%",
      // margin: "auto",
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(open);
  };

  const closeModal = () => {
    // closeSuccessModal();
    setOpen(!open);
    window.location = `${process.env.PUBLIC_URL}/pages/entertainment/events`
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
        // onRequestClose={close}
        contentLabel="addCartModal"
        className="add-cart-modal modal resizeModal"
        id="addCartModal"
        shouldFocusAfterRender={false}
        portalClassName="ReactModalPortal add-to-cart-portal"
        overlayClassName="cart-modal-overlay"
        style={customStyles}
        // onAfterOpen={afterOpenModal}
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

              <div className="d-flex justify-content-center">
                <img src={success} alt="logo" />
              </div>
              <h6 className="text-center">{props.messageTitle}</h6>
              <div className="mb-2 text-center additional-message">
                {props.messageBody}
              </div>

              <div className="d-flex justify-content-center">
                <button onClick={closeModal} className="w-75 btn btn-primary">
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EventSuccessModal;
