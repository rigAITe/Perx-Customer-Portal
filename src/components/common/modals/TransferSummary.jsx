// Hooks and contexts
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { TransferPointsContext } from "../../../context/TransferPoints";
import LoaderContext from "../../../context/Loading";
import { LoginContext } from "../../../context/Auth";

// Components
import Loading from "../../features/Loader/Loading";
import Modal from "react-modal";
import SuccessModal from "./SuccessModal";
import swal from "sweetalert";

//UI
import transferPoints from "../../pages/others/common/transfer-points/transfer-points";

Modal.setAppElement("#root");

function TransferSummary(props) {
  const { addClass = "header-icon" } = props;
  const [open, setOpen] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    getUserBalance,
  } = useContext(LoginContext);

  const { makeTransfer, state, setInputs, inputs } = useContext(
    TransferPointsContext
  );
  const { loading } = useContext(LoaderContext);

  const customStyles = {
    content: {
      width: "40%",
      margin: "0 auto",
    },
  };

  useEffect(() => {
    if (state.data !== null) {
      console.log(state.data);
      if (state.data.status === 1 && state.data.success === true) {
        setShowSuccess(true);
        getUserBalance();
      }

      if (state.data.status === 0 && state.data.success === false) {
        swal({
          title: "Oops!",
          text: state.data.message,
          icon: "error",
          button: "Ok",
        });
      }
    }
  }, [state]);

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const transfer = () => {
    const data = {
      recepient_number: props.data.membership_id,
      amount: props.data.amount,
      save: props.data.save_beneficiary,
      pin: inputs.pin,
    };

    makeTransfer(data);
    closeModal();
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
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
        {loading ? <Loading /> : ""}
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body p-5">
              <h5>Review Transfer</h5>
              <button
                title="Close (Esc)"
                type="button"
                className="mt-2 mfp-close"
                onClick={closeModal}
              >
                ×
              </button>

              <h6 className="">
                Confirm <span className="highlight">{props.data.amount}</span>{" "}
                transfer to <span className="highlight">{props.data.name}</span>{" "}
                with membership id{" "}
                <span className="highlight">{props.data.membership_id}</span>
              </h6>
              <div className="additional-message mb-2 font-weight-light">
                Please ensure that the above details are correct. Submitted
                transfers cannot be recalled
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label
                      htmlFor="acc-name"
                      className="font-weight-normal label"
                    >
                      Enter your Pin
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="acc-name"
                      required
                      name="pin"
                      onChange={handleInputChange}
                      value={inputs.pin}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  onClick={() => transfer()}
                  className="w-75 btn btn-primary"
                >
                  Tranfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {showSuccess === true ? (
        <SuccessModal
          messageTitle={`Transfer Successful`}
          messageBody={`Your order has been submited successfully`}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default TransferSummary;
