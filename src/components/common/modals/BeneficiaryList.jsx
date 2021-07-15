import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

function BeneficiaryList(props) {
  const { addClass = "header-icon" } = props;
  const [open, setOpen] = useState(true);

  const customStyles = {
    content: {
      width: "30%",
      margin: "0 auto"
    },
  };

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
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
              <h5>List of Beneficiaries</h5>
              <p className="mb-1 p-4 beneficiary-list">
                John Doe - 37456890
                <i class="float-right fas fa-trash"></i>{" "}
              </p>
              <p className="mb-1 p-4 beneficiary-list">
                John Doe - 37456890
                <i class="float-right fas fa-trash"></i>{" "}
              </p>
              <p className="mb-1 p-4 beneficiary-list">
                John Doe - 37456890
                <i class="float-right fas fa-trash"></i>{" "}
              </p>
              <p className="mb-1 p-4 beneficiary-list">
                John Doe - 37456890
                <i class="float-right fas fa-trash"></i>{" "}
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

export default BeneficiaryList;
