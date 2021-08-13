import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import success from "./../../../custom-images/success.svg";

Modal.setAppElement("#root");

function SuccessfulBidModal(props) {
  const { addClass = "header-icon" } = props;
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
    setOpen(false);
  };

  console.log('PROP ', props.refNumber)

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
              <div className="text-center additional-message">
                {props.messageBody}
              </div>

              <hr className="divider" />

              <div className="text-center">
                {props.amount == 0 ? '' :
                <><p>Your bid</p>
                <p className="black-text bold">
                  {props.amount} <span className="ruby-tag">Rubies</span>
                </p></> }
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  className="blue-anchor"
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/pages/bid_history/${props.refNumber}`,
                    state: { refNumber: props.refNumber }
                  }}
                >
                  {/* <Link 
                  to={`${process.env.PUBLIC_URL}/pages/bid_history`}
                > */}
                  <button onClick={closeModal} className=" btn btn-primary">
                    Go to Bid History
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SuccessfulBidModal;
