import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import success from "./../../../custom-images/success.svg";

Modal.setAppElement("#root");

function SuccessModalWithButton(props) {
  const { data, hidemodal, addClass = "header-icon" } = props;
  const [open, setOpen] = useState(true);

  const customStyles = {
    content: {
      width: "40%",
      margin: "0 auto",
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    hidemodal();
    // setOpen(false);
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

              <div className="d-flex justify-content-center">
                <img src={success} alt="logo" />
              </div>
              <h6 className="text-center">{data.messageTitle}</h6>
              <div className="my-3 text-center additional-message">
                {data.messageBody}
              </div>
              <div className="d-flex justify-content-center">
                <Link to={data.link} className="w-75 btn btn-primary">
                  {data.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SuccessModalWithButton;
